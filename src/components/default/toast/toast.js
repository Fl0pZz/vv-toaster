export default {
  name: 'toast-item',
  props: ['toast'],
  created () {
    console.log('base toast', this.toast)
  },
  watch: {
    toast (t) {
      console.log('newToast', t)
    }
  }
}
