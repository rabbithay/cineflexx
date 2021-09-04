/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer';
import Seat from './Seat';
import SeatLabel from './SeatLabel';
import BuyerInfo from './BuyerInfo';

export default function ChooseSeat({ setSeatsRequest }) {
  const { sessionId } = useParams();
  const [seatList, setSeatList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    try {
      axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${sessionId}/seats`).then((req) => {
        setSeatList(req.data.seats.map((v) => ({ ...v, isSelected: false })));
        setCurrentMovie({
          title: req.data.movie.title,
          day: req.data.day.weekday,
          image: req.data.movie.posterURL,
          time: req.data.name,
          date: req.data.day.date,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Background>
        <SubTitle>
          <h2>Selecione o(s) assento(s)</h2>
        </SubTitle>
        <SeatsList>
          {seatList.map((seat) => (
            <Seat
              seat={seat}
              setSeatList={setSeatList}
              seatList={seatList}
            />
          ))}
        </SeatsList>
        <SeatLabel />
        <BuyerInfo
          seatList={seatList}
          setSeatsRequest={setSeatsRequest}
          currentMovie={currentMovie}
        />
      </Background>

      <Footer
        currentMovie={currentMovie}
      />
    </>
  );
}

const Background = styled.div`
    background-color: #1d1c26;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 67px 24px 40px 24px;
    font-family: 'Roboto Condensed';
`;

const SubTitle = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        color: #fff8fd;
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
