require('./sass/main.scss')

import Vue from 'vue'
import Vuex from 'vuex'

// Vuex simple
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
  },
})

Vue.component('home', require('./components/Home.vue').default)

const app = new Vue({
  el: '#app',
  store: store,
})
