const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/movies', (req, res) => {
  const data = fs.readFileSync('movies.json', 'utf8');
  const movies = JSON.parse(data);
  res.json(movies);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});