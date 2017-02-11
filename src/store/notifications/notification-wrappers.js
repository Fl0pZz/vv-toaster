import store from 'store/store'
import * as nTypes from './notification-types'
import * as nActionTypes from './notification-action-types'

export const pushNotice = (notification) => store.dispatch('notification/push', notification)

export const pushInfo = (messages, action = nActionTypes.NO) =>
  pushNotice({ type: nTypes.INFO, messages, action })

export const pushError = (messages, action = nActionTypes.CLOSE) =>
  pushNotice({ type: nTypes.ERROR, messages, action })

export const updateNotice = (id, notification) => store.dispatch('notification/update', { id, notification })

export const updateInfo = (id, messages, action = nActionTypes.NO) =>
  updateNotice(id, { type: nTypes.INFO, messages, action })

export const updateError = (id, messages, action = nActionTypes.CLOSE) =>
  updateNotice(id, { type: nTypes.ERROR, messages, action })
