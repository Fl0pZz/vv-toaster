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

### Functions
#### `push([option])`
Добавить уведомление в очередь:
* notice \<Object>

Возвращаемое значение:
* id \<Number> - идентификатор уведомления

#### `get([option])`
Возвращает и удаляет уведомление с заданным `id`:
* id \<Number>

Возвращаемое значение:
* notice \<Object>

#### `pop_back()`
Возвращает и удаляет самое старое уведомление, которе находит в очереди

Возвращаемое значение:
* { id, notice }

#### `update([option])`
Обновляет выбранное уведомление:
* ```
  {
    id, // <Number> - идентификатор изменяемого уведомления
    notice // <Object> - уведомление
  }
```

Возвращаемое значение:
* success \<Bool>

### Wrappers
Для того, чтобы каждый раз не писать:
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
