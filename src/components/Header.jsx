import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <TopBar>
      <h1>
        CINEFLEX
      </h1>
    </TopBar>
  );
}

const TopBar = styled.div`
  width: 100%;
  height: 67px;
  background-color: #1d1c26;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  top: 0px;

  h1 {
    font-family: 'Roboto';
    font-size: 34px;
    color: #ffd47b;
  }
`;
