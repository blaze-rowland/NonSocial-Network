const express = require('express');
const router = express.Router();

const pool = require('../../database/db');

// - GET ALL --------------------------------------
router.get('/', (req, res) => {
    const tags = pool.query(
        `SELECT * FROM Tags`,
        (err, results, fields) => !err ? res.json(results) : res.status('500').send(err)
    );
});
  

// - GET SINGLE ----------------------------------
router.get('/:id', (req, res) => {
    const id = req.params.id;

    const tag = pool.query(
        `SELECT * FROM Tags WHERE id = ${id}`,
        (err, results, fields) => !err ? res.json(results) : res.status('500').send(err)
    )
});


// - CREATE -------------------------------------
router.post('/', (req, res) => {
    const data = req.body;

    const tag = pool
    .query(`
      INSERT INTO Tags (
        tag_name,
        tag_description,
        tag_created_at,
        tag_updated_at
      )
      VALUES (
        '${ data.name }',
        '${ data.description }',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
      )
    `);

  res.json(tag);
});


// - UPDATE -------------------------------------
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

    console.log(id, data);
});

// - DELETE -------------------------------------
router.delete('/:id', (req, res) => {
    pool.query(
        `DELETE FROM users WHERE id = ${id}`,
        (err, results, fields) => !err ? res.json(results) : res.status('500').send(err)
    );
});

module.exports = router;