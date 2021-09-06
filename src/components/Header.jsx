import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TiArrowBack } from 'react-icons/ti';

export default function Header() {
  const history = useHistory();

  return (
    <TopBar>
      <div />
      <Link to="/">
        <h1>
          Cineflex
        </h1>
      </Link>
      <TiArrowBack
        color="#fff"
        size="32px"
        onClick={history.goBack}
      />
    </TopBar>
  );
}

const TopBar = styled.div`
  width: 100%;
  height: 67px;
  background-color: #e94692;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  top: 0px;
  padding:8px;
  h1 {
    font-family: 'Zilla Slab';
    font-size: 40px;
    color: #fff;
  }

`;
