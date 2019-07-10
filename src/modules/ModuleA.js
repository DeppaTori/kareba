const modulA = {
  state: {
    count: 5,
    apple: 25
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}

export default modulA
