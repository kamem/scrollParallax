import {
  scrollPositionStringToNumber,
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
  getEventScrollElementPosition(directionPositionName) {
    return this.eventScrollElementPosition ? scrollPositionStringToNumber(this.eventScrollElementPosition) : this.$el.offset()[directionPositionName.toLocaleLowerCase()]
  }
  timingEvent({ stageSize, scrollPosition, directionPositionName }) {
    this.eventScrollPlussWindowPerCentPosition = scrollPosition + (stageSize * (this.timingLinePercent / 100))
    const isOver = this.eventScrollPlussWindowPerCentPosition >= this.getEventScrollElementPosition(directionPositionName)
    if(isOver !== this.isOver) {
      this.isOver = isOver
      const eventSeletct = this.events[isOver ? 0 : 1]
      return eventSeletct({ target: this.$el, isOver })
    }
  }
}