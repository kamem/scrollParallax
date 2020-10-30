import {
  scrollPositionStringToNumber,
  _offset
} from '../../js/scrollParallax/util'

export default class Timing {
  constructor(
    $el,
    eventScrollPosition,
    eventTriggerPercentage,
    events
  ) {
    this.isOver = false
    this.$el = $el
    this.eventScrollElementPosition = eventScrollPosition
    this.eventTriggerPercentage = eventTriggerPercentage || 0.5
    this.events = events
  }
  getEventScrollElementPosition(status) {
    return this.eventScrollElementPosition ? scrollPositionStringToNumber(this.eventScrollElementPosition, status) : _offset(this.$el, status)
  }
  timingEvent(status) {
    this.eventScrollPlussWindowPerCentPosition = status.scrollPosition + status.stageSize * this.eventTriggerPercentage
    const isOver = this.eventScrollPlussWindowPerCentPosition >= this.getEventScrollElementPosition(status)

    if(isOver !== this.isOver) {
      this.isOver = isOver
      const eventSelect = this.events[isOver ? 0 : 1]
      return eventSelect({ target: this.$el, isOver })
    }
  }
}