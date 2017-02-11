import Vue from 'vue'
import Vuex from 'vuex'

import notification from './notifications/index'
import toast from './toasts/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: debug,
  modules: {
    notification,
    toast
  }
})

if (module.hot) {
  module.hot.accept([
    './notifications/index',
    './toasts/index'
  ], () => {
    store.hotUpdate({
      modules: {
        notification: require('./notifications/index').default,
        toast: require('./toasts/index').default
      }
    })
  })
}

export default store
