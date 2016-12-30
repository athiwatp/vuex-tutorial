<template>
  <div id="app">
    name: <input type="text" v-model="textname" @keyup.enter="addTodo"></input> <button @click="addTodo()">+</button> <br>
    <div v-for="show in todos">
      <h1> {{ show.name }} </h1>
    </div>
    <img src="./assets/logo.png">
    <h1> {{ number }} </h1> <br>
    <button @click="addNum()">+</button> <br>
  </div>
</template>

<script>
import store from './vuex/store'
import Vuex from 'vuex'
global.vuex = Vuex
export default {
  store,
  name: 'app',
  components: {},
  methods: {
    addTodo () {
      store.commit('addText', this.textname)
    },
    addNum () {
      store.commit('addNum', 1)
    }
  },
  data () {
    return {
      textname: ''
    }
  },
  computed: {
    todos () {
      return store.state.todos
    },
    number () {
      return store.state.number
    }
  },
  mounted () {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
