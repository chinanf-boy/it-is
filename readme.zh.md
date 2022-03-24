# ItIs

语法糖, 替换 `if-else-if` 和 `switch-case-break`.

### API

# ItIs

### sync

- **匹配**: 由 `is(value1).is(value2)` 而来的{`[value1, value2]`} ，若是匹配到其中一个，
- **那么**: 执行跟随的 `then(fn1).then(fn2)`'s fns{`[fn1, fn2]`} 函数
- **完成**

```ts
import * as It from '..'
const { ItIs, ItIsAsync } = It

const first = '1'

const example = new ItIs(first)
example
  .is('1')
  .then((what = ['1']) => {})
  .then((what = ['1']) => {})
  .is('1') // ? 是需要的
  ?.then((what = ['1']) => {})
  .then((what = ['1']) => {})

const example2 = new ItIs(first)
example2
  .is('1')
  .is('2')
  .then((what = ['1', '2']) => {})
```

# ItIsAsync

### async

像 `Promise`，获取完整的 values 和 fns 的对象，才会执行，**匹配** 流程。

- **匹配**: 由 `is(value1).is(value2)` 而来的{`[value1, value2]`} ，若是匹配到其中一个，
- **那么**: 执行跟随的 `then(fn1).then(fn2)`'s fns{`[fn1, fn2]`} 函数
- **完成**


```ts
import * as It from '..'
const { ItIs, ItIsAsync } = It

const first = '1'

const example = new ItIsAsync(first)
example
  .is('1')
  .then((what = ['1']) => {})
  .then((what = ['1']) => {})
  .is('1') // 不需要 ?
  .then((what = ['1']) => {})
  .then((what = ['1']) => {})

const example2 = new ItIs(first)
example2
  .is('1')
  .is('2')
  .then((what = ['1', '2']) => {})
```

## MIT

- [chinanf-boy](https://github.com/chinanf-boy/it-is)