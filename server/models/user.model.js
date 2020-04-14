class User {
  constructor(
    userId,
    fullName,
    email,
    profileImage,
    password,
    userCreatedAt,
    userUpdatedAt
  ) {
    this.userId = userId;
    this.fullName = fullName;
    this.email = email;
    this.profileImage = profileImage;
    this.password = password;
    this.userCreatedAt = userCreatedAt;
    this.userUpdatedAt = userUpdatedAt;
  }
};

class CreateUserModel {
  constructor(
    userId = null,
    fullName,
    profilePhoto,
    email,
    password
  ) {
    this.userId = userId;
    this.fullName = fullName;
    this.profileImage = profilePhoto;
    this.email = email;
    this.password = password;
  }
}

class UserViewModel {
  constructor(
    userId,
    fullName,
    email,
    profileImage,
    userCreatedAt,
    userUpdatedAt
  ) {
    this.userId = userId;
    this.fullName = fullName;
    this.email = email;
    this.profileImage = profileImage;
    this.userCreatedAt = userCreatedAt;
    this.userUpdatedAt = userUpdatedAt;
  }
};

module.exports = {
  User,
  CreateUserModel,
  UserViewModel,
};
