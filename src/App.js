import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import {GlobalProvider} from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

const StyledDiv = styled.div `
max-width: 30rem;
margin: 4rem auto;
`;

function App() {
  return (
    <StyledDiv>
      <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
      </GlobalProvider>
      </StyledDiv>
  )
}

export default App;