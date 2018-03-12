import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    INC (state) {
      state.count = state.count + 1
    },
    DEC (state) {
      state.count = state.count - 1
    }
  },
  actions: {
    inc ({ commit }) {
      commit('INC')
    },
    dec ({ commit }) {
      commit('DEC')
    }
  },
  getters: {
    getCount ({ count }) {
      return count
    },
    vat (_, getters) {
      const vat = getters.getCount * 0.07
      return vat.toFixed(2)
    }
  }
})

export default store
