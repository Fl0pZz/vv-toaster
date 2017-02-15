import * as types from './notification-mutation-types'

export const push = ({ getters, commit }, notification) => {
  const id = getters.getNewId
  commit(types.PUSH, notification)
  return id
}

export const get = ({ state }, id) => {
  if (state._notifications.has(id)) {
    return state._notifications.get(id)
  } else {
    throw new Error('Wrong notice ID')
  }
}

/* eslint-disable camelcase */
export const pop_back = ({ getters, dispatch, commit }) => {
  if (getters.getOldId !== null) {
    const id = getters.getOldId
    commit(types.NEXT)
    return dispatch('get', id)
      .then(notification => ({ id, notification }))
  } else {
    throw new Error('Notification stack is empty')
  }
}

export const update = ({ state, commit }, pair) => {
  if (state._notifications.has(pair.id)) {
    commit(types.UPDATE, pair)
    return true // success
  } else {
    throw new Error('Wrong notification ID')
  }
}

export const del = ({ state, commit }, id) => {
  if (state._notifications.has(id)) {
    commit(types.DELETE, id)
  }
}
