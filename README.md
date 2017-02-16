# vv-toaster

### А что это такое?
Это стек для уведомлений, написанный на `vue` + `vuex`.
Его особенностью является возможность обновления уже показываемых уведомлений

### А как это использовать?
А очень просто!
Импортируем компоненту `Toaster.vue`, которая управляет процессом вывода уведомлений:
```js
// my-component.js
import Toaster from 'vv-toaster/src/components/default/toastmanager/Toaster'

export default {
  // ...
  components: { Toaster }
}
```

Добавляем в шаблончик:
```html
<!-- my-component.html -->
<div>
  <toaster></toaster>
</div>
```

Теперь, если в какой-то другой компоненте вы хотите вывести уведомление (возьмем `pushInfo` из [Wrappers](#wrappers)):
```js
import { pushInfo } from 'vv-toaster/src/store/notifications/notification-wrappers'

// ...
pushInfo({ header: 'header', message: 'Hello world!' })
```
И все?
И все.

### А как установить?
```bash
// yarn
yarn add vv-toaster

// npm
npm i vv-toaster
```
