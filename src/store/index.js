import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})



Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  },
  getters,
  actions,
  state,
  mutations,
  plugins: [vuexLocal.plugin]
})

export default store
