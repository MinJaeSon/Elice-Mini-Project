import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';
import Pagination from './Pagination';
import OrgAcademdyCourseListResponse from '@/typing/typing';
import CoursesType from '@/typing/typing';

interface CoursesProps {
  courseCount: number;
  courses: CoursesType[];
}

const Courses: React.FC<CoursesProps> = ({courseCount, courses}) => {
  return (
    <Wrapper>
      <TotalDiv>
        <TotalText>전체 {courseCount}개</TotalText>
      </TotalDiv>
      <CourseDiv>
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </CourseDiv>
      <Pagination />
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