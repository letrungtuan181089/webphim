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

app.listen(3000, '0.0.0.0', () => {
  console.log('Server chạy tại http://localhost:3000');
});