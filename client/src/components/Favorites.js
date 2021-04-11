import React from "react";
import { Link } from 'react-router-dom';

function Favorites() {
    return (
        <>
        <div className="main-container">
            <div className="add-margin">
                <h1 className="title-text">MY <span className="secondary-color bold-text">QUEUE</span></h1>
            </div>
            <div className="queue-nav">
                <p><Link to="/favorites" className="orange-button link-text bold-text queue-link">Favorites</Link></p>
                <p><Link to="/queue" className="orange-button link-text bold-text queue-link">To-Watch</Link></p>
            </div>
            <div className="results-container add-top-margin">
                <h2 className="center">Favorites list will be here</h2>
            </div>
        </div>
        </>
    )
}

export default Favorites;