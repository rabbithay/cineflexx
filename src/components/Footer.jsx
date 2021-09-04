import React from 'react';
import styled from 'styled-components';

export default function Footer({ currentMovie }) {
  const { title, image } = currentMovie;
  return (
    <BottomBar>
      <Movie>
        <img alt="movie poster" src={image} />
      </Movie>
      <h2>
        {title}
      </h2>
    </BottomBar>
  );
}

const BottomBar = styled.div`
  width: 100%;
  height: 117px;
  background-color: #1d1c26;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  bottom: 0px;
    padding: 10px;
  h2 {
    font-family: 'Roboto Condensed';
    font-size: 26px;
    color: #ffd47b;
    margin-left: 14px;
  }
`;

const Movie = styled.div`
  width: 64px;
  height: 89px;
  padding: 4px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: #fafaf6;
  img {
    width: 100%;
    height: 100%;
    background-color: #e94692;

  }
`;
