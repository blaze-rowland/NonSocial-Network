const pool = require('../../db');

const { dropUsers } = require('./users.create');
const { dropTags } = require('./tags.create');
const { dropPosts } = require('./posts.create');

dropPosts()
  .then(() => dropTags())
  .then(() => dropUsers())
  .then(() => pool.end())
  .catch((err) => console.error(err));