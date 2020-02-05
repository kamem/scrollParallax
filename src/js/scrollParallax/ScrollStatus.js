const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

export default class ScrollStatus {
  constructor() {
    this.$stage = global
    this.direction = 'y'
    this.functions = []
    this.debugMode = false
    this.targetPercentage = 0.2
    this.eventTriggerPercentage = 0
    this.setDirectionInfo()
    this.ScrollPosition = new ScrollPosition(this)
    this.scrollPosition = this.ScrollPosition.generateScrollPosition()
    this.scrollEventUpdate()
  }
  setVal(opt = {}) {
    this.$stage = opt.stage ? opt.stage : global
    this.direction = opt.direction || this.direction
    this.debugMode = opt.debugMode || this.debugMode
    this.targetPercentage = opt.targetPercentage || 0.2
    this.eventTriggerPercentage = opt.eventTriggerPercentage || 0
    this.updateFunction = opt.updateFunction
    this.ScrollPosition = new ScrollPosition(this)
    this.scrollPosition = this.ScrollPosition.generateScrollPosition()
    this.setDirectionInfo()
  }
  scrollEventUpdate() {
    this.update()

    if(this.updateFunction) {
      this.updateFunction(this)
    } else {
      this.functions.forEach(([func, scrollPosition]) => func(
        scrollPosition ?
          Object.assign({}, this, { scrollPosition: scrollPosition.generateScrollPosition(this.stageSize) }) :
          this
      ))
    }

    requestAnimationFrame(this.scrollEventUpdate.bind(this))
  }
  update() {
    const innerSize = this.$stage[`inner${this.stageSizeName}`]
    this.stageSize = innerSize ? innerSize : this.$stage[`client${this.stageSizeName}`]
    this.contentSize = document.documentElement[`scroll${this.stageSizeName}`]
    this.scrollPosition = this.ScrollPosition.generateScrollPosition(this.stageSize)
  }

  setDirectionInfo() {
    this.directionPositionName = this.direction === 'y' ? 'Top' : 'Left'
    this.stageSizeName = this.direction === 'y' ? 'Height' : 'Width'
  }
}

export class ScrollPosition {
  constructor(opt = {}) {
    this.$stage = opt.$stage
    this.direction = opt.direction
    this.targetPercentage = opt.targetPercentage || 0.2
    this.eventTriggerPercentage = opt.eventTriggerPercentage || 0
    this.scrollName = this.$stage === window ? `page${opt.direction.toUpperCase()}Offset` : `scroll${opt.directionPositionName}`
    this.scrollPosition = this.getScrollPosition()
  }
  getScrollPosition() {
    return this.$stage[this.scrollName]
  }
  generateScrollPosition(stageSize = 0) {
    console.log(this.getScrollPosition(), (stageSize * this.eventTriggerPercentage))
    const scrollPosition = this.getScrollPosition() + (stageSize * this.eventTriggerPercentage)
    const offset = (scrollPosition - this.scrollPosition) * this.targetPercentage
    this.scrollPosition += Math.round(offset * 100) / 100

    return this.scrollPosition
  }
}

export const Status = new ScrollStatus()