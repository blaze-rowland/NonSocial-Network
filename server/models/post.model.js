class Post {
  constructor(
    id,
    image,
    body,
    user_id,
    created_at,
    updated_at = '',
  ) { 
    this.id = id;
    this.image = image;
    this.body = body;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
};

module.exports = Post;