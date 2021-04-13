import { gql, useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import React, { Component } from 'react';
import Auth from '../utils/auth';
/*
const GET_MOVIE_LIST = gql`
  query Movie($movie: String!) {
    movie(movies: $movie) {
      id
      title
      overview
    }
  }
`;
*/
class MovieList extends Component {

    constructor(props) {
      super(props);
      this.state = {
          movies: []
      };
    }
  
    searchMovies(){
        //make an api call
        //when info/data is return to react, youll want set state with info
      const searchMovies=document.getElementById("searchMovies").value;
      this.setState({
          movies: [
            {
                id:1, 
                title:"Catch me if you can",
                overview:"about a con artist"
            }, 
            {
                id:2, 
                title:"twilight", 
                overview:"about vampires"
            }
          ]
      });
      
    }
    clearToken() {
        Auth.logout();
    } 
    // Displays Movie id, Title, Description
    render() {
      const movies=this.state.movies.map((movie, key) =>
        <tr key={movie.key}>
          <td>{movie.id}</td>
          <td>{movie.title}</td>
          <td>{movie.overview}</td>
        </tr>
      );
      console.table(movies);
      return (
        <div className="App">
          <h1>Movies</h1>
          Search Movies: <input id="searchMovies"/>
         <button onClick={() => this.searchMovies()}>Search movies</button><br/>
          <table border="1">
              <tbody>
         <tr><th>Movie Id</th><th>Title</th><th>Overview</th></tr>
          {movies}
          </tbody>
          </table>
          <br/>
          <button onClick={() => this.clearToken()}>Logout</button>
        </div>
      );
    }
  }
  
  export default MovieList;
  