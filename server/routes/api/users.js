const express = require('express');
const router = express.Router();

const User = require('../../models/user.model');

router.get('/', (req, res) => {
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