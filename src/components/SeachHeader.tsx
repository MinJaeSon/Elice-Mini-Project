import React from 'react';
import styled from 'styled-components';
import SearchBar from '@components/SearchBar';
import SearchFilter from '@components/SearchFilter';

const SeachHeader = () => {
  return (
    <Wrapper>
      <SearchBar />
      <Space />
      <SearchFilter />
    </Wrapper>
  );
};

export default SeachHeader;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Space = styled.div`
  display: block;
  width: 0;
  height: 0;
  margin: 0 0 0.625rem;
  padding: 0;
`;
