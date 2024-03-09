const express = require('express');
const path = require('path');
const fs = require('fs'); // Require the file system module
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// Read data from db.json
const dbData = require('./db.json');

// Endpoint to serve featured movies JSON data
app.get('/featuredMovies', (req, res) => {
  res.json(dbData.featuredMovies);
});

// Endpoint to serve featured TV shows JSON data
app.get('/featuredTVShows', (req, res) => {
  res.json(dbData.featuredTVShows);
});

// Endpoint to serve collection JSON data
app.get('/collection', (req, res) => {
  res.json(dbData.collection);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
