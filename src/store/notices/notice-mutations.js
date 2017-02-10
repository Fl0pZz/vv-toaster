import * as types from './notice-mutation-types'

export default {
  [types.PUSH] (state, notice) {
    if (state._old_id === null) {
      state._old_id = state._id
    }
    /*
     Каждому уведомлению присваивается уникальный _id, по которым компоненты могут управлять временем жизни уведомления
     Например форма входа в аккаунт: если в поле email было введен не email, то вывесем уведомление и
     как только ошибка исправлена, уведомление можно скрыть
     */
    state.notices.set(state._id++, notice)
    state.size = state.notices.size
  },

  [types.UPDATE] (state, { id, notice }) {
    state.notices.set(id, notice)
  },

  [types.DELETE] (state, id) {
    // так как мутация не имеет возвращаемого значения, проверка реализована в actions
    state.notices.delete(id)
    state.size = state.notices.size

    if (state.notices.size !== 0) {
      // если в очереди еще есть уведомления, то переводим указатель на следующее уведомление
      state._old_id++
    } else {
      // если уведомлений нет, обнуляем стек уведомлений, чтобы _old_id и _id были равны 0
      state._id = 0
      state.notices.clear()
      state._old_id = null
      state.size = 0
    }
  }
}
