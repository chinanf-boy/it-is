export type WhatType = String
export type CallBack = (what: WhatType | Array<WhatType>) => void
export interface emptyThis {
  // is?: (what: WhatType | Array<WhatType>) => emptyThis | ItIs,
  then?: (what: WhatType | Array<WhatType>) => ItIs
}
export class ItIs {
  // public version = version
  private _it: WhatType
  private _ok: Boolean = false
  private _what: WhatType
  private _cache: Array<WhatType> = []
  private callbacks: Array<CallBack> = []

  constructor(what: WhatType) {
    this._it = what
  }

  is(what: WhatType): ItIs | null {
    this._cache.push(what)
    this._what = what
    if (this._ok) return null

    return this
  }

  then(fn: CallBack): ItIs {
    this.callbacks.push(fn)

    if (this._cache.includes(this._it)) {
      fn(this._cache)
      this._ok = true
    }
    else {
      this._cache = []
    }
    return this
  }
}

export interface runObj {
  cache: Array<WhatType>
  callbacks: Array<CallBack>
}
// TODO: 第二个，试试 定时器的异步版本
export class ItIsAsync {
  // public version = version
  private _it: WhatType
  private _cache: Array<WhatType> = []
  private callbacks: Array<CallBack> = []
  private _runQueue: Array<runObj> = []
  private _timerId: NodeJS.Timeout

  constructor(what: WhatType) {
    this._it = what
  }

  _timer() {
    this._timerId = setTimeout(() => {
      this._run()
    }, 0)
  }

  _run() {
    for (let index = 0; index < this._runQueue.length; index++) {
      const q = this._runQueue[index]
      if (q.cache.includes(this._it)) {
        q.callbacks.forEach(callback => callback(q.cache))
        break
      }
    }
  }

  is(what) {
    this._cache.push(what)
    return this
  }

  then(fn: CallBack): ItIsAsync {
    this._timerId && clearTimeout(this._timerId)

    if (this._cache.length) {
      this.callbacks.push(fn)
      this._runQueue.push({
        cache: this._cache,
        callbacks: this.callbacks,
      })
    }
    else {
      const len = this._runQueue.length
      if (len) this._runQueue[len - 1].callbacks.push(fn)
    }

    this._reset()
    this._timer()

    return this
  }

  _reset() {
    this._cache = []
    this.callbacks = []
  }
}

export default {
  ItIs,
  ItIsAsync,
}
