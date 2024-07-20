import React from 'react';
import styled from 'styled-components';

const CourseCard = () => {
  return (
    <Wrapper>
      <ImageDiv>
        <Image />
      </ImageDiv>
      <ContentDiv>
        <ContentText>
          <Label>알고리즘</Label>
          <Title>[무료] 떠먹여주는 알고리즘</Title>
          <Description>
            다양한 알고리즘 코딩테스트 문항을 통해 어떠한 알고리즘 유형이 강하고 약한지 어쩌구저쩌구
          </Description>
        </ContentText>
        <PriceDiv>
          <PriceText>
            <span>무료</span>
          </PriceText>
        </PriceDiv>
      </ContentDiv>
    </Wrapper>
  );
};

export default CourseCard;

const Wrapper = styled.div`
  width: 296px;
  max-width: 100%;
  height: 24rem;
  min-height: 381px;
  border-radius: 8px;
  background-color: #fff;
  flex-direction: column;
  transition: all 250ms ease-in-out;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const ImageDiv = styled.div`
  position: relative;
  padding: 0;
  border-bottom: 1px solid rgb(240, 241, 243);
  background-color: transparent;
  width: 100%;
  height: 145px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  background-image: url(https://cdn-api.elice.io/api/file/3cf66c25a8874700a875ec05c37a3f5c/580x290-1.png?se=2024-08-01T00%3A15%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=WnTle4RGx2OLNtPxQltbFipryW3ogxFTHIYqfBsh7XE%3D);
  width: 100%;
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const ContentText = styled.div`
  color: #7d7e80;
  color: #5e5f61;
  padding: 20px;
`;

const Label = styled.div`
  color: #524fa1;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Title = styled.div`
  color: #222;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 3.2rem;
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: #5e5f61;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 45px;
`;

const PriceDiv = styled.div`
  width: 100%;
  margin-top: 16px;
  position: absolute;
  bottom: 0;
  padding: 0 1.25rem 1.25rem 1.25rem;
  z-index: 1;
`;

const PriceText = styled.div`
  width: 100%;
  border-top: 1px solid rgb(240, 241, 243);
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #00ab53;
    font-size: 1rem;
    font-weight: 700;
    padding-top: 16px;
    width: 100%;
  }
`;
