const express = require('express');
const router = express.Router();
const pool = require('../../database/db');

const User = require('../../models/user.model');

// - GET ALL --------------------------------------
router.get('/', (req, res) => {
  const users = pool.query(
    `SELECT * FROM users`,
    (err, results, fields) => !err ? res.json(results) : res.status(500).send(err)
  );
});


// - GET SINGLE ----------------------------------
router.get('/:id', (req, res) => {
  const id = req.params.id;

  const user = pool.query(
    `SELECT * FROM users WHERE id = ${id}`,
    (err, results, fields) => !err ? res.json(results) : res.status(500).send(err)
  );
});


// - CREATE -------------------------------------
router.post('/', (req, res) => {
  const data = req.body;

  console.log(data);
});


// - UPDATE -------------------------------------
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  
  console.log(id, data);
});

// - DELETE -------------------------------------
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  const user = pool.query(
    `DELETE FROM users WHERE id = ${id}`,
    (err, results, fields) => !err ? res.json(results) : res.status(500).send(err)
  );
});


// - Dummy Data -------------------------------------
router.get('/dummy', (req, res) => {
  res.send([
    new User(
      'Blaze Rowland', 
      'mail.browland@gmail.com', 
      '****', 
      'image.png',
      new Date(Date()),
      new Date(Date()),
    ),
    new User(
      'Rye Rowland', 
      'rylee8899@gmail.com', 
      '****', 
      'image.png',
      new Date(Date()),
      new Date(Date()),
    ),
    new User(
      'Pretzel Rowland', 
      'pretzel.dog@gmail.com', 
      '****', 
      'image.png',
      new Date(Date()),
      new Date(Date()),
    ),
  ]);
});

module.exports = router;