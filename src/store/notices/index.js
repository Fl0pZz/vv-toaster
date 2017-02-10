import * as getters from './notice-getters'
import * as actions from './notice-actions'
import mutations from './notice-mutations'

export const state = {
  /**
   * structure of notice:
   * {
   *   type: ERROR|INFO, <-- see notice-types.js
   *   messages: [{ header, message}],
   *   action: NO|CLOSE <-- action in notification, see notice-action-types.js
   * }
   */
  notices: new Map(),
  _id: 0, // идентификатор, который будет присвоен следующему уведомлению
  _old_id: null, // идентификатор, которым обладает самое старое уведомление
  size: 0 // иначе гетер не вызовит каллбэк, если использовать Map.size
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
