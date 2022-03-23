'use strict';

class exObj {
  constructor(what) {
    this._cache = [];
    this.callbacks = [];
    this._it = what;
  }
  is(what) {
    this._cache.push(what);
    this._what = what;
    return this;
  }
  then(fn) {
    this.callbacks.push(fn);
    if (this._cache.includes(this._it)) {
      fn(this._cache);
      return {};
    } else {
      this._cache = [];
    }
    return this;
  }
}

module.exports = exObj;
