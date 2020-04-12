const express = require('express');
const router = express.Router();
const pool = require('../../database/db');

const Post = require('../../models/post.model');


// - GET ALL ----------------------------------
router.get('/', (req, res) => {
  const posts = pool.query(`
    SELECT * FROM Posts
    RIGHT JOIN (Users, Tags)
    ON (Users.user_id = Posts.user_id AND Tags.tag_id = Posts.tag_id)
    ORDER BY 'post_created_at' ASC
  `,
    (err, results, fields) => !err ? res.json(results) : res.status(500).send(err)
  );
});


// - GET SINGLE --------------------------------
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const post = pool.query(`
    SELECT * FROM Posts 
    JOIN Users on Posts.user_id = Users.user_id 
    WHERE Posts.post_id = ${id}
  `,
    (err, results, fields) => !err ? res.json(results) : res.status(500).send(err)
  );
});


// - CREATE -------------------------------------
router.post('/', (req, res) => {
  const data = req.body;

  const post = pool
    .query(`
      INSERT INTO Posts (
        post_body,
        post_image,
        user_id,
        tag_id,
        post_created_at,
        post_updated_at
      )
      VALUES (
        '${ data.body }',
        '${ data.image }',
        '${ data.user_id }',
        '${ data.tag_id }',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
      )
    `);

  res.json(post);
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

  pool.query(
    `DELETE FROM users WHERE id = ${id}`,
    (err, results, fields) => !err ? res.json(results) : res.status(500).send(err)
  );
});




router.get('/dummy', (req, res) => {
  res.send([
    new Post('1231', 'image.png', 'test body', '1', '1', new Date(Date()), new Date(Date())),
    new Post('9813', 'image.png', 'test body 2', '1', '1', new Date(Date()), new Date(Date())),
    new Post('5363', 'image.png', 'test body 3', '2', '1', new Date(Date()), new Date(Date())),
  ]);
})

module.exports = router;