/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import Footer from '../../components/Footer';

export default function ChooseSeat() {
  const { sessionId } = useParams();
  const [seatList, setSeatList] = useState([]);

  useEffect(() => {
    try {
      axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`).then((req) => {
        setSeatList(req.data.seats.map((v) => ({ ...v, isSelected: false })));
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
          {seatList.map((seat) => {
            const { name, isAvailable, isSelected } = seat;
            return (
              <Seat
                isAvailable={isAvailable}
                isSelected={isSelected}
              >
                {name}

              </Seat>

            );
          })}

        </SeatsList>
        <Label>
          <div>
            <Seat
              isAvailable
              isSelected
            />
            <p>Selecionado</p>
          </div>
          <div>
            <Seat
              isAvailable
              isSelected={false}
            />
            <p>Disponível</p>
          </div>
          <div>
            <Seat
              isAvailable={false}
              isSelected={false}
            />
            <p>Indisponível</p>
          </div>
        </Label>

        <BuyerInfo onSubmit={() => alert()}>
          {/* <p>Nome do comprador:</p> */}
          <input type="text" placeholder="Digite seu nome..." />
          {/* <p>CPF do comprador:</p> */}
          <input type="text" placeholder="Digite seu CPF..." />
          <ConfirmButton type="submit">Reservar assento(s)</ConfirmButton>
        </BuyerInfo>
      </Background>
      {/* <Footer /> */}
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

const Seat = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${(props) => ((props.isAvailable) ? ((props.isSelected) ? '#8DD7CF' : '#C3CFD9') : '#FBE192')};
    border: 2px solid ${(props) => ((props.isAvailable) ? ((props.isSelected) ? 'rgba(212, 245, 241, 0.5)' : 'rgba(248, 252, 255, 0.5)') : 'rgba(245, 243, 236, 0.7)')};
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;

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
const Label = styled.div`
margin-top: 15px;
  display: flex;
  justify-content: space-around;
  div {
    p{
      font-size: 13px;
      color: #fff8fd;

    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
