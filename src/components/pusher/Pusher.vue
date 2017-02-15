<template lang="html">
    <div>
        <a @click="pushI()">Отправить уведомление</a>
        <a @click="pushE()">Отправить ошибку</a>
        <a @click="updateI()">Обновить c id = 0</a>
    </div>
</template>

<script lang="babel">
  import { pushInfo, pushError, updateInfo } from 'store/notifications/notification-wrappers'

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
      },
      updateI (id = 0) {
        const messages = [{ header: 'INFO', message: 'Hello' }]
        updateInfo(id, messages)
      }
    }
  }
</script>
