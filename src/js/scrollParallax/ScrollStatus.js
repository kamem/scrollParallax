export default class ScrollStatus {
	constructor() {
		this.$stage = global
		this.direction = 'y'
		this.functions = []
		this.debugMode = false
		this.setDirectionInfo()
	}
	setVal(ops) {
		this.$stage = ops.stage ? ops.stage : global
		this.direction = ops.direction || this.direction
		this.debugMode = ops.debugMode || this.debugMode
		this.setDirectionInfo()
	}
	scrollEventUpdate() {
		this.update()
		this.functions.forEach(func => func(this))
	}
	update() {
		this.scrollPosition = this.$stage[`page${this.direction.toUpperCase()}Offset`]
		const innerWidth = this.$stage[`inner${this.stageSizeName}`]
		this.stageSize = innerWidth ? innerWidth : document.documentElement[`client${this.stageSizeName}`]
		this.contentSize = document.documentElement[`scroll${this.stageSizeName}`]
	}
	setDirectionInfo() {
		this.directionPositionName = this.direction === 'y' ? 'Top' : 'Left'
		this.stageSizeName = this.direction === 'y' ? 'Height' : 'Width'
	}
}

export const Status = new ScrollStatus()