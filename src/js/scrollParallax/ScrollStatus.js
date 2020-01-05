class ScrollStatus {
	constructor() {
		this.$stage = $(global)
		this.direction = 'y'
		this.functions = []
		this.debugMode = false
		this.setDirectionInfo()
	}
	setVal(ops) {
		this.$stage = ops.stage ? ops.stage : $(global)
		this.direction = ops.direction || this.direction
		this.debugMode = ops.debugMode || this.debugMode
		this.setDirectionInfo()
	}
	update() {
		this.scrollPosition = this.$stage[this.scrollName]()
		const innerWidth = global['inner' + this.stageSizeName]
		this.stageSize = innerWidth ? innerWidth : document.documentElement['client' + this.stageSizeName]
		this.contentSize = $(document)[this.stageSizeName.toLowerCase()]()
	}
	setDirectionInfo() {
		this.directionPositionName = this.direction === 'y' ? 'Top' : 'Left'
		this.scrollName = 'scroll' + this.directionPositionName
		this.stageSizeName = this.direction === 'y' ? 'Height' : 'Width'
	}
}

export const Status = new ScrollStatus()