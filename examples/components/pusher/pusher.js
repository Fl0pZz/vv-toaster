import { pushNotice, pushInfo, pushError, updateError } from 'notifications/notification-wrappers'
import * as nTypes from 'notifications/notification-types'
import * as nActionTypes from 'notifications/notification-action-types'

export default{
  name: 'pusher',
  data: () => ({
    id: null,
    notification: {
      type: nTypes.INFO,
      messages: {
        header: null,
        message: null
      },
      action: nActionTypes.CLOSE
    },
    nTypes: [
      { text: nTypes.INFO, value: nTypes.INFO },
      { text: nTypes.ERROR, value: nTypes.ERROR }
    ],
    nActionTypes: [
      { text: nActionTypes.NO, value: nActionTypes.NO },
      { text: nActionTypes.CLOSE, value: nActionTypes.CLOSE }
    ]
  }),
  methods: {
    push () {
      let notification = this.notification
      notification.messages = [this.notification.messages]
      pushNotice(this.notification)
    },
    pushI () {
      pushInfo(Object.assign({}, this.notification.messages), this.notification.action)
        .then(id => { this.id = id })
    },
    pushE () {
      pushError(Object.assign({}, this.notification.messages), this.notification.action)
        .then(id => { this.id = id })
    },
    updateE () {
      updateError(this.id, Object.assign({}, this.notification.messages))
    }
  }
}
