import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';

import './App.css';
import logo from './logo.png';


const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
      <ApolloProvider client={client}>
          <Router>
              <div className="container">
                  <img src={logo} alt="logo" style={logostyle} />
              </div>
              <Route exact path="/" component={Launches} />
              <Route exact path="/details/:flight_number" component={Launch} />
          </Router>
      </ApolloProvider>
  );
}


const logostyle = {
    width: '300px',
    display: 'block',
    margin: '0 auto',
}
export default App;
