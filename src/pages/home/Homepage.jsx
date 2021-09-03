import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieBox from './MovieBox';

export default function Homepage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    try {
      axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies').then((req) => {
        setMovieList(req.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (

    <Background>
      <SubTitle>
        <h2>Selecione o filme</h2>
      </SubTitle>
      <MoviesList>
        {movieList.map((m) => <MovieBox movie={m} />)}
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
  display: flex;
  flex-wrap: wrap;

`;
