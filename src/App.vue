<template lang="html">
  <div id="app">
    <pusher></pusher>
    <toast-manager></toast-manager>
  </div>
</template>

<script lang="babel">
import ToastManager from 'components/default/ToastManager'
import Pusher from 'components/pusher/Pusher'

export default {
  name: 'app',
  components: {
    ToastManager,
    Pusher
  }
}
</script>
