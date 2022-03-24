import { describe, expect, it, vitest } from 'vitest'
import * as It from '../dist/index.cjs'

const { ItIs, ItIsAsync } = It

describe('it-is', () => {
  it('should be 1', () => {
    const first = '1'
    const testArr = new Array(10000)
    const mockCallback = vitest.fn(x => x[0])

    const Switch = new ItIs(first)
    let newSwitch
    testArr.forEach((_) => {
      if (newSwitch) {
        newSwitch = newSwitch.is(2).then(mockCallback)
        return
      }
      newSwitch = Switch.is(2).then(mockCallback)
    })
    Switch.is('1').then(mockCallback).then(mockCallback)

    expect(mockCallback.mock.calls.length).toBe(2)
  })
  it('寻找类型', () => {
    const type = '打开'
    const mockCallback = vitest.fn(x => x[0])

    const SWITCH = new ItIs(type)
    SWITCH.is('播放').then(mockCallback).then(mockCallback)
    /* 不运行 */
    expect(mockCallback.mock.calls.length).toBe(0)

    SWITCH.is('打开')
      .then(mockCallback)
      .then(mockCallback)
      .is('aa')
      ?.then(mockCallback)
      .then(mockCallback)

    expect(mockCallback.mock.calls.length).toBe(2)
  })
})

describe('it-is-async', () => {
  it('要是最后', () => {
    const first = '1'
    const testArr = new Array(10000)
    const mockCallback = vitest.fn(x => x[0])

    let Switch = new ItIsAsync(first)
    testArr.forEach((_) => {
      Switch = Switch.is(2).then(mockCallback)
    })
    Switch.is('2').is('1').then(mockCallback)

    setTimeout(() => expect(mockCallback.mock.calls.length).toBe(1), 0)
  })

  it('+1, 再 +1', () => {
    const first = '3'
    const testArr = new Array(10000)
    const mockCallback = vitest.fn(x => x[0])

    let Switch = new ItIsAsync(first)
    testArr.forEach((_) => {
      Switch = Switch.is(2).then(mockCallback)
    })
    Switch.is('1').is('3').then(mockCallback).then(mockCallback)
    setTimeout(() => expect(mockCallback.mock.calls.length).toBe(2), 0)
  })
})
