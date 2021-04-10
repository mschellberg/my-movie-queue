import React from 'react';

const Home = () => {
  
    return (
      <>
      <div className="main-container">
        <h1 className="title-text">SEARCH <span className="secondary-color bold-text">MOVIES</span></h1>
        <div className="input-group">
            <input type="search" className="form-control rounded searchbar" placeholder="Search for movies..." aria-label="Search"
                aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline orange-button">Search</button>
        </div>
        <div className="results-container add-margin">
          <h2>This container will hold search results</h2>
        </div>
      </div>
      </>
    );
  };
  
  export default Home;