import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Launches from './components/Launches';

import './App.css';
import logo from './logo.png';


const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
      <ApolloProvider client={client}>
          <div className="container">
              <img src={logo} alt="logo" style={logostyle} />
              <Launches />
          </div>
      </ApolloProvider>
  );
}


const logostyle = {
    width: '300px',
    display: 'block',
    margin: '0 auto',
}
export default App;
