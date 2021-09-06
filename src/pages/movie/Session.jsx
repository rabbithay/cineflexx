import React from 'react';
import { Link } from 'react-router-dom';
import { Times } from '../styledComponents';

export default function Session({ day }) {
  const { weekday, date, showtimes } = day;

  return (
    <>
      <p>
        {weekday}
        {' '}
        -
        {' '}
        {date}
      </p>
      <Times>
        {showtimes.map((time) => {
          const { id, name } = time;
          return (
            <Link to={`/sessao/${id}`}>
              <button type="button">{name}</button>
            </Link>
          );
        })}
      </Times>
    </>
  );
}
