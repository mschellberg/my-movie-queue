import React from 'react';
import Movie from './Movie';
const Home = () => {

    return (
      <>
      <div className="main-container">
        <h1 className="title-text add-margin">SEARCH <span className="secondary-color bold-text">MOVIES</span></h1>
        
        <div className="results-container add-margin">
         <Movie />
        </div>
      </div>
      </>
    );
  }; 
  export default Home;