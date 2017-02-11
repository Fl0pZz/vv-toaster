import * as types from './notification-mutation-types'

export const push = ({ getters, commit }, notification) => {
  const id = getters.getNewId
  commit(types.PUSH, notification)
  return id
}

export const take = ({ state, commit }, id) => {
  /**
   * Достаем сообщение, которое соответствует нужному id.
   * ВАЖНО! удаляем сообщение, чтобы не было неопределенного поведения при совместном доступе к уведомлению с одним id
   */
  if (state._notifications.has(id)) {
    const notification = state._notifications.get(id)
    commit(types.DELETE, id)
    return notification
  } else {
    throw new Error('Wrong notice ID')
  }
}

/* eslint-disable camelcase */
export const pop_back = ({ getters, dispatch }) => {
  if (getters.getOldId !== null) {
    const id = getters.getOldId
    return dispatch('take', getters.getOldId)
      .then(notification => ({ id, notification }))
  } else {
    throw new Error('Notification stack is empty')
  }
}

export const update = ({ state, commit }, notification) => {
  if (state._notifications.has(notification.id)) {
    commit(types.UPDATE, notification)
    return true // success
  } else {
    throw new Error('Wrong notification ID')
  }
}