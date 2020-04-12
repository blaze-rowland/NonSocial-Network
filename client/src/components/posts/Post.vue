<template>
  <div class="card">
    <div class="card__header">
      <div class="card__cred">
        <!-- <img :src="post.user.image" alt="Profile Picture" class="card__user-img" v-if="post.user.image"> -->
        <img src="https://avatars2.githubusercontent.com/u/27295533?s=460&u=9bc5a5cbfd2921e215455fbb7a6cee51f11c11f7&v=4" class="card__user-img" alt="">
        
        <p class="card__author" v-if="post">
          <!-- {{ post.user.name }} -->
          Blaze Rowland
        </p>
      </div>

      <div class="card__meta">
        <!-- <p>{{ post.created_at }}</p>   -->
        <p>April 10th, 2020</p>
      </div>
    </div>

    <p class="card__body" v-if="post">
      {{ post.body }}
    </p>
    
    <!-- <img :src="post.image" alt="Post Image" class="card__img"> -->
    <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="Post Image" class="card__img">
  </div>
</template>

<script>
export default {
  props: ['post'],
  name: 'Post',
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_card';

</style>