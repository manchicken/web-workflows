"use strict"

const $ = require('jquery')
const Frame = require('src/web-workflow/workflow/frame')
const EventEmitter = require('events')

const emitter = new EventEmitter()

const mockParent = {
  emitEvent: (name, data) => emitter.emit(name, data)
}

/**
 * Use cases where errors are expected.
 */
describe('errors', () => {
  test('dies on missing document ID', () => {
  })
})

describe('bootstrap', () => {
  test("can't bootstrap", () => {
    document.body.innerHTML = '<div id="jest-target"><iframe id="jest-iframe"></iframe></div>';
    const f1 = new Frame({
    })
    expect(f1).toBeInstanceOf(Frame)
    expect(f1.canBootstrap()).toBeFalsy()
  })

  test("can bootstrap", () => {
    emitter.on('frame-loaded', jest.fn())
    const f2 = new Frame({
      appId:'abc123',
      source:'https://manchicken.com',
      targetFrame:document.getElementById('jest-iframe'),
      parent:mockParent,
    })
    expect(f2).toBeInstanceOf(Frame)
    expect(f2.canBootstrap()).toBeTruthy()
    expect(f2.loading).toBeFalsy()
    f2.bootstrap()
    expect(f2.loading).toBeTruthy()
    expect
  })
})