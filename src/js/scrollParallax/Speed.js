import { 
  getStyleValues,
  generateStyleValue,
  generateStyleValueString,
  scrollPositionStringToNumber
} from './util'


export default class Speed {
  constructor($el, speed, min, max, contentScrollPosition, contentStyleValue) {
      this.$el = $el
			this.speed = speed
			this.min = min
			this.max = max
      this.contentScrollPosition = contentScrollPosition
      
      const styleValue = generateStyleValue(contentStyleValue)
      this.contentStyleValue = styleValue
      this.styleValues = getStyleValues(styleValue)
  }
  getValue(str, j) {
    return typeof this[str] === 'object' ? this[str][j] : this[str]
  }
  generateValues(scrollPosition) {
    return this.styleValues.map((value, j) => {
      const min = this.getValue('min', j)
      const max = this.getValue('max', j)
      const speed = this.getValue('speed', j)
      const contentScrollPosition = scrollPositionStringToNumber(this.contentScrollPosition)

      let newValue = -parseFloat(-scrollPosition * speed + contentScrollPosition * speed) + value
      newValue = Math.min(newValue, max)
      newValue = Math.max(newValue, min)

      if(this.contentStyleValue.indexOf('rgb') >= 0) {
        newValue = Math.max(parseInt(newValue), 0)
      }
      return newValue
    })
  }
  generateStyleValue({scrollPosition}) {
    return generateStyleValueString(
      this.contentStyleValue,
      this.generateValues(scrollPosition)
    )
  }
}