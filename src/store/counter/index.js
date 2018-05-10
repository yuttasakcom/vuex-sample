const state = {
  count: 0
};

const mutations = {
  INC(state) {
    state.count = state.count + 1;
  },
  DEC(state) {
    state.count = state.count - 1;
  }
};

const actions = {
  inc({ commit }) {
    commit("INC");
  },
  dec({ commit }) {
    commit("DEC");
  }
};

const getters = {
  getCount({ count }) {
    return count;
  },
  vat(_, getters) {
    const vat = getters.getCount * 0.07;
    return vat.toFixed(2);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
