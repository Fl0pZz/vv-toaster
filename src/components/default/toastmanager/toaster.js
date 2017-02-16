import { mapGetters, mapActions } from 'vuex'
import Toast from '../toast/ToastClass'
import ToastItem from '../toast/ToastItem'
import * as nTypes from 'notifications/notification-types'

const MAX_NOTICES = 5
const MAX_SHOW_INFO = 4000
const MAX_SHOW_ERROR = Infinity

export default {
  name: 'toaster',
  components: { ToastItem },
  data: () => ({
    count: 0,
    toastList: []
  }),

  watch: {
    isEmpty (empty) {
      if (!empty && ( this.count < MAX_NOTICES )) this.addToast()
    },

    updated (id) {
      if (id === null) return
      const toastIndex = this.toastList.findIndex(item => item.id === id)
      if (toastIndex !== -1) this.updateToast(id)
    }
  },

  computed: mapGetters({
      isEmpty: 'notification/isEmpty',
      updated: 'notification/lastUpdated'
    }),

  methods: {
    _checkNotifications () {
      if (!this.isEmpty && ( this.count < MAX_NOTICES )) this.addToast()
    },

    _defineToastLifeTime ({ type }) {
      switch (type) {
        case nTypes.INFO:
          return MAX_SHOW_INFO
        case nTypes.ERROR:
          return MAX_SHOW_ERROR
        default:
          throw new Error('Unknown notice action type')
      }
    },

    addToast () {
      this.pop_back().then(pair => {
        const time = this._defineToastLifeTime(pair.notification)
        const destroyCb = () => { this.removeToast(pair.id) }
        const toast = new Toast(pair, time, destroyCb)
        this.count = this.toastList.push(toast)
      })
    },

    updateToast (id) {
      const toastIndex = this.toastList.findIndex(item => item.id === id)
      this.get(id).then(notification => { this.toastList[toastIndex].update(notification) })
    },

    removeToast (id) {
      const toastIndex = this.toastList.findIndex(item => item.id === id)
      if (toastIndex === -1) {
        this._checkNotifications()
        return
      }
      this.del(id).then(() => {
        this.toastList.splice(toastIndex, 1)
        --this.count
        this._checkNotifications()
      })
    },

    ...mapActions({
      pop_back: 'notification/pop_back',
      get: 'notification/get',
      del: 'notification/del'
    })
  }
}
