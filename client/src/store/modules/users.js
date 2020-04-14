import axios from 'axios';

const state = {
  users: []
};

const getters = {
  allUsers: (state) => state.users,
};

const actions = {
  async fetchUsers({commit}) {
    const response = await axios.get(`http://localhost:5000/api/users/`);
    commit('setUsers', response.data)
  },
};

const mutations = {
  setUsers (state, users) {
    state.users = users;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}
