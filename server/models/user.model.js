class User {
  constructor(
    user_id,
    full_name,
    email,
    profile_image,
    password,
    user_created_at,
    user_updated_at
  ) {
    this.user_id = user_id;
    this.full_name = full_name;
    this.email = email;
    this.profile_image = profile_image;
    this.password = password;
    this.user_created_at = user_created_at;
    this.user_updated_at = user_updated_at;
  }
};

class CreateUserModel {
  constructor(
    user_id = null,
    full_name,
    profile_image,
    email,
    password
  ) {
    this.user_id = user_id;
    this.full_name = full_name;
    this.profile_image = profile_image;
    this.email = email;
    this.password = password;
  }
}

class UserViewModel {
  constructor(
    user_id,
    full_name,
    email,
    profile_image,
    user_created_at,
    user_updated_at
  ) {
    this.user_id = user_id;
    this.full_name = full_name;
    this.email = email;
    this.profile_image = profile_image;
    this.user_created_at = user_created_at;
    this.user_updated_at = user_updated_at;
  }
};

module.exports = {
  User,
  CreateUserModel,
  UserViewModel,
};
