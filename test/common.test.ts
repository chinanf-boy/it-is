import It, {ItIs, ItIsAsync} from ".."
import { assert, describe, expect, it, test } from 'vitest'

describe('it-is', () => {
  it('should be 1', () => {
    // console.time("count")
    const first = "1"
    let ok = false
    const testArr = new Array(10000);

    let util = new ItIs(first)
    let newUtil;
    testArr.forEach(_ => {
      if(newUtil) {
        newUtil = newUtil.is(2).then((what) => {
          console.log(what)
        })
        return
      }
      newUtil = util.is(2).then((what) => {
        console.log(what)
      })
    })
    util.is('1').then((what) => {
      ok = true
      expect(ok).toBe(true)
      // console.timeEnd("count")
    })
  })
})

describe('it-is-async', () => {
  it('要是最后', () => {
    console.time("count-async")
    const first = "1"
    let ok = false
    const testArr = new Array(10000);
    console.log(1111)

    let util = new ItIsAsync(first)
    testArr.forEach(_ => {
      util = util.is(2).then((what) => {
        // console.log(what)
      })
    })
    util.is('1').then((what) => {
      ok = true
      console.timeEnd("count-async")
      console.log(1111)
      expect(ok).toBe(true)
    })
  })
})