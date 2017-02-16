import * as actions from 'notifications/notification-action-types'

export default class Toast {
  constructor ({ id, notification }, time, destroyCb = null) {
    let { type, messages, action } = notification
    this.id = id
    this.type = type
    this.messages = messages
    this.action = action
    this.$destroyCb = destroyCb
    if (time !== Infinity) setTimeout(() => this.destroy(), time)
  }

  actionClass () {
    return this.action.toLowerCase()
  }

  typeClass () {
    return this.type.toLowerCase()
  }

  hasAction () {
    return this.action !== actions.NO
  }

  update ({ type, messages, action }, destroyCb = this.$destroyCb) {
    this.type = type
    this.messages = messages
    this.action = action
    this.$destroyCb = destroyCb
  }

  destroy () {
    this.$destroyCb && this.$destroyCb()
  }
}
