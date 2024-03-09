const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Sample JSON data (assuming you have these JSON files in the same directory)
const featuredMoviesData = require('./featuredMovies.json');
const featuredTVShowsData = require('./featuredTVShows.json');
const collectionData = require('./collection.json');

// Endpoint to serve featured movies JSON data
app.get('/featuredMovies', (req, res) => {
  res.json(featuredMoviesData);
});

// Endpoint to serve featured TV shows JSON data
app.get('/featuredTVShows', (req, res) => {
  res.json(featuredTVShowsData);
});

// Endpoint to serve collection JSON data
app.get('/collection', (req, res) => {
  res.json(collectionData);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
