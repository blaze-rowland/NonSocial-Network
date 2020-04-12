const pool = require('../../db');

const { dropUsers } = require('./users.drop');
const { dropTags } = require('./tags.drop');
const { dropPosts } = require('./posts.drop');

dropUsers()
  .then(() => dropTags())
  .then(() => dropPosts())
  .then(() => pool.end())
  .catch((err) => console.error(err));