const pool = require('../../db');

const { createUsers } = require('./users.create');
const { createTags } = require('./tags.create');
const { createPosts } = require('./posts.create');

createUsers()
  .then(() => createTags())
  .then(() => createPosts())
  .then(() => pool.end())
  .catch((err) => console.error(err));