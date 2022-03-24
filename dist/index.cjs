'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class ItIs {
  constructor(what) {
    this._ok = false;
    this._cache = [];
    this.callbacks = [];
    this._it = what;
  }
  is(what) {
    this._cache.push(what);
    this._what = what;
    if (this._ok)
      return null;
    return this;
  }
  then(fn) {
    this.callbacks.push(fn);
    if (this._cache.includes(this._it)) {
      fn(this._cache);
      this._ok = true;
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
    for (let index = 0; index < this._runQueue.length; index++) {
      const q = this._runQueue[index];
      if (q.cache.includes(this._it)) {
        q.callbacks.forEach((callback) => callback(q.cache));
        break;
      }
    }
  }
  is(what) {
    this._cache.push(what);
    return this;
  }
  then(fn) {
    this._timerId && clearTimeout(this._timerId);
    if (this._cache.length) {
      this.callbacks.push(fn);
      this._runQueue.push({
        cache: this._cache,
        callbacks: this.callbacks
      });
    } else {
      const len = this._runQueue.length;
      if (len)
        this._runQueue[len - 1].callbacks.push(fn);
    }
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
