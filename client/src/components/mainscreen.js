import React, { Component } from 'react';
import LoginForm from './loginForm';
import Register from './signupForm';
import MovieList from './movieList';
import Auth from '../utils/auth';


class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {page:"login"} ;
  }

  setPage(page){
    this.setState({page:page});
  }

  render() {
    if ( ! Auth.getToken()) {
      if ( this.state.page==="login") {
        return (
          <LoginForm setPage={this.setPage.bind(this)}/>
        );
      }
      else {
        return (
          <Register setPage={this.setPage.bind(this)}/>
        );
      }
    } else {
        
      return (
        <MovieList />
      );
      
      
      
    }
  }
}

export default MainScreen;
