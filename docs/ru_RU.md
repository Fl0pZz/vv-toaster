### А что это такое?
Это стек для уведомлений, написанный на `vue` + `vuex`.
Его особенностью является возможность обновления уже показываемых уведомлений

## Api
### Структура уведовления
Каждое уведомление имеет следующую структуру:
```js
// notice
{
  type,
  messages: [{
    header, // текст заголовка
    message // текст сообщения
  }],
  action
}
```
Однако, если вы используете дефолтные компоненты для вывода уведомления, то вы
можете влиять на внешний вид текста или заголовка, например передавая соответсвующие теги:
```js
header = 'Header text'
header = '<span class="red">Header text</span>'
```
#### `type`
Содержит информацию о типе уведомления, используется для кастомизации внешнего вида
Типы по умолчанию (смотри `notification-types.js`):
* `INFO`
* `ERROR`

#### `action`
Содержит информацию о типе действия, которое можно совершить с уведомлением
Действия по умолчанию (смотри `notification-action-types.js`):
* `NO` - без действий
* `CLOSE` - скрыть уведомление

### Methods
Важно понимать, что это `action` из `vuex`, а значит после использования

этих функций через `dispatch` вам вернется `Promise`

#### `push([option])`
Параметры:
* `notice \<Object>`

Возвращаемое значение:
* `id \<Number>` - идентификатор уведомления

Пример использования:
```js
// ...
store.dispatch('notification/push', notification)
  .then(id => console.log(id))
```
Однако, для гораздо проще использовать соответствующие методы-обертки из секции [Wrappers](#wrappers):
* `pushNotice`
* `pushInfo`
* `pushError`

#### `get([option])`
Возвращает уведомление с заданным `id`:
* `id \<Number>`

Возвращаемое значение:
* `notice \<Object>`

Пример использования:
```js
// ...
store.dispatch('notification/get', id)
  .then(notification => console.log(notification))
```

#### `pop_back()`
Возвращает самое старое уведомление, которе находит в очереди
Возвращаемое значение:
* `{ id, notice }`

Пример использования:
```js
// ...
store.dispatch('notification/pop_back')
  .then(pair => console.log(pair.id, pair.notification))
```

#### `update([option])`
Обновляет выбранное уведомление:
* `pair`:
```js
  {
    id, // <Number> - идентификатор изменяемого уведомления
    notice // <Object> - уведомление
  }
```

Возвращаемое значение:
* `success \<Bool>`

Пример использования:
```js
// ...
store.dispatch('notification/update', pair)
  .then(success => console.log('Is success?', success))
```

Однако, для гораздо проще использовать соответствующие методы-обертки из секции [Wrappers](#wrappers):
* `updateNotice`
* `updateInfo`
* `updateError`

#### `del([option])`
Удаляет выбранное уведомление:
* `id` - идентификатор уведомления

Пример использования:
```js
// ...
store.dispatch('notification/del', id)
```

### Wrappers
Для того, чтобы каждый раз не писать что-то похожее на код ниже:
```js
import store from './store'
// ...
store.dispatch('notification/push', notification)
```
Я написал пару оберток и теперь это выглядит так:
```js
import { pushInfo } from './notification-wrappers'
// ...
pushInfo(messages)
```

#### `pushNotice([option])`
* `notification \<Object>`

Возвращаемое значение:
* `id \<Number>` - идентификатор уведомления

Примеры использования:
```js
import { pushInfo } from './notification-wrappers'
// ...
let id = pushNotice(notification)
```

#### `pushInfo([options])`
* `messages \<Array>` - список сообщений вида `{ header, message }`
* `action <String>` (default: __NO__) - действие

Возвращаемое значение:
* `id \<Number>` - идентификатор уведомления

Примеры использования:
```js
// #1
import { pushInfo } from './notification-wrappers'
// ...
let id = pushInfo(messages)

// #2
import * as actions from './notification-action-types'
let id2 = pushInfo(messages, actions.CLOSE)
```

#### `pushError([options])`
* `messages \<Array>` - список сообщений вида `{ header, message }`
* `action <String>` (default: __CLOSE__) - действие

Возвращаемое значение:
* `id \<Number>` - идентификатор уведомления

Примеры использования:
```js
// #1
import { pushError } from './notification-wrappers'
// ...
let id = pushError(messages)

// #2
import * as actions from './notification-action-types'
let id2 = pushError(messages, actions.NO)
```

#### `updateNotice([options])`
* `id \<Number>` - идентификатор сообщения
* `notification \<Object>`

Возвращаемое значение:
* `success \<Bool>`

Примеры использования:
```js
import { pushInfo } from './notification-wrappers'
// ...
updateNotice(id, notification)
```

#### `updateInfo([options])`
* `id \<Number>` - идентификатор сообщения
* `messages \<Array>` - список сообщений вида `{ header, message }`
* `action <String>` (default: __NO__) - действие

Возвращаемое значение:
* `success \<Bool>`

Примеры использования:
```js
// #1
import { updateInfo } from './notification-wrappers'
// ...
updateInfo(id, messages)

// #2
import * as actions from './notification-action-types'
updateInfo(id, messages, actions.CLOSE)
```

#### `updateError([options])`
* `id \<Number>` - идентификатор сообщения
* `messages \<Array>` - список сообщений вида `{ header, message }`
* `action <String>` (default: __CLOSE__) - действие

Возвращаемое значение:
* `success \<Bool>`

Примеры использования:
```js
// #1
import { updateError } from './notification-wrappers'
// ...
updateError(id, messages)

// #2
import * as actions from './notification-action-types'
updateError(id, messages, actions.NO)
```