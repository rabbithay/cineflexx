import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './home/Homepage';
import ChooseSession from './movie/ChooseSession';
import GlobalStyles from '../utils/GlobalStyles';
import ChooseSeat from './session/ChooseSeat';
import Header from '../components/Header';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/filme:movieId" exact>
          <ChooseSession />
        </Route>
        <Route path="/sessao:sessaoId" exact>
          <ChooseSeat />
        </Route>
        <Route path="/sucesso" exact />
      </Switch>
    </Router>
  );
}

export default App;
