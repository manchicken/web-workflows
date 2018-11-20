"use strict"

/**
 * This class encapsulates a workflow frame
 */
class Frame {

  /**
   * 
   * @param {Object} frameDetails Details about the Workflow Frame
   * @param {String} frameDetails.appId The source URL for the frame
   * @param {String} frameDetails.source The source URL for the frame
   * @param {HTMLIFrameElement} frameDetails.targetFrame The iframe into which the frame is loaded
   * @param {Workflow} frameDetails.parent The parent Workflow for the frame
   */
  constructor({appId=null, source=null, targetFrame=null, parent=null}) {
    this.core = { appId, source, targetFrame, parent }
    this.loading = false
  }

  /**
   * @returns Returns a boolean indicating whether or not we can bootstrap this workflow frame.
   */
  canBootstrap() {
    return !!(
      ( typeof(this.core.source) === 'string' && this.core.source.length > 1 ) &&
      ( this.core.targetFrame instanceof HTMLIFrameElement ) &&
      ( typeof(this.core.appId) === 'string' && this.core.appId.length > 1 ) &&
      ( !!this.core.parent && this.core.parent.hasOwnProperty('emitEvent') )
    )
  }

  /**
   * Bootstrap the workflow frame
   */
  bootstrap() {
    const frame = this.core.targetFrame
    frame.addEventListener('load', (event)=>{
      // Only fire the frameLoaded callback if we finished loading ourself
      if (frame.src === this.core.source) {
        this.frameLoaded()
      }
    })
    frame.src = this.core.source
    this.loading = true
  }

  /**
   * Finish up now that the frame has finished loading.
   */
  frameLoaded() {
    console.log("frame is loaded.")
    this.loading = false
    this.core.parent.emitEvent('frame-loaded', {
      appId:this.core.appId,
      source:this.core.source,
    })
  }
}

module.exports = Frame