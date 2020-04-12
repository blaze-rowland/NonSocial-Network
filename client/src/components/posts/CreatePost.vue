<template>
  <section>
    <div class="create__action">
      <button class="btn btn--primary btn--lg" v-if="!creatingCard" @click="toggleCreate()">
        Create New
      </button>
    </div>

    <div class="card create" v-if="creatingCard">
      <h1 class="page__title">
        Create Post
      </h1>

      <form @submit="onCreatePost($event)" class="form">
        <div class="alert alert--error" v-if="error">
          <p class="alert__title">Uh oh:</p>
          <p class="alert__body">{{ error }}</p>
        </div>

        <div class="form__group">
          <label for="image" class="form__label">Image</label>
          <input 
            v-model="image"
            type="text" 
            id="image" 
            class="form__control"
          >
        </div>

        <div class="form__group">
          <label for="tag" class="form__label">Tag</label>
          <select name="tag" id="tag" v-model="tag_id" class="form__control">
            <option :value="tag.tag_id" v-for="tag in allTags" :key="tag.tag_id">{{ tag.tag_name }}</option>
          </select>
        </div>

        <div class="form__group">
          <label for="body" class="form__label">Post</label>
          <textarea 
            v-model="body"
            type="body" 
            id="body"
            rows="8"
            class="form__control"
          ></textarea>
        </div>

        <div class="form__actions">
          <button class="btn btn--secondary" @click="toggleCreate()">Cancel</button>
          <input type="submit" class="btn btn--primary" value="Create Post">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CreatePost',
  data() {
    return {
      image: '',
      tag_id: '',
      body: '',
      error: null,
      creatingCard: false,
    }
  },
  methods: {
    ...mapActions(['createPost', 'fetchPosts', 'fetchTags']),
    async onCreatePost(e) {
      e.preventDefault();

      if (this.body || this.image || this.tag_id) {
        this.error = null;

        await this.createPost(
          {
            body: this.body, 
            image: this.image, 
            tag_id: this.tag_id,
            user_id: '1',
          }
        );

        this.fetchPosts();

        console.log({
          body: this.body,
          image: this.image
        });
      } else {
        this.error = 'You must add a body or an image'
      }
      
      setTimeout(() => {
        this.error = null;
      }, 4000);
    },

    toggleCreate() {
      this.creatingCard = !this.creatingCard;
    }
  },
  computed: mapGetters(['allTags']),
  created() {
    this.fetchTags();
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/styles/abstracts/_mixins' as mix;

@import '@/styles/components/_alert';
@import '@/styles/components/_button';
@import '@/styles/components/_card';
@import '@/styles/components/_form';

.create {
  margin-bottom: 4rem;

  @include mix.e(action) {
    display: flex;
    flex: 1 0 100%;
    margin-bottom: 2rem;
    
    .btn {
      width: 100%;
    }

  }
}
</style>