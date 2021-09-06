import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../styledComponents';

export default function MovieBox({ movie }) {
  const { posterURL, id } = movie;

  return (
    <Link to={`/filme/${id}`}>
      <Movie
        width="129px"
        heigth="193px"
        radius="5px"
        padding="8px"
        margin="0px 0px 0px 0px"
      >
        <img alt="movie poster" src={posterURL} />
      </Movie>
    </Link>
  );
}
