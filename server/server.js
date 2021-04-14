const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");

const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");

const { typeDefs, resolvers } = require("./schemas");

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3002;
=======
const PORT = process.env.PORT || 3009;
>>>>>>> d024c39c01b931d4f2979336b472fd8241ecc056
console.log(process.env.NODE_ENV);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Listening on localhost:${PORT}${server.graphqlPath}`)
  );
});
