import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state, payload) {
      state.count += 1
    },
     reduce(state, payload) {
      state.count -= 1
    },

  },
  actions: {},
  plugins: [createPersistedState()]
});
