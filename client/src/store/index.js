import Vue from 'vue';
import Vuex from 'vuex';

import posts from './modules/posts';
import tags from './modules/tags';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    tags,
  }
});
