<template>
  <div class="form__group" v-if="isSearching">
    <input type="text" id="search" @keyup="onSearch()" v-model="searchText" placeholder="Search..." class="form__control">
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['isSearching'],
  name: 'SearchPosts',
  data() {
    return {
        searchText: '',
    }
  },

  methods: {
    onSearch() {
      console.log(this.searchText);
    },
  },

}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_form';
</style>