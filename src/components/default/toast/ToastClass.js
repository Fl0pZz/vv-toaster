export default class Toast {
  constructor ({ id, notification }, time, desctroyCb = null) {
    let { type, messages, action } = notification
    this.id = id
    this.type = type
    this.messages = messages
    this.action = action
    this.$destroyCb = desctroyCb
    if (time !== Infinity) setTimeout(() => this.destroy(), time)
  }

  actionClass () {
    return this.action.toLowerCase()
  }

  typeClass () {
    return this.type.toLowerCase()
  }

  destroy () {
    this.$destroyCb && this.$destroyCb()
  }
}
