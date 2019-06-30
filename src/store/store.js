import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: ''
  },
  mutations: {
    change (state, name) {
      state.name = name
    }
  },
  getters: {
    name: state => state.name
  }
})
