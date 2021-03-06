# ItIs

just alternatives suger, without `if-else-if` and `switch-case-break`.

### API

# ItIs

### sync

- **MATCH**: one value of {`[value1, value2]`} , input by `is(value1).is(value2)`.
- **THEN**: run fellow `then(fn1).then(fn2)`'s fns{`[fn1, fn2]`}.
- **DONE**

```ts
import * as It from '..'
const { ItIs, ItIsAsync } = It

const first = '1'

const example = new ItIs(first)
example
  .is('1')
  .then((what = ['1']) => {})
  .then((what = ['1']) => {})
  .is('1') // ? is Needing
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

like `Promise`, get all values and all fns, then run the **MATCH** process.

- **MATCH**: one value of {`[value1, value2]`} , input by `is(value1).is(value2)`.
- **THEN**: run `then(fn1).then(fn2)`'s fns{`[fn1, fn2]`}.
- **DONE**


```ts
import * as It from '..'
const { ItIs, ItIsAsync } = It

const first = '1'

const example = new ItIsAsync(first)
example
  .is('1')
  .then((what = ['1']) => {})
  .then((what = ['1']) => {})
  .is('1') // without ?
  .then((what = ['1']) => {})
  .then((what = ['1']) => {})

const example2 = new ItIs(first)
example2
  .is('1')
  .is('2')
  .then((what = ['1', '2']) => {})
```
