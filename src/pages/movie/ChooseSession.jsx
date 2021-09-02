import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';

export default function ChooseSession() {
  return (
    <>
      <Background>
        <SubTitle>
          <h2>Selecione o horário</h2>
        </SubTitle>
        <SessionsList>

          <SessionInfo>
            <p>Quinta-feira - 24/06/2021</p>
            <Link to="/sessao/2">
              <Times>
                <button type="button">15:00</button>
                <button type="button">19:00</button>
              </Times>
            </Link>

          </SessionInfo>
          <SessionInfo>
            <p>Sexta-feira - 25/06/2021</p>
            <Times>
              <button type="button">15:00</button>
              <button type="button">19:00</button>
            </Times>
          </SessionInfo>
        </SessionsList>
      </Background>
      <Footer />
    </>

  );
}

const Background = styled.div`
    background-color: #fafaf6;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 67px 25px 40px 30px;
    font-family: 'Roboto';
`;

const SubTitle = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        color: #0e0e13;
        font-size: 24px;
    }
`;

const SessionsList = styled.div`
    width: 100%;
    height: auto;
`;

const SessionInfo = styled.div`
    p{
        font-size: 20px;
        color: #030313;
    }
`;

const Times = styled.div`
   display: flex;
   button {
        width: 83px;
        height: 43px;
        background-color: #fb76b5;
        border-radius: 3px;
        margin: 22px 8px 23px 0px;
        font-size: 18px;
        
    }
`;
