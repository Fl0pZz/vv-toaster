import { mapGetters } from 'vuex'
import Toast from './toast/Toast'
import { DISPLAY } from 'store/toasts/toast-mutation-types'

const MAX_NOTICES = 5

export default {
  name: 'toast-manager',
  components: {
    Toast
  },
  watch: {
    isEmpty (empty) {
      if (!empty && this.$store.getters['toast/canDisplay']) {
        console.log('is not empty')
        this.$store.dispatch('notification/pop_back')
          .then(pair => { this.$store.commit('toast/' + DISPLAY, pair) })
      }
    },

    canDisplay (able) {
      if (able && !this.$store.getters['notification/isEmpty']) {
        console.log('is able')
        this.$store.dispatch('notification/pop_back')
          .then(pair => { this.$store.commit(DISPLAY, pair) })
      }
    }
  },
  created () {
    this.$store.dispatch('toast/init', MAX_NOTICES)
  },

  computed: {
    ...mapGetters({
      isEmpty: 'notification/isEmpty',
      canDisplay: 'toast/canDisplay',
      toastStackSize: 'toast/toastStackSize'
    })
  }
}
