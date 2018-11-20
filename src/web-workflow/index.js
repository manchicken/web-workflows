"use strict"

const Workflow = require('src/web-workflow/workflow/workflow')

class WebWorkflow {
  /**
   * 
   * @param {Object} opts The options for loading the workflow
   * @param {String} opts.start The starting URL for the workflow. This can be relative or absolute.
   * @param {String|HTMLDivElement} opts.target The DOM ID, or HTMLDivElement for the container into which the workflow frame goes.
   * @param {Any} opts.data Any data your starting workflow frame may need.
   */
  constructor({start, target, data}) {
    this.target = null
    this.startingUrl = null
    this.initialData = null

    if ( !!target ) { this._setTarget(target) }
    if ( !!start ) { this.startingUrl = start }
    if ( !!data ) { this.initialData = data }
  }

  _setTarget(target) {
    if ( typeof target === 'string' ) {
      this.target = document.getElementById(target)
    } else if ( target instanceof HTMLDivElement ) {
      this.target = target
    }
    if ( !this.target ) { throw new Error("Can't load the target") }
  }
}

module.exports = WebWorkflow