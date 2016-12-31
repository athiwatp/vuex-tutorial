import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=bangkok&units=metric&appid=efb29b6eb141f534bfca1523000078ca'

const state = {
  todos: [],
  data: [],
  number: 0
}

// Vuex api

Axios.get(apiUrl).then((res) => {
  state.data = res.data
})
//

const mutations = {
  addText: (state, name) => {
    state.todos.push({ name: name })
  },
  addNum: (state, num) => {
    state.number += num
  }
}

const getters = {
  todos: state => state.todos,
  number: state => state.number
}

const actions = {
  addTodo: (state, name) => {
    store.commit('addText', name)
  },
  addNumber: (state, num) => {
    store.commit('addNum', num)
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

global.store = store
export default store
