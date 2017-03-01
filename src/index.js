import Toaster from './components/default/toastmanager/Toaster.vue'
import notification from './store/notifications/index'
import {
  pushNotice,
  pushInfo,
  pushError,
  updateNotice,
  updateInfo,
  updateError
} from './store/notifications/notification-wrappers'
import * as types from './store/notifications/notification-types'
import * as actionTypes from './store/notifications/notification-types'

export {
  Toaster,
  notification,
  pushNotice,
  pushInfo,
  pushError,
  updateNotice,
  updateInfo,
  updateError,
  types,
  actionTypes
}


