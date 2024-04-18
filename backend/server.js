const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const pagesController = require('./controllers/pagesController');
const cors = require('cors');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'wassaf',
  password: 'StrongPass123!',
  database: 'DOIT'
});

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyParser.json());

const todoController = require('./controllers/todoController');
app.use('/api/todos', todoController);

app.get('/api/users', (req, res) => {
  res.json({ message: 'GET request received for /api/users' });
});

app.post('/api/users', (req, res) => {
  res.json({ message: 'POST request received for /api/users' });
});

const PORT = process.env.PORT || 5000;  


app.use(bodyParser.json());

app.use('/api/pages', pagesController);

app.get('/api/users', (req, res) => {
  res.json({ message: 'GET request received for /api/users' });
});

app.post('/api/users', (req, res) => {
  res.json({ message: 'POST request received for /api/users' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});