<template>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loggedIn: true,
    }
  },
  mounted() {
    if (this.loggedIn) this.$router.push({ name: 'Feed' });
    else this.$router.push({ name: 'Login' });
  }
}
</script>
