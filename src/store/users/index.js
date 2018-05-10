const state = {
  users: [
    {
      id: 1,
      name: "Yo"
    },
    {
      id: 2,
      name: "Yea"
    },
    {
      id: 3,
      name: "Foo"
    },
    {
      id: 4,
      name: "Bar"
    },
    {
      id: 5,
      name: "Baz"
    }
  ]
};

const mutations = {
  DELETE_USER(state, userId) {
    const userIndex = state.users.findIndex(user => user.id === userId);
    state.users.splice(userIndex, 1);
  }
};

const actions = {
  DELETE_USER({ commit }, userId) {
    commit("DELETE_USER", userId);
  }
};

const getters = {
  loadedUsers({ users }) {
    return users;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
