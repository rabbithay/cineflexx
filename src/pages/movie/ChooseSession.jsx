import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import Footer from '../../components/Footer';

export default function ChooseSession({ currentMovie, setCurrentMovie }) {
  const { movieId } = useParams();

  const [sessionList, setSessionList] = useState([]);

  useEffect(() => {
    try {
      axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${movieId}/showtimes`).then((req) => {
        setSessionList(req.data.days);
        setCurrentMovie({
          title: req.data.title,
          image: req.data.posterURL,
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
          <h2>Selecione o horário</h2>
        </SubTitle>

        <SessionsList>

          {sessionList.map((day) => {
            const { weekday, date, showtimes } = day;
            return (
              <SessionInfo>
                <p>
                  {weekday}
                  {' '}
                  -
                  {' '}
                  {date}
                </p>
                <Times>
                  {showtimes.map((time) => {
                    const { id, name } = time;

                    return (
                      <Link to={`/sessao/${id}`}>
                        <button type="button">{name}</button>
                      </Link>
                    );
                  })}
                </Times>

              </SessionInfo>
            );
          })}

        </SessionsList>
      </Background>
      <Footer currentMovie={currentMovie} />
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
