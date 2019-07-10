import Vue from 'vue'
import Vuex from 'vuex'
import ModuleA from '@/modules/ModuleA'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    apple: 5,
    todos: [
      {id: 1, text: 'Apple', done: true},
      {id: 2, text: 'Manggo', done: false}
    ]
  },
  modules: {
    a: ModuleA,
    account: {
      namespaced: true,
      state: {
        count: 50,
        apple: 250
      }
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    myIncrement (state, n) {
      state.count += n
    },
    payloadIncrement (state, payload) {
      state.count += payload.amount * payload.extraAmount
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    incrementAsync ({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 3000)
    },
    actionA ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 3000)
      })
    },
    async actionB ({dispatch, commit}) {
      await dispatch('actionA')
      commit('increment')
      console.log('Action B trigge')
    }
  }
})
