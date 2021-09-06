import React from 'react';
import { BottomBar, Movie } from '../pages/styledComponents';

export default function Footer({ currentMovie }) {
  const {
    title, weekday, time, image,
  } = currentMovie;
  return (
    <BottomBar>
      <Movie
        width="64px"
        heigth="89px"
        radius="3px"
        padding="6px"
        margin="0px 10px 0px 0px"
      >
        <img alt="movie poster" src={image} />
      </Movie>
      <div>
        <p>
          {title}
        </p>
        {(weekday) ? (
          <p>
            { weekday }
            {' '}
            -
            {' '}
            { time }
            {' '}
          </p>
        ) : <p>{' '}</p>}
      </div>
    </BottomBar>
  );
}
