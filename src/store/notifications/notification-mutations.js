import * as types from './notification-mutation-types'

export default {
  [types.PUSH] (state, notification) {
    if (state._old_id === null) {
      state._old_id = state._id
    }
    /*
     Каждому уведомлению присваивается уникальный id, по которым компоненты могут управлять временем жизни уведомления
     Например форма входа в аккаунт: если в поле email было введен не email, то вывесем уведомление и
     как только ошибка исправлена, уведомление можно скрыть
     */
    state._notifications.set(state._id++, notification)
    state._size = state._notifications.size
  },

  [types.UPDATE] (state, { id, notification }) {
    state._notifications.set(id, notification)
    state.updated = id
  },

  [types.DELETE] (state, id) {
    // так как мутация не имеет возвращаемого значения, проверка реализована в actions
    state._notifications.delete(id)
    state._size = state._notifications.size

    if (state._notifications.size !== 0) {
      // если в очереди еще есть уведомления, то переводим указатель на следующее уведомление
      state._old_id++
      if (state.updated === id) state.updated = null
    } else {
      // если уведомлений нет, обнуляем стек уведомлений, чтобы _old_id и _id были равны 0
      state._id = 0
      state._notifications.clear()
      state._old_id = null
      state._size = 0
      state.updated = null
    }
  }
}
