import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {},
  state: {
    tradeMenFilter: '',
    foo: 'bar',
  },
  actions: {},
  mutations: {
    setTradeMenFilter (state, payload) {
      state.tradeMenFilter = payload
    },
  },
})

export default store
