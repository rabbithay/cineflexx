/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function BuyerInfo({ seatList, setSeatsRequest, currentMovie }) {
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
const Form = styled.form`
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
        color: #fff8fd;

    }
    input{
        width:calc(100vw - 48px);
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 18px;
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-top: 15px;

        ::placeholder {
            color: #46455b;
            font-style: italic;
        }
    }
   
`;
const ConfirmButton = styled.button`
    width: 225px;
    height: 42px;
    background-color: #e94692;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    margin-top: 30px;
    font-weight: 500;
    .disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
:active {
  transform: translateX(1px);

  transform: translateY(1px);
}
`;
