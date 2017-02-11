import * as types from './toast-mutation-types'

export const init = ({ commit }, size = 5) => {
  if (size > 0) {
    commit(types.INIT_QUEUE, size)
  } else {
    throw new Error('Size must be positive!')
  }
}

export const destroyAfter = ({ commit }, { index, time }) => {
  setTimeout(() => { commit(types.UPDATE_FLAG, { index, val: null }) }, time)
}
