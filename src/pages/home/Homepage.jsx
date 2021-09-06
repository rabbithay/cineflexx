import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieBox from './MovieBox';
import { Background, SubTitle, MoviesList } from '../styledComponents';

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
