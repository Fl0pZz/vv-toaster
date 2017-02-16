import * as types from './notification-mutation-types'
import { isEmpty } from './notification-getters'

export default {
  [types.PUSH] (state, notification) {
    if (state._old_id === null) state._old_id = state._id
    /*
     Каждому уведомлению присваивается уникальный id, по которым компоненты могут управлять временем жизни уведомления
     Например форма входа в аккаунт: если в поле email было введен не email, то вывесем уведомление и
     как только ошибка исправлена, уведомление можно скрыть
     */
    state._notifications.set(state._id++, notification)
  },

  [types.UPDATE] (state, { id, notification }) {
    state._notifications.set(id, notification)
    state.updated = id
  },

  [types.NEXT] (state) {
    if (!isEmpty(state)) state._old_id++
  },

  [types.DELETE] (state, id) {
    // так как мутация не имеет возвращаемого значения, проверка реализована в actions
    state._notifications.delete(id)
    if (state.updated === id) state.updated = null
    if (!isEmpty(state) && (id === state._old_id)) state._old_id++
  }
}
