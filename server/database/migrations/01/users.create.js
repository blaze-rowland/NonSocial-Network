const pool = require('../../db');

async function createUsers() {
  await pool.promise()
    .query(`
      CREATE TABLE Users(
        user_id INT NOT NULL AUTO_INCREMENT,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        profile_image VARCHAR(255),
        password VARCHAR(255) NOT NULL,
        user_created_at DATETIME NOT NULL default CURRENT_TIMESTAMP,
        user_updated_at DATETIME default CURRENT_TIMESTAMP,
        PRIMARY KEY (user_id)
      )
    `)
    .catch((err) => console.error(err));
};

async function dropUsers() {
  await pool.promise()
    .query(`
      DROP TABLE Users
    `)
    .catch((err) => console.error(err));
}

module.exports = { createUsers, dropUsers };