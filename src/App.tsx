import React, { useEffect, useState } from 'react';
import './App.css';
import SeachHeader from '@/components/search/SeachHeader';
import Courses from '@/components/courses/Courses';
import { useSearchParams } from 'react-router-dom';
import api from './api/api';

const FILTER_CONDITIONS = JSON.stringify({
  $and: [
    { title: '%c언어' },
    {
      $or: [
        { enroll_type: 0, is_free: true },
        { enroll_type: 0, is_free: false },
        { enroll_type: 4 },
      ],
    },
  ],
});

const COUNT = 20;

function App() {
  const [offset, setOffset] = useState(0);
  const [courses, setCourses] = useState([]);
  const [courseCount, setCourseCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const price = searchParams.getAll('price');

  const fetchData = async () => {
    await api
      .get('/org/academy/course/list/', {
        params: {
          filter_conditions: FILTER_CONDITIONS,
          offset: offset,
          count: COUNT,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCourseCount(res.data.course_count);
        setCourses(res.data.courses);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [offset, searchParams]);

  return (
    <div>
      <SeachHeader />
      <Courses courses={courses} courseCount={courseCount} />
    </div>
  );
}

export default App;
