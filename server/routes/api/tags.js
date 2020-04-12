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
    pool.query(
        `DELETE FROM users WHERE id = ${id}`,
        (err, results, fields) => !err ? res.json(results) : res.status('500').send(err)
    );
});

module.exports = router;