import React from 'react';

class MovieDisplay extends React.Component {
    render() {
        return<div key={this.props.movie.id}>
            <div className="movie-container results-container">
                <div className="flex">
                    
                    <img className="image" alt="poster" src={this.props.movie.poster_src}/>
                    
                </div>
                <div className="flex movie-details center">
                    <p className="movieTitle">{this.props.movie.title}</p>
                    <p className="description">{this.props.movie.overview}</p>
                    <p className="trailer">Trailer to movie goes here</p>   
                </div>
            </div>
        </div>
    }
}

export default MovieDisplay