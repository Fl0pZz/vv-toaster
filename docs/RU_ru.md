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
можете влять на внешний вид текста или заголовка, например передавая соответсвующие теги:
```js
header = 'Header text'
header = '<span class="red">Header text</span>'
```
#### `type`
Содержит инормацию о типе уведомления, используется для кастомизации внешнего вида
Типы по умолчанию (смотри `notice-types.js`):
* INFO
* ERROR

#### `action`
Содержит информацию о типе действия, которое можно совершить с уведомлением
Действия по умолчанию (смотри `notice-action-types.js`):
* NO - без действий
* CLOSE

### Functions
Важно понимать, что это `action` из `vuex`, а значит после использования

этих функций через `dispatch` вам вернется `promise`

#### `push([option])`
Добавить уведомление в очередь
* notice \<Object>

Возвращаемое значение:
* id \<Number> - идентификатор уведомления

Пример использования:
```js
// ...
store.dispatch('notification/push', notice)
  .then(id => console.log(id))
```
Однако, для гораздо проще использовать соответствующие методы-обертки из секции `wrappers`:
* `pushNotice`
* `pushInfo`
* `pushError`

#### `take([option])`
Возвращает и удаляет уведомление с заданным `id`:
* id \<Number>

Возвращаемое значение:
* notice \<Object>

Пример использования:
```js
// ...
store.dispatch('notification/take', id)
  .then(notice => console.log(notice))
```

#### `pop_back()`
Возвращает и удаляет самое старое уведомление, которе находит в очереди
Возвращаемое значение:
* { id, notice }

Пример использования:
```js
// ...
store.dispatch('notification/pop_back')
  .then(pair => console.log(pair.id, pair.notification))
```

#### `update([option])`
Обновляет выбранное уведомление:
* pair:
```js
  {
    id, // <Number> - идентификатор изменяемого уведомления
    notice // <Object> - уведомление
  }
```

Возвращаемое значение:
* success \<Bool>

Пример использования:
```js
// ...
store.dispatch('notification/update', pair)
  .then(success => console.log('Is success?', success))
```

Однако, для гораздо проще использовать соответствующие методы-обертки из секции `wrappers`:
* `updateNotice`
* `updateInfo`
* `updateError`

### Wrappers
Для того, чтобы каждый раз не писать что-то похожее на код ниже:
```js
import store from './store'
...
store.dispatch('notice/push', notice)
```
Я написал пару оберток и теперь это выглядит так:
```js
import { pushInfo } from './notice-wrappers'
...
pushInfo(messages)
```

#### `pushNotice([option])`
* notice \<Object>

Возвращаемое значение:
* id \<Number> - идентификатор уведомления

#### `pushInfo([options])`
* messages \<Array> - список сообщений вида `{ header, message }`
* action <String> (default: __NO__) - действие

Возвращаемое значение:
* id \<Number> - идентификатор уведомления

#### `pushError([options])`
* messages \<Array> - список сообщений вида `{ header, message }`
* action <String> (default: __CLOSE__) - действие

Возвращаемое значение:
* id \<Number> - идентификатор уведомления

#### `updateNotice([options])`
* id \<Number> - идентификатор сообщения
* notice \<Object>

Возвращаемое значение:
* success \<Bool>

#### `updateInfo([options])`
* id \<Number> - идентификатор сообщения
* messages \<Array> - список сообщений вида `{ header, message }`
* action <String> (default: __NO__) - действие

Возвращаемое значение:
* success \<Bool>

#### `updateError([options])`
* id \<Number> - идентификатор сообщения
* messages \<Array> - список сообщений вида `{ header, message }`
* action <String> (default: __CLOSE__) - действие

Возвращаемое значение:
* success \<Bool>
