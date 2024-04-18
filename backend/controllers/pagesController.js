const express = require('express');
const router = express.Router();
const pool = require('../db'); 

router.post('/', (req, res) => {
  const { sno, title, content, completed } = req.body;

  if (!title || !content || completed === undefined) {
    return res.status(400).json({ error: 'Title, content, and completed fields are required' });
  }


  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }


    const query = 'INSERT INTO pages (sno, title, content, completed) VALUES (?, ?, ?, ?)';
    const values = [sno, title, content, completed];

    connection.query(query, values, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error creating page:', error);
        return res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Page created successfully', pageId: results.insertId });
      }
    });
  });
});

router.get('/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const query = 'SELECT * FROM pages';
    
    connection.query(query, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error fetching pages:', error);
        return res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json(results); 
      }
    });
  });
});

module.exports = router;
