import React from 'react';

class MovieDisplay extends React.Component {
    render() {
        return<table key={this.props.movie.id}>
        <tbody>
            <tr className="movie-container">
                <td>
                <img className="image" alt="poster" src={this.props.movie.poster_src}/>
                </td>
                <td className="title-description">
                <p className="movieTitle">{this.props.movie.title}</p>
                <p className="description">{this.props.movie.overview}</p>
                <p className="trailer">Trailer to movie goes here</p>
                </td>
                </tr>
        </tbody>
    </table>
    }
}

export default MovieDisplay