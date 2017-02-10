import Vue from 'vue'
import Vuex from 'vuex'

import noticesStore from './notices/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: debug,
  modules: {
    notice: noticesStore
  }
})

if (module.hot) {
  module.hot.accept([
    './modules/notices/index'
  ], () => {
    store.hotUpdate({
      modules: {
        notice: require('./modules/notices/index').default
      }
    })
  })
}

export default store
