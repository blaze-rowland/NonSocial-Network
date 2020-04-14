<template>
  <div class="feed">
    <CreatePost />
    <PostList />
  </div>
</template>

<script>
import CreatePost from '@/components/posts/CreatePost';
import PostList from '@/components/posts/PostList';

export default {
  name: 'Feed',
  data() {
    return {
      posts: null,
    }
  },
  components: {
    CreatePost,
    PostList,
  },
}
</script>
