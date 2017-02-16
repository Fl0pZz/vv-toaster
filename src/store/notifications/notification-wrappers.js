import store from 'store/store'
import * as nTypes from './notification-types'
import * as nActionTypes from './notification-action-types'

export const pushNotice = (notification) => store.dispatch('notification/push', notification)

export const pushInfo = (messages, action = nActionTypes.NO) => {
  if (typeof messages === 'string' || messages instanceof String) messages = [{ header: nTypes.INFO, message: messages }]
  if (!(messages instanceof Array)) messages = [messages]
  return pushNotice({type: nTypes.INFO, messages, action})
}

export const pushError = (messages, action = nActionTypes.CLOSE) => {
  if (typeof messages === 'string' || messages instanceof String) messages = [{ header: nTypes.ERROR, message: messages }]
  if (!(messages instanceof Array)) messages = [messages]
  return pushNotice({ type: nTypes.ERROR, messages, action })
}

export const updateNotice = (id, notification) => store.dispatch('notification/update', { id, notification })

export const updateInfo = (id, messages, action = nActionTypes.NO) => {
  if (typeof messages === 'string' || messages instanceof String) messages = [{ header: nTypes.INFO, message: messages }]
  if (!(messages instanceof Array)) messages = [messages]
  return updateNotice(id, {type: nTypes.INFO, messages, action})
}

export const updateError = (id, messages, action = nActionTypes.CLOSE) => {
  if (typeof messages === 'string' || messages instanceof String) messages = [{ header: nTypes.ERROR, message: messages }]
  if (!(messages instanceof Array)) messages = [messages]
  return updateNotice(id, {type: nTypes.ERROR, messages, action})
}
