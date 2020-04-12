const pool = require('../db');

const seedUsers = require('./users.seed');
const seedTags = require('./tags.seed');
const seedPosts = require('./posts.seed');

seedUsers()
  .then(() => seedTags())
  .then(() => seedPosts())
  .then(() => pool.end())
  .catch((err) => console.error(err));