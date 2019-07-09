import Vue from 'vue'
import Vuex from 'vuex'

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
  }
})
