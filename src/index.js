import notification from './store/notifications/index'
import * as nTypes from './store/notifications/notification-types'
import * as nActionTypes from './store/notifications/notification-action-types'
import ToasterManager from './components/default/toastmanager/Toaster.vue'

export default class Toaster {
  constructor(store, namespaced = false) {
    this._store = store
    this._prefix = namespaced ? 'notification/' : ''
  }

  install (Vue, toaster) {
    Vue.prototype.$toaster = toaster
  }

  pushNotice (notification) {
    return this._store.dispatch(this._prefix + 'push', notification)
  }

  pushInfo (messages, action = nActionTypes.NO) {
    if (typeof messages === 'string' || messages instanceof String)
      messages = [{ header: nTypes.INFO, message: messages }]
    if (!(messages instanceof Array))
      messages = [messages]
    return this.pushNotice({type: nTypes.INFO, messages, action})
  }

  pushError (messages, action = nActionTypes.CLOSE) {
    if (typeof messages === 'string' || messages instanceof String)
      messages = [{ header: nTypes.ERROR, message: messages }]
    if (!(messages instanceof Array))
      messages = [messages]
    return this.pushNotice({ type: nTypes.ERROR, messages, action })
  }

  updateNotice (id, notification) {
    return this._store.dispatch(this._prefix + 'update', { id, notification })
  }

  updateInfo (id, messages, action = nActionTypes.NO) {
    if (typeof messages === 'string' || messages instanceof String)
      messages = [{ header: nTypes.INFO, message: messages }]
    if (!(messages instanceof Array))
      messages = [messages]
    return this.updateNotice(id, {type: nTypes.INFO, messages, action})
  }

  updateError (id, messages, action = nActionTypes.CLOSE) {
    if (typeof messages === 'string' || messages instanceof String)
      messages = [{ header: nTypes.ERROR, message: messages }]
    if (!(messages instanceof Array))
      messages = [messages]
    return this.updateNotice(id, {type: nTypes.ERROR, messages, action})
  }
}

export {
  notification,
  Toaster,
  nTypes,
  nActionTypes,
  ToasterManager
}
