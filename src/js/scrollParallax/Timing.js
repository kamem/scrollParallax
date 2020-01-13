import {
  scrollPositionStringToNumber,
  _offset
} from '../../js/scrollParallax/util'

export default class Timing {
  constructor(
    $el,
    eventScrollPosition,
    timingLinePercent,
    events
  ) {
    this.isOver = false
    this.$el = $el
    this.eventScrollElementPosition = eventScrollPosition
    this.timingLinePercent = timingLinePercent || 50
    this.events = events
  }
  getEventScrollElementPosition(direction) {
    return this.eventScrollElementPosition ? scrollPositionStringToNumber(this.eventScrollElementPosition) : _offset(this.$el, {direction})
  }
  timingEvent({ stageSize, scrollPosition, direction }) {
    this.eventScrollPlussWindowPerCentPosition = scrollPosition + (stageSize * (this.timingLinePercent / 100))
    const isOver = this.eventScrollPlussWindowPerCentPosition >= this.getEventScrollElementPosition(direction)
    if(isOver !== this.isOver) {
      this.isOver = isOver
      const eventSelect = this.events[isOver ? 0 : 1]
      return eventSelect({ target: this.$el, isOver })
    }
  }
}