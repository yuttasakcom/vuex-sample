import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    inc(state) {
      state.count = state.count + 1
    },
    dec(state) {
      state.count = state.count - 1
    }
  },
  actions: {
    inc({ commit }) {
      commit('inc')
    },
    dec({ commit }) {
      commit('dec')
    }
  },
  getters: {}
})

export default store
