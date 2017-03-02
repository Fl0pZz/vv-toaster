import notificationStore from './store/notifications/index'
import * as nTypes from './store/notifications/notification-types'
import * as nActionTypes from './store/notifications/notification-action-types'
import ToasterManager from './components/default/toastmanager/Toaster.vue'
import Toaster from './Toaster'

export {
  notificationStore,
  Toaster,
  nTypes,
  nActionTypes,
  ToasterManager
}

export default {
  install (Vue, toaster) {
    Vue.prototype.$toaster = toaster
    console.log('install')
  },
  Toaster
}
