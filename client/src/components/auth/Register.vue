<template>
  <section class="register">
    <h1 class="page__title">
      Register
    </h1>

    <form @submit="onRegister($event)" class="form">
      <div class="alert alert--error" v-if="error">
        <p class="alert__title">Uh oh:</p>
        <p class="alert__body">{{ error }}</p>
      </div>

      <div class="form__group">
        <label for="fullName" class="form__label">Full Name</label>
        <input 
          v-model="fullName"
          type="text" 
          id="fullName" 
          class="form__control"
        >
      </div>

      <div class="form__group">
        <label for="email" class="form__label">Email</label>
        <input 
          v-model="email"
          type="email" 
          id="email" 
          class="form__control"
        >
      </div>
      
      <div class="form__group">
        <label for="profileImage" class="form__label">Profile Photo</label>
        <input 
          v-model="profileImage"
          type="text" 
          id="profileImage" 
          class="form__control"
        >
      </div>

      <div class="form__group">
        <label for="password" class="form__label">Password</label>
        <input 
          v-model="password"
          type="password" 
          id="password" 
          class="form__control"
        >
      </div>

      <div class="form__group">
        <label for="password2" class="form__label">Confirm Password</label>
        <input 
          v-model="confirmPassword"
          type="password" 
          id="password2" 
          class="form__control"
        >
      </div>

      <div class="form__actions">
        <input type="submit" class="btn btn--primary" value="Register">
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/components/_alert';
@import '@/styles/components/_button';
@import '@/styles/components/_form';
</style>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      fullName: '',
      email: '',
      profileImage: '',
      password: '',
      confirmPassword: '',
      error: null,
    }
  },
  methods: {
    ...mapActions(['createUser']),

    onRegister(e) {
      e.preventDefault();

      if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
        this.error = 'All fields are required';
      } 
      else if (this.password !== this.confirmPassword) {
        this.error = 'Passwords don\'t match';
      } 
      else {
        this.error = null;

        this.registerUser({
          fullName: this.fullName, 
          email: this.email, 
          profileImage: this.profileImage, 
          password: this.password,
        });
      }
      
      setTimeout(() => {
        this.error = null;
      }, 4000);
    },

    async registerUser(user) {
      await this.createUser(user)
        .then(() => this.$router.push('feed'))
        .catch(err => this.error = `A user with the email: ${this.email} already exists`);
    }
  },
}
</script>