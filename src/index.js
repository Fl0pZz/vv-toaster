import Toaster from './components/default/toastmanager/Toaster.vue'
import notification from './store/notifications/index'
import * as nTypes from './store/notifications/notification-types'
import * as nActionTypes from './store/notifications/notification-types'

export {
  notification,
  Toaster,
  nTypes,
  nActionTypes
}

export default {
  Toaster,
  install (Vue, toaster) {
    Vue.prototype.$toaster = toaster
  },
  notification,
  nTypes,
  nActionTypes

}
