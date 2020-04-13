import axios from 'axios';

const state = {
  posts: [],
  filterObj: {},
};

const getters = {
  allPosts: (state) => state.posts,
};

const actions = {
  async fetchPosts({commit}) {
    const response = await axios.get('http://localhost:5000/api/posts/');
    commit('setPosts', response.data)
  },
  async createPost({commit}, post) {
    const response = await axios.post('http://localhost:5000/api/posts/', post);
    commit('addPost', response.data);
  },
};

const mutations = {
  setPosts (state, posts) {
    state.posts = posts.reverse();
  },
  addPost (state, post) {
    state.posts.unshift(post);
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
