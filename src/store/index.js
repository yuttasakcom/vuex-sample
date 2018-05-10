import Vue from "vue";
import Vuex from "vuex";

import counter from "./counter";
import users from "./users";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter,
    users
  }
});

export default store;
