"use strict"

/**
 * This is the overall workflow management
 */
class Workflow {

    /**
     * @param {HTMLElement} domTarget A reference to a position within the DOM for frames
     * @param {WorkflowFrame} currentFrame The current frame in the workflow
     * @param {WorkflowFrame} previousFrame The previous frame in the workflow
     */
    constructor({domTarget, currentFrame=null, previousFrame=null}) {
        this.domTarget = domTarget
        this.currentFrame = currentFrame
        this.previousFrame = previousFrame
    }

    setDomTarget(domTarget) {
        if (! this.domTarget instanceof HTMLElement) {
            throw new Error('domTarget must be an HTMLElement')
        }
        this.domTarget = domTarget
    }
    
    pushFrame(newFrame) {
        // First we need to stash the current state of the workflow,
        // and then we transition the frame
    }
}

module.exports = Workflow