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

export {
  Toaster,
  notification,
  pushNotice,
  pushInfo,
  pushError,
  updateNotice,
  updateInfo,
  updateError
}


