import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CourseCard from '@components/courses/CourseCard';
import Pagination from '@components/courses/Pagination';
import CoursesType from '@/typing/typing';
import NoResult from '@components/NoResult';

interface CoursesProps {
  courseCount: number;
  courses: CoursesType[];
  count: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  searchParams: URLSearchParams;
}

const Courses: React.FC<CoursesProps> = ({
  courseCount,
  courses,
  count,
  setOffset,
  currentPage,
  setCurrentPage,
  searchParams,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const renderNoResult = () => {
    if (courseCount > 0) return;

    return <NoResult />;
  };

  const renderCourses = () => {
    return (
      <>
        <CourseDiv>
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </CourseDiv>
        {courseCount > 20 && (
          <Pagination
            courseCount={courseCount}
            count={count}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            searchParams={searchParams}
          />
        )}
      </>
    );
  };

  useEffect(() => {
    if (ref) ref.current?.scrollIntoView();
  }, [currentPage]);

  return (
    <Wrapper ref={ref}>
      <TotalDiv>
        <TotalText>전체 {courseCount}개</TotalText>
      </TotalDiv>
      {renderNoResult()}
      {renderCourses()}
    </Wrapper>
  );
};

export default Courses;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 12px;
`;

const TotalDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgb(225, 226, 228);
`;

const TotalText = styled.p`
  font-size: 0.75rem;
  color: #222;
  font-weight: 700;
  margin: 0;
`;

const CourseDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 16px;
  place-items: center;
`;
