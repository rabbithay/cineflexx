/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Background, SubTitle, SeatsList } from '../styledComponents';
import Footer from '../../components/Footer';
import Seat from './Seat';
import SeatLabel from './SeatLabel';
import BuyerInfo from './BuyerInfo';

export default function ChooseSeat({ setSeatsRequest, currentMovie, setCurrentMovie }) {
  const { sessionId } = useParams();
  const [seatList, setSeatList] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    try {
      axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${sessionId}/seats`).then((req) => {
        setSeatList(req.data.seats.map((v) => ({ ...v, isSelected: false })));
        setCurrentMovie({
          ...currentMovie,
          weekday: req.data.day.weekday,
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
          selectedSeats={selectedSeats}
          setSelectedSeas={setSelectedSeats}
        />
      </Background>
      <Footer
        currentMovie={currentMovie}
      />
    </>
  );
}
