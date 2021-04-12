import { gql, useQuery } from 'apollo-client';

export const GET_MOVIES = gql`
  query GetMovies {
    movies {
      movie_id
      title
      overview
    }
  }    
`;
export default GET_MOVIES;