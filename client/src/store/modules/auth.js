import axios from 'axios';

const state = {
  currentUser: {}
};

const getters = {
  getCurrentUser: (state) => state.currentUser,
};

const actions = {
  async fetchCurrentUser({commit}, id) {
    const response = await axios.get(`http://localhost:5000/api/users/${id}`);
    commit('setCurrentUser', response.data)
  },

  async createUser({commit}, user) {
    return new Promise((resolve, reject) => {
      axios.post(`http://localhost:5000/api/auth/register`, user)
      .then(newUser => {
        commit('setCurrentUser', { fullName: user.fullName, email: user.email, profilePhoto: user.profilePhoto });
        resolve(newUser);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
    });
  },

  async loginCurrentUser({commit}, user) {
    const response = await axios.post(`http://localhost:5000/api/auth/login`, user);
    commit('setCurrentUser', response.data);
  },
  
  async logoutCurrentUser({commit}) {
    const response = await axios.get(`http://localhost:5000/api/auth/logout`);
    commit('setCurrentUser', {});
  },
};

const mutations = {
  setCurrentUser (state, user) {
    state.currentUser = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
