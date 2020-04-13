<template>
  <section>
    <transition name="slide">    
      <div class="card create">
        <h1 class="page__title">
          Create Tag
        </h1>

        <form @submit="onCreateTag($event)" class="form">
          <div class="alert alert--error" v-if="error">
            <p class="alert__title">Uh oh:</p>
            <p class="alert__body">{{ error }}</p>
          </div>

          <div class="form__group">
            <label for="name" class="form__label">Name</label>
            <input 
              v-model="name"
              type="text" 
              id="name" 
              class="form__control"
            >
          </div>

          <div class="form__group">
            <label for="description" class="form__label">Description</label>
            <textarea 
              v-model="description"
              type="description" 
              id="description"
              rows="8"
              class="form__control"
            ></textarea>
          </div>

          <div class="form__actions">
            <button class="btn btn--secondary" @click="onCancel()">Cancel</button>
            <input type="submit" class="btn btn--primary" value="Create Tag">
          </div>
        </form>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CreateTag',
  data() {
    return {
      name: '',
      description: '',
      error: null,
    }
  },
  methods: {
    ...mapActions(['createTag']),

    async onCreateTag(e) {
      e.preventDefault();

      if (this.tag || this.description) {
        await this.createTag({
          name: this.name, 
          description: this.description,
        });

        this.resetForm();
        this.$emit('cancelTag');
      } 
      else this.error = 'You must add a name and a description';
      
      setTimeout(() => this.error = null, 4000);
    },

    onCancel() {
      this.$emit('cancelTag');
    },

    resetForm() {
      this.name = '';
      this.description = '';
      this.error = null;
    },
  },
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