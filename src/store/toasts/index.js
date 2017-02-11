import * as getters from './toast-getters'
import * as actions from './toast-actions'
import mutations from './toast-mutations'

export const state = {
  init: false,    // возможно, нам не всегда нужно обнулять стек
  _max_toasts: 0, // ограничиваем количество одновременно показываемых уведомлений
  free: 0,        // количество уведомленений, которое можно отобразить
  flags: []       // каждая toast component будет следить за своей ячекой этого массива
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
