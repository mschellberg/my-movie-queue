import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './components/Nav'

import React from 'react';

// add these two library import statements
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
