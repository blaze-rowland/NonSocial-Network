<template>
  <div class="card">
    <Register />
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/components/_card';
</style>

<script>
import Register from '@/components/auth/Register.vue';

export default {
  name: 'RegisterView',
  components: {
    Register
  }
}
</script>