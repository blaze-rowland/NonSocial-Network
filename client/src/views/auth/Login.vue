<template>
  <div class="card">
    <Login />
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/components/_card';
</style>

<script>
import Login from '@/components/auth/Login.vue';

export default {
  name: 'LoginView',
  components: {
    Login
  },
}
</script>