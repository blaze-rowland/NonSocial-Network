const express = require('express');
const router = express.Router();
const pool = require('../../database/db');

const Post = require('../../models/post.model');

router.get('/test', (req, res) => {
  res.send([
    new Post('1231', 'image.png', 'test body', '1', new Date(Date()), new Date(Date())),
    new Post('9813', 'image.png', 'test body 2', '1', new Date(Date()), new Date(Date())),
    new Post('5363', 'image.png', 'test body 3', '2', new Date(Date()), new Date(Date())),
  ]);
});

router.get('/', (req, res) => {
  const posts = pool.query(`SELECT * FROM Posts`);
  res.send(posts);
})

module.exports = router;