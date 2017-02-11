import { mapState } from 'vuex'
import * as nActionTypes from 'store/notifications/notification-action-types'
import * as nTypes from 'store/notifications/notification-types'

export default {
  name: 'toast',
  props: ['index'],
  data: () => ({
    typeClass: '',
    actionClass: '',
    hide: true,
    id: 0,
    messages: null,
    type: null,
    action: null
  }),

  created () {
    // console.log(this.flags)
    this.$watch('flags.' + this.index, (obj) => {
      console.log('obj:', obj, this.index)
      if (obj) {
        let { id, notificaion } = obj
        let { messages, action, type } = notificaion
        this.id = id
        this.messages = messages
        this.action = action
        this.type = type
        this.hide = false
      } else {
        this.hide = true
        this.id = 0
      }
    }, { immediate: true })
  },

  computed: {
    defineActionClass () {
      switch (this.action) {
        case nActionTypes.NO:
          this.actionClass = ''
          break
        case nActionTypes.CLOSE:
          this.actionClass = 'close'
          break
        default:
          throw new Error('Unknown notice action type')
      }
    },

    defineTypeClass () {
      switch (this.type) {
        case nTypes.INFO:
          this.typeClass = 'info'
          break
        case nTypes.ERROR:
          this.typeClass = 'error'
          break
        default:
          throw new Error('Unknown notice type')
      }
    },

    ...mapState({
      flags: state => state.toast.flags
    }),
  }
}
