import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TicketDetails() {
  return (
    <Background>
      <SubTitle>
        <h2> Pedido feito </h2>
        <h2> com sucesso! </h2>
      </SubTitle>
      <InfoTitle>Filme e sessão</InfoTitle>
      <InfoDescription>
        Enola Holmes
        {' '}
        <br />
        24/06/2021 15:00
      </InfoDescription>
      <InfoTitle>Ingressos</InfoTitle>
      <InfoDescription>
        Assento 15
        <br />
        Assento 16
      </InfoDescription>
      <InfoTitle>Comprador</InfoTitle>
      <InfoDescription>
        Nome: João da Silva Sauro
        {' '}
        <br />
        CPF: 123.456.789-10
      </InfoDescription>
      <Link to="/">
        <ConfirmButton type="submit">Voltar pra Home</ConfirmButton>
      </Link>

    </Background>
  );
}
const Background = styled.div`
    background-color: #fafaf6;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 67px 24px 40px 24px;
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubTitle = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        color: #0e0e13;
        font-size: 24px;
    }
`;
const InfoTitle = styled.p`
width: 100%;
font-weight: bold;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
margin-top: 40px;
color: #293845;
`;
const InfoDescription = styled.p`
width: 100%;

font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;
color: #293845;
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
