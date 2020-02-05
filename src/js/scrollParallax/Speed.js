import {
  getStyleValues,
  getEventTriggerPosition,
  generateStyleValue,
  generateStyleValueString,
  scrollPositionStringToNumber
} from './util'


export default class Speed {
  constructor($el, style, speed, min, max, contentScrollPosition, contentStyleValue, eventTriggerPercentage) {
    this.$el = $el
    this.speeds = typeof speed === 'object' ? speed : [speed]
    this.mins = typeof min === 'object' ? min : [min]
    this.maxs = typeof max === 'object' ? max : [max]
    this.contentScrollPositionStyleValues = typeof contentStyleValue === 'object' ? contentStyleValue : [contentStyleValue]
    this.contentScrollPosition = contentScrollPosition
    this.eventTriggerPercentage = eventTriggerPercentage || 0
    this.styles = this.generateStyles(typeof style === 'object' ? style : [style])
  }
  generateStyles(styles) {
    return styles.map((name, i) => {
      const contentScrollPositionStyleValues = this.contentScrollPositionStyleValues[i] || document.defaultView.getComputedStyle(this.$el, null)[name]
      const styleValue = generateStyleValue(contentScrollPositionStyleValues)
      return {
        name,
        speed: this.speeds[i] || this.speeds[0],
        min: this.mins[i] || this.mins[0],
        max: this.maxs[i] || this.maxs[0],
        contentStyleValue: styleValue,
        styleValues: getStyleValues(styleValue)
      }
    })
  }
  generateValues(scrollPosition, min, max, speed, styleValues, contentStyleValue) {
    return styleValues.map((value, j) => {
      const sp = speed === 'object' ? speed[j] : speed
      let newValue = -parseFloat(-scrollPosition * sp + scrollPositionStringToNumber(this.contentScrollPosition, this.eventTriggerPercentage) * sp) + value
      newValue = Math.min(newValue, max === 'object' ? max[j] : max)
      newValue = Math.max(newValue, min === 'object' ? min[j] : min)

      if(contentStyleValue.indexOf('rgb') >= 0) {
        newValue = Math.max(parseInt(newValue), 0)
      }
      return newValue
    })
  }
  getStyleValues({ scrollPosition, stageSize }) {
    return this.styles.reduce((result, style) => {
      return Object.assign(
        {},
        result,
        {
          [style.name]: generateStyleValueString(
            style.contentStyleValue,
            this.generateValues(
              getEventTriggerPosition(scrollPosition, stageSize, this.eventTriggerPercentage),
              style.min,
              style.max,
              style.speed,
              style.styleValues,
              style.contentStyleValue
            )
          )
        }
      )
    }, {})
  }
}