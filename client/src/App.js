import MovieList from "./components/movieList";
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
  uri: 'http://localhost:3001/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
     <MovieList/>
    </ApolloProvider>
  );
}
// always export our component function so we can use it in other files
export default App;
