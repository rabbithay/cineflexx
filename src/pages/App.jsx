import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './home/Homepage';
import ChooseSession from './movie/ChooseSession';
import GlobalStyles from '../utils/GlobalStyles';
import ChooseSeat from './session/ChooseSeat';
import Header from '../components/Header';
import TicketDetails from './success/TicketDetails';

function App() {
  const [seatsRequest, setSeatsRequest] = useState();
  const [currentMovie, setCurrentMovie] = useState({});

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/filme/:movieId" exact>
          <ChooseSession
            currentMovie={currentMovie}
            setCurrentMovie={setCurrentMovie}
          />
        </Route>
        <Route path="/sessao/:sessionId" exact>
          <ChooseSeat
            setSeatsRequest={setSeatsRequest}
            currentMovie={currentMovie}
            setCurrentMovie={setCurrentMovie}
          />
        </Route>
        <Route path="/sucesso" exact>
          <TicketDetails seatsRequest={seatsRequest} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
