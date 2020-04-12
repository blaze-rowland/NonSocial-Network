const pool = require('../../db');

async function createPosts() {
  await pool.promise()
  .query(`
    CREATE TABLE Posts(
      id INT NOT NULL AUTO_INCREMENT,
      body VARCHAR(255) NOT NULL,
      image VARCHAR(255),
      user_id INT NOT NULL,
      tag_id INT NOT NULL,
      created_at DATETIME NOT NULL default CURRENT_TIMESTAMP,
      updated_at DATETIME default CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      FOREIGN KEY (user_id) REFERENCES Users(id),
      FOREIGN KEY (tag_id) REFERENCES Tags(id)
    )
  `)
  .catch((err) => console.error(err));
};

async function dropPosts() {

}

  module.exports = { createPosts, dropPosts };