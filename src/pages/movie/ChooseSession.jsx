import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import {
  Background, SubTitle, SessionsList, Times,
} from '../styledComponents';
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
              <>
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
              </>
            );
          })}

        </SessionsList>
      </Background>
      <Footer currentMovie={currentMovie} />
    </>

  );
}
