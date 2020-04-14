<template>
  <section class="login">
    <h1 class="page__title">
      Login
    </h1>

    <form @submit="onLogin($event)" class="form">
      <div class="alert alert--error" v-if="error">
        <p class="alert__title">Uh oh:</p>
        <p class="alert__body">{{ error }}</p>
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
        <label for="password" class="form__label">Password</label>
        <input 
          v-model="password"
          type="password" 
          id="password" 
          class="form__control"
        >
      </div>

      <div class="form__actions">
        <input type="submit" class="btn btn--primary" value="Login">
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
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    ...mapActions(['loginCurrentUser']),

    onLogin(e) {
      e.preventDefault();

      if (this.email && this.password) {
        this.error = null;

        this.loginUser({
          email: this.email,
          password: this.password,
        });
      } 
      else {
        this.error = 'All fields are required';
      }
      
      setTimeout(() => {
        this.error = null;
      }, 4000);
    },

    loginUser(user) {
      this.loginCurrentUser(user);
    }
  }
};
</script>