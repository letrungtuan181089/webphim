const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/movies', (req, res) => {
  try {
    const moviesPath = path.join(__dirname, 'movies.json');
    const data = fs.readFileSync(moviesPath, 'utf8');
    const movies = JSON.parse(data);
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});