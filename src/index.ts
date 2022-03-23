
export type WhatType = any ;
export type CallBack = (what: WhatType | Array<WhatType>) => void
export type emptyThis = {
  is?: (what: WhatType | Array<WhatType>) => emptyThis,
  then?: (what: WhatType | Array<WhatType>) => emptyThis
}
class exObj {
  // public version = version
  private _it: WhatType;
  private _what: WhatType;
  private _cache: Array<WhatType> = [];
  private callbacks: Array<CallBack> = [];
  
  constructor(what: WhatType) {
    this._it = what;
  }
  is(what) {
    this._cache.push(what)
    this._what = what

    return this
  }
  then(fn: CallBack): exObj | emptyThis {
    this.callbacks.push(fn)

    if(this._cache.includes(this._it)) {
      fn(this._cache)
      return {}
    } else {
      this._cache = []
    }
    return this
  }
}
export default exObj