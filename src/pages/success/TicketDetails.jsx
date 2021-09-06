import React from 'react';
import { Link } from 'react-router-dom';
import {
  Background, SubTitle, InfoTitle, InfoDescription, ConfirmButton,
} from '../styledComponents';

export default function TicketDetails({ seatsRequest }) {
  const {
    numbers, name, cpf, title, time, date,
  } = seatsRequest;

  return (
    <Background>
      <SubTitle>
        <h2> Pedido feito </h2>
        <h2> com sucesso! </h2>
      </SubTitle>
      <InfoTitle>Filme e sessão</InfoTitle>
      <InfoDescription>
        {title}
        {' '}
        <br />
        {date}
        {' '}
        -
        {' '}
        {time}
      </InfoDescription>
      <InfoTitle>Ingressos</InfoTitle>
      {numbers.map((i) => (
        <InfoDescription>
          Assento
          {' '}
          {i}
        </InfoDescription>
      ))}

      <InfoTitle>Comprador</InfoTitle>
      <InfoDescription>
        Nome:
        {' '}
        {name}
        {' '}
        <br />
        CPF:
        {' '}
        {cpf}
      </InfoDescription>
      <Link to="/">
        <ConfirmButton type="submit">Voltar pra Home</ConfirmButton>
      </Link>

    </Background>
  );
}
