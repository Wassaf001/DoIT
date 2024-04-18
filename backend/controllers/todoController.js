const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', (req, res) => {
  pool.query('SELECT * FROM todos', (error, results) => {
    if (error) {
      console.error('Error fetching todos:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

router.post('/', (req, res) => {
  const { title, description, completed, sno, date } = req.body;
  pool.query('INSERT INTO todos (title, description, completed, sno, date) VALUES (?, ?, ?, ?, ?)', [title, description, completed, sno, date], (error, results) => {
    if (error) {
      console.error('Error creating todo:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'Todo created successfully', todoId: results.insertId });
    }
  });
});


router.delete('/:id', (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM todos WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json({ message: 'Todo deleted successfully' });
    }
  });
});

module.exports = router;
