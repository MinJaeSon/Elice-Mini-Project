import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PrevButton } from '@assets/arrow_left.svg';
import { ReactComponent as NextButton } from '@assets/arrow_right.svg';

const Pagination = () => {
  const [isHover, setIsHover] = useState({ prev: false, next: false });

  const handleArrowLeftHover = () => {
    setIsHover(prevState => ({
      ...prevState,
      prev: !prevState.prev,
    }));
  };

  const handleArrowRightHover = () => {
    setIsHover(prevState => ({
      ...prevState,
      next: !prevState.next,
    }));
  };

  return (
    <Wrapper>
      <ArrowButton
        as={PrevButton}
        stroke={isHover.prev ? '#524fa1' : '#666'}
        onMouseOver={handleArrowLeftHover}
        onMouseLeave={handleArrowLeftHover}
      />
      <PageDiv>
        <PageButton>1</PageButton>
      </PageDiv>
      <ArrowButton
        as={NextButton}
        stroke={isHover.next ? '#524fa1' : '#666'}
        onMouseOver={handleArrowRightHover}
        onMouseLeave={handleArrowRightHover}
      />
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

const ArrowButton = styled.img`
  width: 17px;
  height: 17px;
  padding: 3.5px;
  border-radius: 0.25rem;
  cursor: pointer;
  &:first-child {
    margin-right: 0.375rem;
    &:hover {
      background-color: #efeffd;
    }
  }
  &:last-child {
    margin-left: 0.375rem;
    &:hover {
      background-color: #efeffd;
    }
  }
`;

const PageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const PageButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 6px;
  padding: 1px 6px;
  border-radius: 0.25rem;
  border: none;
  background-color: transparent;
  color: #999;
  font-weight: 700;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: #efeffc;
    color: #524fa1;
  }
`;
