import axios from 'axios';

const state = {
  tags: []
};

const getters = {
  allTags: (state) => state.tags,
};

const actions = {
  async fetchTags({commit}) {
    const response = await axios.get('http://localhost:5000/api/tags/');
    commit('setTags', response.data)
  },
  async createTag({commit}, tag) {
    const response = await axios.post('http://localhost:5000/api/tags/', tag);
    commit('addTag', response.data);
  }
};

const mutations = {
  setTags (state, tags) {
    state.tags = tags.reverse();
  },
  addTag (state, tag) {
    state.tags.unshift(tag);
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
