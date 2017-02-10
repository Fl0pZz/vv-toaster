import store from 'store/store'
import * as nTypes from './notice-types'
import * as nActionTypes from './notice-action-types'

export const pushNotice = (notice) => store.dispatch('notice/push', notice)

export const pushInfo = (messages, action = nActionTypes.NO) =>
  pushNotice({ type: nTypes.INFO, messages, action })

export const pushError = (messages, action = nActionTypes.CLOSE) =>
  pushNotice({ type: nTypes.ERROR, messages, action })
