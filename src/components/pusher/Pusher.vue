<template lang="html">
    <div>
        <a @click="pushI()">Отправить уведомление</a>
        <a @click="pushE()">Отправить ошибку</a>
    </div>
</template>

<script lang="babel">
  import { pushInfo, pushError } from 'store/notifications/notification-wrappers'

  export default{
    name: 'pusher',
    methods: {
      pushI () {
        const messages = [{ header: 'INFO', message: 'Hello world!' }]
        pushInfo(messages)
      },
      pushE () {
        const messages = [{ header: 'ERROR', message: 'Error world!' }]
        pushError(messages)
      }
    }
  }
</script>
