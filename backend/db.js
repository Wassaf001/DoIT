const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'wassaf',
  password: 'StrongPass123!',
  database: 'DOIT'
});

module.exports = pool;
