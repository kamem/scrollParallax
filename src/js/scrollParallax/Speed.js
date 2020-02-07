import {
  getStyleValues,
  generateStyleValue,
  generateStyleValueString,
  scrollPositionStringToNumber
} from './util'


export default class Speed {
  constructor($el, style, speed, min, max, contentScrollPosition, contentStyleValue) {
    this.$el = $el
    this.speeds = typeof speed === 'object' ? speed : [speed]
    this.mins = typeof min === 'object' ? min : [min]
    this.maxs = typeof max === 'object' ? max : [max]
    this.contentScrollPositionStyleValues = typeof contentStyleValue === 'object' ? contentStyleValue : [contentStyleValue]
    this.contentScrollPosition = contentScrollPosition
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
  generateValues(status, min, max, speed, styleValues, contentStyleValue) {
    return styleValues.map((value, j) => {
      let _speed = (typeof speed === 'object' ? speed[j] : speed)
      _speed = typeof _speed === 'number' ? _speed : 2
      let newValue = -parseFloat(-status.scrollPosition * _speed + scrollPositionStringToNumber(this.contentScrollPosition, status) * _speed) + value
     
      const _min = (typeof min === 'object' ? min[j] : min)
      const _max = (typeof min === 'object' ? max[j] : max)
      newValue = Math.max(newValue, typeof _min === 'number' ? _min : -99999)
      newValue = Math.min(newValue, typeof _max === 'number' ? _max : 99999)

      if(contentStyleValue.indexOf('rgb') >= 0) {
        newValue = Math.max(parseInt(newValue), 0)
      }
      return newValue
    })
  }
  getStyleValues(status) {
    return this.styles.reduce((result, style) => {
      return Object.assign(
        {},
        result,
        {
          [style.name]: generateStyleValueString(
            style.contentStyleValue,
            this.generateValues(
              status,
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