class User {
  constructor(
    name,
    email,
    password,
    image,
    created_at,
    updated_at = '',
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.image = image;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

module.exports = User;