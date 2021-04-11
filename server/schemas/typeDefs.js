// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    _id: ID
    username: String
    email: String!
    savedMovies: [Movie]
    movieCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

// export the typeDefs
module.exports = typeDefs;
const { qql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`
  type Movie {
    movie_id: Int
    title: String
    overview: [String]
  }
  type User {
    _id: ID
    username: String
    email: String
    movieCount: Int
    savedMovie: [Movie]
  }
  input savedMovie {
    movie_id: Int
    title: String
    overview: [String]
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedMovie(input: savedMovie!): User
    removeMovie(movie_id: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
