import Vue from 'vue'
import Vuex from 'vuex'

import notification from 'notifications/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: debug,
  modules: { notification }
})

if (module.hot) {
  module.hot.accept([
    'notifications/index'
  ], () => {
    store.hotUpdate({
      modules: {
        notification: require('notifications/index').default
      }
    })
  })
}

export default store
