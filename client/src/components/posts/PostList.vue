<template>
  <div class="post-list">
    <div class="page__title">
      <h1>Posts</h1>
      <span @click="toggleSearch()" class="cursor-pointer text-semibold">
        {{ isSearching ? 'Cancel' : 'Search' }}
      </span>
    </div>
    
    <SearchPosts v-bind:isSearching="isSearching" class="search-comp"/>
    <Post v-for="post in allPosts" :key="post.post_id" v-bind:post="post"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Post from '@/components/posts/Post.vue';
import SearchPosts from '@/components/posts/SearchPosts.vue';

export default {
  props: ['posts'],
  name: 'PostList',
  components: {
    Post,
    SearchPosts,
  },
  data() {
    return {
      isSearching: false
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),

    toggleSearch() {
      this.isSearching = !this.isSearching;
    }
  },
  computed: mapGetters(['allPosts']),
  created() {
    this.fetchPosts();
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_card';

.search-comp {
  margin-top: -1.5rem;
}
</style>