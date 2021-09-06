import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { TopBar } from '../pages/styledComponents';

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  return (
    <TopBar>
      <div />
      <Link to="/">
        <h1>
          Cineflex
        </h1>
      </Link>
      {(location.pathname === '/') ? <div /> : (
        <TiArrowBack
          color="#fff"
          size="32px"
          onClick={history.goBack}
        />
      )}
    </TopBar>
  );
}
