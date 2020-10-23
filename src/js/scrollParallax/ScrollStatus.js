const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

export default class ScrollStatus {
  constructor() {
    this.$stage = global
    this.direction = 'y'
    this.functions = []
    this.debugMode = false
    this.targetPercentage = 0.2
    this.setDirectionInfo()
    this.ScrollPosition = new ScrollPosition(this)
    this.scrollPosition = this.ScrollPosition.generateScrollPosition()
    this.endScrollPosition = this.ScrollPosition.endScrollPosition
    this.scrollEventUpdate()
  }
  setVal(opt = {}) {
    this.$stage = opt.stage ? opt.stage : global
    this.direction = opt.direction || this.direction
    this.debugMode = opt.debugMode || this.debugMode
    this.targetPercentage = opt.targetPercentage || 0.2
    this.updateFunction = opt.updateFunction
    this.ScrollPosition = new ScrollPosition(this)
    this.scrollPosition = this.ScrollPosition.generateScrollPosition()
    this.endScrollPosition = this.ScrollPosition.endScrollPosition
    this.setDirectionInfo()
    return this
  }
  scrollEventUpdate() {
    this.update()

    if(this.updateFunction) {
      this.updateFunction(this)
    } else {
      this.functions.forEach(([func, scrollPosition]) => func(
        scrollPosition ?
          Object.assign({}, this, { scrollPosition: scrollPosition.generateScrollPosition() }) :
          this
      ))
    }

    requestAnimationFrame(this.scrollEventUpdate.bind(this))
  }
  update() {
    this.scrollPosition = this.ScrollPosition.generateScrollPosition()
    this.endScrollPosition = this.ScrollPosition.endScrollPosition

    this.stageSize = this.$stage[`inner${this.stageSizeName}`] || this.$stage[`client${this.stageSizeName}`]
    this.contentSize = this.$stage[`scroll${this.stageSizeName}`] || document.documentElement[`scroll${this.stageSizeName}`]
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
    this.scrollName = this.$stage === window ? `page${opt.direction.toUpperCase()}Offset` : `scroll${opt.directionPositionName}`
    const scrollPosition = this.getScrollPosition()
    this.scrollPosition = scrollPosition
    this.endScrollPosition = scrollPosition
  }
  getScrollPosition() {
    return this.$stage[this.scrollName]
  }
  generateScrollPosition() {
    const scrollPosition = this.getScrollPosition()
    const offset = (scrollPosition - this.scrollPosition) * this.targetPercentage
    this.scrollPosition += offset
    this.endScrollPosition = scrollPosition
    return Math.round(this.scrollPosition * 100) / 100
  }
}

export const Status = new ScrollStatus()