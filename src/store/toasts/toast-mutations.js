import * as types from './toast-mutation-types'

export default {
  [types.INIT_QUEUE] (state, size) {
    state.init = true
    state._max_toasts = size
    state.free = size

    for (let i = 0; i < size; ++i) {
      state.flags[i] = null
    }
  },

  [types.DISPLAY] (state, { id, notification }) {
    let i = state.flags.findIndex(elem => (elem === null))
    // console.log(1, state, i, id, notification)

    if (i !== -1) {
      state.flags[i] = {id, notification}
      state.free -= 1
    }
    // console.log(2, state.flags)
  },

  [types.UPDATE_FLAG] (state, { index, val }) {
    state.flags[index] = val

    if (val === null) state.free += 1
  }
}
