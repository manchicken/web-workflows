"use strict"

const $ = require('jquery')
const WebWorkflow = require('src/web-workflow')

/**
 * Use cases where errors are expected.
 */
describe('errors', () => {
  test('dies on missing document ID', () => {
    expect(() => new WebWorkflow({
      start:'https://www.google.com',
      target:'this-target-doesnt-exist',
      data:{},
    })).toThrowError(/^Can't load the target$/)
  })
})

describe('bootstrap', () => {
  test('can bootstrap', () => {
    document.body.innerHTML = '<div id="jest-target"></div>';
    const wf = new WebWorkflow({
      target:'jest-target',
      start:'https://manchicken.com',
      data:{}
    })
    expect(wf.target).toBeInstanceOf(HTMLDivElement)
  })
})
