import React from 'react';
import styled from 'styled-components';

export default function Footer({ currentMovie }) {
  const {
    title, weekday, time, image,
  } = currentMovie;
  return (
    <BottomBar>
      <Movie>
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

const BottomBar = styled.div`
  width: 100%;
  height: 117px;
  background-color: #e94692;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  bottom: 0px;
  padding: 10px;
  .div {
    display: flex;
    flex-direction: column;
 
  }
  p {
    font-family: 'Roboto Condensed';
    font-size: 26px;
    color: #fff;
    margin-left: 14px;
    font-weight: 500;
  }
`;

const Movie = styled.div`
  width: 64px;
  height: 89px;
  padding: 6px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: #fafaf6;
  img {
    width: 100%;
    height: 100%;

  }
`;
