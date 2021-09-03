import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MovieBox({ movie }) {
  const { posterURL, id } = movie;

  return (
    <Link to={`/filme/${id}`}>
      <Movie>
        <img alt="movie poster" src={posterURL} />
      </Movie>
    </Link>
  );
}

const Movie = styled.div`
  width: 129px;
  height: 193px;
  padding: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 0px 30px 10px 0px;
  img {
    width: 100%;
    height: 100%;
  }
`;
