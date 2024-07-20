import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const FILTERS = {
  name: '가격',
  content: [
    {
      id: 1,
      name: '무료',
      value: 'free',
      enrollType: 0,
    },
    {
      id: 2,
      name: '유료',
      value: 'paid',
      enrollType: 0,
    },
    {
      id: 3,
      name: '구독',
      value: 'subscribe',
      enrollType: 4,
    },
  ],
};

const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // const existingParams = decodeURIComponent(searchParams.toString());
    const existingParams = searchParams.getAll('price');
    const clickedPrice = e.currentTarget.textContent;
    if (clickedPrice) {
      if (existingParams.includes(clickedPrice)) {
        searchParams.delete('price');
        existingParams.forEach((price)=> {
          if (price !== clickedPrice) {
            searchParams.append('price', price);
          }
        })
      } else {
        searchParams.append('price', clickedPrice);
      }
      setSearchParams(searchParams);
    }
  };

  return (
    <Wrapper>
      <FilterDiv>
        <FilterName>{FILTERS.name}</FilterName>
        <FilterContent>
          {FILTERS.content.map((filter) => (
            <div key={filter.id} onClick={handleClick}>
              <button
                style={
                  searchParams.getAll('price').includes(filter.name)
                    ? {
                        backgroundColor: '#524FA1',
                        color: '#F0F1F3',
                      }
                    : {}
                }
              >
                <span>{filter.name}</span>
              </button>
            </div>
          ))}
        </FilterContent>
      </FilterDiv>
    </Wrapper>
  );
};

export default SearchFilter;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const FilterDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 48px;
  background-color: #fff;
  color: #5e5f61;
  margin: 0;
  border: 1px solid rgb(221, 221, 221);
  & + & {
    border-top: none;
  }
  div {
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    background-color: rgb(240, 241, 243);
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.25rem 0.75rem;
    min-width: 1.875rem;
    height: 1.875rem;
    border-radius: 1.875rem;
    font-size: 0.875rem;
    margin: 0.5rem;
    color: rgb(94, 95, 97);
    transition: all 150ms ease-in-out;
    &:hover {
      background-color: rgb(207, 207, 207);
      color: #141414;
    }
  }
  span {
  }
`;

const FilterName = styled.div`
  min-width: 6rem;
  padding: 0.875rem 1rem;
  background-color: rgb(249, 250, 252);
  border-right: 1px solid rgb(240, 240, 240);
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  justify-content: flex-start !important;
`;

const FilterContent = styled.div`
  padding: 0px 0.5rem;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
`;
