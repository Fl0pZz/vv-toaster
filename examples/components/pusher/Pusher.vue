<template lang="html">
    <div>
        <a @click="pushI()">Отправить уведомление</a>
        <a @click="pushE()">Отправить ошибку</a>
        <a @click="updateE(1)">Обновить c id = 1</a>
    </div>
</template>

<script lang="babel">
  import { pushInfo, pushError, updateError } from 'notifications/notification-wrappers'

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
      updateE (id = 0) {
        const messages = [{ header: 'INFO', message: 'Hello' }]
        updateError(id, messages)
      }
    }
  }
</script>
