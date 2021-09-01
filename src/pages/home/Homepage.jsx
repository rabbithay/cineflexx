import React from 'react';
import styled from 'styled-components';

export default function Homepage() {
  return (

    <Background>
      <SubTitle>
        <h2>Selecione o filme</h2>
      </SubTitle>
      <MoviesList>
        <Movie>
          <div />
        </Movie>
      </MoviesList>
    </Background>

  );
}

const Background = styled.div`
  background-color: #fafaf6;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 67px 25px 40px 30px;
  font-family: 'Roboto';
`;

const SubTitle = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #0e0e13;
    font-size: 24px;
  }
`;

const MoviesList = styled.div`
  width: 100%;
  height: auto;
`;

const Movie = styled.div`
  width: 129px;
  height: 193px;
  padding: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  div {
    width: 100%;
    height: 100%;
    background-color: #e94692;

  }
`;
