import React, { useEffect, useState } from 'react';
import './App.css';
import SeachHeader from '@/components/search/SeachHeader';
import Courses from '@/components/courses/Courses';
import { useSearchParams } from 'react-router-dom';
import api from '@api/api';

const COUNT = 20;

function App() {
  const [offset, setOffset] = useState(0);
  const [courses, setCourses] = useState([]);
  const [courseCount, setCourseCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const price = searchParams.getAll('price');
  const keyword = searchParams.get('keyword');

  const filter_conditions = JSON.stringify({
    $and: [
      keyword ? { title: `%${keyword}%` } : {},
      {
        $or: [
          price.includes('무료') ? { enroll_type: 0, is_free: true } : null,
          price.includes('유료') ? { enroll_type: 0, is_free: false } : null,
          price.includes('구독') ? { enroll_type: 4 } : null,
        ].filter((condition) => condition !== null),
      },
    ],
  });

  const fetchData = async () => {
    await api
      .get('/org/academy/course/list/', {
        params: {
          filter_conditions: filter_conditions,
          offset: offset,
          count: COUNT,
        },
      })
      .then((res) => {
        setCourseCount(res.data.course_count);
        setCourses(res.data.courses);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [offset, searchParams, keyword]);

  return (
    <div>
      <SeachHeader />
      <Courses
        courses={courses}
        courseCount={courseCount}
        count={COUNT}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchParams={searchParams}
      />
    </div>
  );
}

export default App;
