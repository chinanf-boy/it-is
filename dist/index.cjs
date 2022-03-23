'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class ItIs {
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
class ItIsAsync {
  constructor(what) {
    this._cache = [];
    this.callbacks = [];
    this._runQueue = [];
    this._it = what;
  }
  _timer() {
    this._timerId = setTimeout(() => {
      this._run();
    }, 0);
  }
  _run() {
    console.log(1111111111);
    this._runQueue.some((q) => {
      if (q.cache.includes(this._it)) {
        q.callbacks.forEach((callback) => callback(q.cache));
        return true;
      }
      return false;
    });
  }
  is(what) {
    this._cache.push(what);
    return this;
  }
  then(fn) {
    this._timerId && clearTimeout(this._timerId);
    this.callbacks.push(fn);
    this._runQueue.push({
      cache: this._cache,
      callbacks: this.callbacks
    });
    this._reset();
    this._timer();
    return this;
  }
  _reset() {
    this._cache = [];
    this.callbacks = [];
  }
}

exports.ItIs = ItIs;
exports.ItIsAsync = ItIsAsync;
