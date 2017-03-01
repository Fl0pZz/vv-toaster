import * as getters from './notification-getters'
import * as actions from './notification-actions'
import mutations from './notification-mutations'

export const state = {
  /**
   * structure of notification:
   * {
   *   type: ERROR|INFO, <-- see notice-types.js
   *   messages: [{ header, message}],
   *   action: NO|CLOSE <-- action in notification, see notice-action-types.js
   * }
   */
  _notifications: new Map(), // вместо обычного стека из-за дешевых операций удаления и удобного поиска
  _id: 0,                    // id, который будет присвоен следующему уведомлению
  _old_id: null,             // id самого старого уведомления
  updated: null              // id последнего обновленного уведомления
}

export default {
  state,
  getters,
  mutations,
  actions
}
