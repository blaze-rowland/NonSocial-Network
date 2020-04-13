<template>
  <section>
    <transition name="slide">   
      <div class="create__action">
        <button class="btn btn--primary btn--lg" v-if="!creatingCard && !creatingTag" @click="toggleCreate($event)">
          Create New
        </button>
      </div>
    </transition>

    <transition name="slide">    
      <div class="card create" v-if="creatingCard && !creatingTag">
        <div class="page__title">
          <h1>
            Create Post
          </h1>
        </div>

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

            <div class="form__group-action">
              <a @click="onCreateTag($event)">Create Tag</a>
            </div>
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
            <button class="btn btn--secondary" @click="toggleCreate($event)">Cancel</button>
            <input type="submit" class="btn btn--primary" value="Create Post">
          </div>
        </form>
      </div>

      <div v-if="creatingTag && !creatingCard">
        <CreateTag @cancelTag="onCancelCreateTag()"/>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CreateTag from '@/components/posts/CreateTag.vue';

export default {
  name: 'CreatePost',
  data() {
    return {
      image: '',
      tag_id: '',
      body: '',
      error: null,
      creatingCard: false,
      creatingTag: false,
    }
  },
  components: {
    CreateTag,
  },
  methods: {
    ...mapActions(['createPost', 'fetchPosts', 'fetchTags']),

    async onCreatePost(e) {
      e.preventDefault();

      if (this.body || this.image || this.tag_id) {
        await this.createPost({
          body: this.body, 
          image: this.image, 
          tag_id: this.tag_id,
          user_id: '1',
        });

        this.fetchPosts();
        this.resetForm();

      } 
      else this.error = 'You must add a body or an image and a tag';
      
      setTimeout(() => this.error = null, 4000);
    },

    resetForm() {
      this.body = '';
      this.image = '';
      this.tag_id = '';
      this.error = null;
      this.creatingCard = false;
      this.creatingTag = false;
    },

    toggleCreate(e) {
      e.preventDefault();
      this.creatingTag = false;
      this.creatingCard = !this.creatingCard;
    },

    onCreateTag(e) {
      e.preventDefault();

      this.creatingCard = false;
      this.creatingTag = !this.creatingTag;
    },

    onCancelCreateTag() {
      this.creatingTag = false;
      this.creatingCard = true;

      this.fetchTags();
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

.slide-enter-active, .slide-leave-active {
  transition: transform .3s;
}

.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
  transform: translateX(-150%);
}

.slide-leave-to {
  transform: translateX(150%);
}
</style>