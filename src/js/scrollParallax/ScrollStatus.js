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
		this.setDirectionInfo()
	}
	scrollEventUpdate() {
		this.updateFunction && this.updateFunction(this)
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

		const innerWidth = this.$stage[`inner${this.stageSizeName}`]
		this.stageSize = innerWidth ? innerWidth : document.documentElement[`client${this.stageSizeName}`]
		this.contentSize = document.documentElement[`scroll${this.stageSizeName}`]
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
		this.scrollPosition = this.getScrollPosition()
		this.targetPercentage = opt.targetPercentage || 0.2
	}
	getScrollPosition(direction = this.direction) {
		return this.$stage[`page${direction.toUpperCase()}Offset`]
	}
	generateScrollPosition() {
		const scrollPosition = this.getScrollPosition()
		const offset = (scrollPosition - this.scrollPosition) * this.targetPercentage
		this.scrollPosition += Math.round(offset * 100) / 100

		return this.scrollPosition
	}
}

export const Status = new ScrollStatus()