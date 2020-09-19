const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// give the ability to create routes
const app = express();


// Import Routes
const postRoutes = require('./routes/posts');

// Middlewares
app.use(bodyParser.json());

app.use('/posts', postRoutes);

// Connet to DB
mongoose.connect(
  process.env.MONGO_DB,
  { useNewUrlParser: true },
  () => {
  console.log('Connected!');
  
});

// Start Listening to the server
app.listen(3000);