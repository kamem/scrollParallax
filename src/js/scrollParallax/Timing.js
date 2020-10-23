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
  getEventScrollElementPosition(endScrollPosition, directionPositionName) {
    return this.eventScrollElementPosition ? scrollPositionStringToNumber(this.eventScrollElementPosition) : _offset(this.$el, { endScrollPosition, directionPositionName })
  }
  timingEvent({ stageSize, scrollPosition, endScrollPosition, directionPositionName }) {
    this.eventScrollPlussWindowPerCentPosition = scrollPosition + stageSize * this.eventTriggerPercentage
    const isOver = this.eventScrollPlussWindowPerCentPosition >= this.getEventScrollElementPosition(endScrollPosition, directionPositionName)
    if(isOver !== this.isOver) {
      this.isOver = isOver
      const eventSelect = this.events[isOver ? 0 : 1]
      return eventSelect({ target: this.$el, isOver })
    }
  }
}