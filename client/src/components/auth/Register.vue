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
        <label for="name" class="form__label">Name</label>
        <input 
          v-model="name"
          type="name" 
          id="name" 
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
          type="password2" 
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
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    }
  },
  methods: {
    onRegister(e) {
      e.preventDefault();

      if (!this.name || !this.email || !this.password || !this.confirmPassword) {
        this.error = 'All fields are required';
      } 
      else if (this.password !== this.confirmPassword) {
        this.error = 'Passwords don\'t match';
      } 
      else {
        this.error = null;

        console.log({
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
      }
      
      setTimeout(() => {
        this.error = null;
      }, 4000);
    }
  }
}
</script>