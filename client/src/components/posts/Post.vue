<template>
  <div class="card card--shadowed">
    <div class="card__header">
      <div class="card__cred">
        <img :src="post.user.image" alt="Profile Picture" class="card__user-img" v-if="post.user.image">
        
        <p class="card__author" v-if="post.user.name">
          {{ post.user.name }}
        </p>
      </div>

      <div class="card__meta">
        <p>{{ post.created_at }}</p>  
      </div>
    </div>

    <p class="card__body" v-if="post.body">
      {{ post.body }}
    </p>
    
    <img :src="post.image" alt="Post Image" class="card__img">
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      post: {
        image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aspernatur nam, voluptatum, tempore, numquam repellat quod ex libero explicabo nesciunt amet architecto! Fuga sunt consequuntur impedit aliquid itaque, est ratione iste eveniet inventore deleniti ipsam corporis asperiores debitis quia, et vitae expedita nesciunt alias. Beatae, quam. Eligendi provident quod ipsa.',
        created_at: 'March 8th, 2020',
        user: {
          name: 'Blaze Rowland',
          image: 'https://avatars2.githubusercontent.com/u/27295533?s=460&u=9bc5a5cbfd2921e215455fbb7a6cee51f11c11f7&v=4',
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_card';

</style>