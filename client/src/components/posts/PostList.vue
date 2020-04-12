<template>
  <div class="post-list">
    <h1 class="page__title">
      Posts
    </h1>
    <Post v-for="post in allPosts" :key="post.id" v-bind:post="post"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Post from '@/components/posts/Post.vue';

export default {
  props: ['posts'],
  name: 'PostList',
  components: {
    Post
  },
  methods: {
    ...mapActions(['fetchPosts']),
  },
  computed: mapGetters(['allPosts']),
  created() {
    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_card';

.post-list {
  // padding: 2.5rem 7rem;
}
</style>