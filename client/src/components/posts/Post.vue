<template>
  <div class="card" v-if="post">
    <div class="card__header">
      <div class="card__cred">
        <img :src="post.profile_image" alt="Profile Picture" class="card__user-img" v-if="post.profile_image">
        
        <p class="card__author" v-if="post.full_name">
          {{ post.full_name }}
        </p>
      </div>

      <div class="card__meta">
        <p>{{ formatDate(post.post_created_at) }}</p>  
      </div>
    </div>

    <p class="card__body" v-if="post">
      {{ post.post_body }}
    </p>
    
    <!-- <img :src="post.image" alt="Post Image" class="card__img"> -->
    <img :src="post.post_image + '.jpg'" alt="Post Image" class="card__img" v-if="post.post_image">

    <div class="card__tag-container" v-if="post.tag_name">
      <span class="badge badge--primary" :title="post.tag_description ? post.tag_description : ''">
        {{ post.tag_name }}
      </span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['post'],
  name: 'Post',
  methods: {
    formatDate(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  },
  created() {
    console.log(this.post);
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_badge';
@import '@/styles/components/_card';

</style>