/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, ConfirmButton } from '../styledComponents';

export default function BuyerInfo({
  seatList, setSeatsRequest, currentMovie,
}) {
  const { title, time, date } = currentMovie;
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [userCPF, setUserCPF] = useState('');

  function ReserveSeats(event) {
    event.preventDefault();
    const selectedSeats = [];
    const selectedNumbers = [];
    seatList.forEach((s) => {
      if (s.isSelected) {
        selectedSeats.push(s.id);
        selectedNumbers.push(s.name);
      }
    });

    const seatsRequest = {
      ids: selectedSeats,
      name: userName,
      cpf: userCPF,
    };
    try {
      axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many', seatsRequest);
    } catch (error) {
      console.log(error);
    }

    setSeatsRequest({
      ...seatsRequest,
      title,
      time,
      date,
      numbers: selectedNumbers,
    });
    history.push('/sucesso');
  }
  return (
    <Form onSubmit={(event) => ReserveSeats(event)}>
      {/* <p>Nome do comprador:</p> */}
      <input type="text" placeholder="Digite seu nome..." value={userName} onChange={(e) => { setUserName(e.target.value); }} />
      {/* <p>CPF do comprador:</p> */}
      <input type="text" placeholder="Digite seu CPF..." value={userCPF} onChange={(e) => { setUserCPF(e.target.value); }} />
      <ConfirmButton type="submit">Reservar assento(s)</ConfirmButton>
    </Form>
  );
}
