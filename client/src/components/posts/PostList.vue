<template>
  <div class="card card--no-border">
    <h1 class="page__title">
      Posts
    </h1>
    <Post v-for="post in posts" :key="post.id"/>
  </div>
</template>

<script>
import Post from '@/components/posts/Post.vue';

export default {
  name: 'PostList',
  data() {
    return {
      posts: [{id: '1'}, {id: '2'}, {id: '3'}]
    }
  },
  components: {
    Post
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_card';
</style>