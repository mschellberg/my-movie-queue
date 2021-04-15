import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { searchMovies } from '../utils/API';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

// integrate Apollo Hooks
import { SAVE_BOOK } from '../utils/mutations';
import {useMutation} from '@apollo/react-hooks';

const getMovies = () => {
  // create state for holding returned google api data
  const [searchedMovies, setSearchedMovies] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [savedMoviesIds, setSavedMoviesIds] = useState(getSavedBookIds());

  // update for the movies- based on fucntion below
  useEffect(() => {
    return () => saveBookIds(savedBookIds);
});

//update mutations to put here
  // use mutation
  const [saveMovie] = useMutation(SAVE_MOVIE);
  
  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  //needs updating
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveMovieIds(savedMovieIds);
  });
///

/// Need to figure oout how to do that second, nestled call. 
  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchedMovies(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      /// Still need to alter the layout of the cards to include all important data.

      const movieData = items.map((movie) => ({
        movieId: movie.id,
        title: movie.title,
        overview: movie.overview,
        releaseDate: movie.release_date,
        posterPath: movie.poster_path,
      }));
      setSearchedMovies(movieData);
      setSearchInput('');
  }catch (err) {
      console.error(err);
    }
  };

  /*
  Save Movies and update
  // create function to handle saving a book to our database
  const handleSaveBook = async (bookId) => {
    // find the book in `searchedBooks` state by the matching id
    const book = searchedBooks.find((book) => book.bookId === bookId);
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
     const{data}= await saveBook({
        variables: { input: {...book} }
      });
      // if book successfully saves to user's account, save book id to state
      setSavedBookIds([...savedBookIds, book.bookId]);
    } catch (err) {
      console.error(err);
    }
  };
  */

  // For image path, we can change the w500 to one of 3 sizes. 
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>What Do You Want To Watch!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a movie'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedMovies.length
            ? `Viewing ${searchedMovies.length} results:`
            : 'Search for a movie to begin'}
        </h2>
        <CardColumns>
          {searchedMovies.map((movie) => {
            return (
              <Card key={movie.movieId} border='dark'>
                
                  <Card.Img src= {(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`)} alt={`The cover for ${movie.title}`)} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{movie.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedMovieIds?.some((savedMovieId) => savedMovieId === movie.id)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveMovie(movie.movieId)}>
                      {savedMovieIds?.some((savedMovieId) => savedMovieId === movie.id)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default movieDatabase;
