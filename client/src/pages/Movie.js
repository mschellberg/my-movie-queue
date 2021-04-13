import React, { Component } from 'react';
import MovieDisplay from '../components/MovieDisplay';
import $ from 'jquery'

class Movie extends Component {

    constructor(props) {
        super(props)
        this.state= {}

        // Fetch data from moviedb API
        this.performSearch()
        }
        performSearch(){
            // Use Ajax to use async calls to fetch data from web 
            // replace "search" with "discover" for random selection
            const urlApi = "https://api.themoviedb.org/3/discover/movie?api_key=8e3897289a2060fb320a0796b9783df4"
            $.ajax({
                url: urlApi,
                success: (searchResults) => {
                    console.log(searchResults);
                    const results = searchResults.results

                    // search for movies
                    var movieRows = []

                    results.forEach((movie) => {
                        movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                        const movieRow = <MovieDisplay key={movie.id} movie={movie}/>
                        movieRows.push(movieRow)
                    })

                    this.setState({rows: movieRows})
                },
                error: (status, err) => {
                    console.error("failed to fetch data")
                }
            })
    }

    render() {
        return (
            <div className="Test">
                {this.state.rows}
            </div>
        );
    }
}

export default Movie;