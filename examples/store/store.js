import Vue from 'vue'
import Vuex from 'vuex'

import { notification } from '../../src/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: debug,
  modules: { notification }
})

export default store
