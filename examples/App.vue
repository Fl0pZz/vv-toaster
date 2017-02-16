<template lang="html">
  <div id="app">
    <pusher></pusher>
    <toaster></toaster>
  </div>
</template>

<script lang="babel">
import Toaster from 'components/default/toastmanager/Toaster'
import Pusher from 'examples/components/pusher/Pusher'

export default {
  name: 'app',
  components: {
    Toaster,
    Pusher
  }
}
</script>
