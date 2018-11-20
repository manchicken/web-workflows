"use strict"

const $ = require('jquery')
const WorkflowChild = require('src/workflow-child')

/**
 * Use cases where errors are expected.
 */
describe('errors', () => {
  test('dies on missing document ID', () => {
  })
})

describe('bootstrap', () => {
  test('can bootstrap', () => {
    document.body.innerHTML = '<div id="jest-target"></div>';
    const f = new WorkflowChild({
    })
    expect(f).toBeInstanceOf(WorkflowChild)
  })
})