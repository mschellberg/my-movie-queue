//Not sure if this is correct, following the module, there was no appollo on this page
//Just gql

//import { useQuery } from 'apollo-client';

import gql from 'graphql-tag';


export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      movieCount
      savedMovies {
        movie_id
        title
        overview
      }
    }
  }
`;
