import It from ".."
import { assert, describe, expect, it } from 'vitest'

describe('it-is', () => {
  it('should be 2', () => {
    const first = "1"
    let ok = false
    const util = new It(first)
    util.is(2).then((what) => {
      console.log(what)
    })?.is(1).then((what)=> {
      console.log(what)
    })?.is('1').then((what) => {
      ok = true
    })
    expect(ok).toBe(true)
  })
})