import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import auth from './modules/auth';
import posts from './modules/posts';
import tags from './modules/tags';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.localStorage,    
    })
  ],
  modules: {
    auth,
    posts,
    tags,
  }
});
