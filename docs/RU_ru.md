### А что это такое?
Это стек для уведомлений, написанный на `vue` + `vuex`

## Api
### Структура уведовления
Каждое уведомление имеет следующую структуру:
```js
{
  type,
  messages: [{
    header, // текст заголовка
    message // текст сообщения
  }],
  action
}
```
#### `type`
Содержит инормацию о типе уведомления, используется для кастомизации внешнего вида
Типы по умолчанию (смотри `notice-types.js`):
* INFO
* ERROR

#### `action`
Содержит информацию о типе действия, которое можно совершить с увеомлением
Действия по умолчанию (смотри `notice-action-types.js`):
* NO - без действий
* CLOSE

### Actions
#### `push([option])`
Добавить уведомление в очередь:
* notice \<Object>

#### 'get([option])'
Возвращает и удаляет уведомление с заданным `id`:
* id \<Number>

#### 'shift()'
Возвращает и удаляет самое старое уведомление, которе находит в очереди

#### `update([option])`
Обновляет выбранное уведомление:
* ```
  {
    id, // <Number> - идентификатор изменяемого уведомления
    notice // <Object> - уведомление
  }
```

### wrappers
Для того, чтобы каждый раз не писать:
```js
import store from './store'
...
store.dispatch('notice/push', notice)
```
Я написал пару оберток и теперь это выглядит так:
```js
import { pushInfo } from './notice-wrappers'

pushInfo(messages)
```

#### `pushInfo([options])`
* messages \<Array> - список сообщений вида `{ header, message }`
* action <String> (default: __NO__) - действие

#### `pushError([options])`
* messages \<Array> - список сообщений вида `{ header, message }`
* action <String> (default: __CLOSE__) - действие
