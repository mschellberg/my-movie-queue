import React, { Component } from 'react';

class MovieDisplay extends Component {
    watchTrailer() {
        console.log('this is connected')
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id 
        window.location.href = url
        console.log(window.location.href)
    }

    render() {
        return<table key={this.props.movie.id}>
        <tbody>
            <tr className="movie-container">
                <td>
                <img className="image" alt="poster" src={this.props.movie.poster_src}/>
                </td>
                <td className="title-description">
                <h3>{this.props.movie.title}</h3>
                <p className="description">{this.props.movie.overview}</p>
                <input type="playTrailer" onClick={this.watchTrailer.bind(this)} value="Play trailer"/>
                </td>
                </tr>
        </tbody>
    </table>
    }
}

export default MovieDisplay