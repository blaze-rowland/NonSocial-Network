const pool = require('../../db');

async function createPosts() {
  await pool.promise()
  .query(`
    CREATE TABLE Posts(
      post_id INT NOT NULL AUTO_INCREMENT,
      post_body VARCHAR(7000) NOT NULL,
      post_image VARCHAR(500),
      user_id INT NOT NULL,
      tag_id INT NOT NULL,
      post_created_at DATETIME NOT NULL default CURRENT_TIMESTAMP,
      post_updated_at DATETIME default CURRENT_TIMESTAMP,
      PRIMARY KEY (post_id),
      FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
      FOREIGN KEY (tag_id) REFERENCES Tags(tag_id) ON DELETE CASCADE
    )
  `)
  .catch((err) => console.error(err));
};

async function dropPosts() {
  await pool.promise()
    .query(`
      DROP TABLE Posts
    `)
    .catch((err) => console.error(err));
}

module.exports = { createPosts, dropPosts };