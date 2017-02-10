import * as types from './notice-mutation-types'

export const push = ({ getters, commit }, notice) => {
  const id = getters.getNewId
  commit(types.PUSH, notice)
  return id
}

export const get = ({ state, commit }, id) => {
  /**
   * Достаем сообщение, которое соответствует нужному id.
   * ВАЖНО! удаляем сообщение, чтобы не было неопределенного поведения при совместном доступе к уведомлению с одним id
   */
  if (state.notices.has(id)) {
    const notice = state.notices.get(id)
    commit(types.DELETE, id)
    return notice
  } else {
    throw new Error('Wrong notice ID')
  }
}

export const shift = ({ getters, dispatch }) => {
  if (getters.getOldId !== null) {
    return dispatch('getNotice', getters.getOldId)
  } else {
    throw new Error('Notification stack is empty')
  }
}

export const update = ({ state, commit }, notice) => {
  if (state.notices.has(notice.id)) {
    commit(types.UPDATE, notice)
    return true // success
  } else {
    throw new Error('Wrong notice ID')
  }
}
