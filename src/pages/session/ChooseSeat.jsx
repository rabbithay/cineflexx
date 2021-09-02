/* eslint-disable no-plusplus */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';

export default function ChooseSeat() {
  return (
    <>
      <Background>
        <SubTitle>
          <h2>Selecione o(s) assento(s)</h2>
        </SubTitle>
        <SeatsList>
          <Link to="/sucesso">
            <Seat />
          </Link>
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />

        </SeatsList>
        <BuyerInfo onSubmit={() => alert()}>
          <p>Nome do comprador:</p>
          <input type="text" placeholder="Digite seu nome..." />
          <p>CPF do comprador:</p>
          <input type="text" placeholder="Digite seu CPF..." />
          <ConfirmButton type="submit">Reservar assento(s)</ConfirmButton>
        </BuyerInfo>
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
    padding: 67px 24px 40px 24px;
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

const SeatsList = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-gap: 7px;
    grid-template-columns: repeat(10, auto);
`;

const Seat = styled.div`
    width: 26px;
    height: 26px;
    background-color: #dddee9;
    border: 1px solid #bbbbcd;
    border-radius: 13px;
`;

const BuyerInfo = styled.form`
    width: 100%;
    height: auto;
    margin-top: 42px;
    color: #0e0e13;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 18px;
        margin-top: 7px;
        width: 100%;

    }
    input{
        width:calc(100vw - 48px);
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding-left: 18px;
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-top: 7px;

        ::placeholder {
            color: #AFAFAF;
            font-style: italic;
        }
    }
   
`;
const ConfirmButton = styled.button`
    width: 225px;
    height: 42px;
    background-color: #fb76b5;
    border-radius: 3px;
    color: #fafafc;
    font-size: 18px;
    margin-top: 50px;
`;
