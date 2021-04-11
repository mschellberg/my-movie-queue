<<<<<<< HEAD
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost", {
=======
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/my-movie-queue', {
>>>>>>> 2f2dd5385578cf989eb8c01334977ae8ecebfea3
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

<<<<<<< HEAD
module.exports = mongoose.connection;
=======
module.exports = mongoose.connection;
>>>>>>> 2f2dd5385578cf989eb8c01334977ae8ecebfea3
