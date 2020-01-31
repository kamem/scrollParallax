import {
  getStyleValues,
  generateStyleValue,
  generateStyleValueString,
  scrollPositionStringToNumber,
  easing,
} from './util'

export default class Fit {
  constructor($el) {
    this.$el = $el
    this.styleValues = {}
    this.motions = []
    this.rangeMotions = []
  }
  setMotion(motion) {
    const fromStyle = this.setStyleValue(motion.fromStyle)
    const toStyle = this.setStyleValue(motion.toStyle)
    this.motions.push(Object.assign({}, motion, {
      easing: motion.easing || 'linear',
      fromStyle,
      toStyle,
    }))
  }

  setStyleValues() {
    this.motions = this.motions.map((motion) => Object.assign({}, motion, ({
      fromStyleValues: this.generateStyleValues(motion.fromStyle),
      toStyleValues: this.generateStyleValues(motion.toStyle)
    })))
  }

  generateStyleValues(fromStyle) {
    let styles = {}
    for (let style in fromStyle) {
      styles[style] = getStyleValues(fromStyle[style])
    }
    return styles
  }

  setStyleValue(fromStyle) {
    let styles = {}
    for (let style in fromStyle) {
      styles[style] = generateStyleValue(fromStyle[style])
    }
    return styles
  }

  setRangeMotions({ scrollPosition }) {
    const range = []

    this.motions.forEach((motion) => {
      const start = scrollPositionStringToNumber(motion.start)
      if (start <= scrollPosition) range.push(motion)
    })

    this.rangeMotions = range
  }

  setDefaultStyles() {
    let defaultStyles = {}
    this.motions.forEach(({ fromStyle }) => {
      for (let style in fromStyle) {
        if (defaultStyles[style] === undefined) defaultStyles[style] = fromStyle[style]
      }
    })
    this.styleValues = defaultStyles
  }

  setFromStyle() {
    this.motions.forEach(({ fromStyle, toStyle }, i) => {
      for (let style in toStyle) {
        if (fromStyle === undefined) fromStyle = {}
        if (fromStyle[style] === undefined) {
          fromStyle[style] = this.getLastToStyle(style, i)
        }
      }
    })
  }
  getLastToStyle(style, i) {
    let fromStyle = ''
    const k = Math.max(i - 1, 0)
    for (let j = k; j >= 0; j--) {
      const motion = this.motions[j]
      if (motion.fromStyle[style] !== undefined) {
        fromStyle = motion.toStyle[style]
        break
      }
    }
    if (fromStyle === '') fromStyle = document.defaultView.getComputedStyle(this.$el, null)[style]

    return fromStyle
  }


  setStart() {
    this.motions.forEach((motion, i) => {
      if (motion.start === undefined) {
        motion.start = this.getLastStart(i) || 0
      }
    })
  }
  getLastStart(i) {
    let start = ''
    const k = Math.max(i - 1, 0)
    for (let j = k; j >= 0; j--) {
      const motion = this.motions[j]
      if (motion.start !== undefined) {
        start = motion.end
        break
      }
    }

    return start
  }

  generateScrollStyleValues(style, fromtStyle, toStyle, easingName, scrollPercent) {
    const abs = Math.abs(fromtStyle - toStyle)
    const fixAbs = fromtStyle < toStyle ? abs : -abs
    let styleValue = easing[easingName](scrollPercent, fromtStyle, fixAbs, 1)
    if (style.indexOf('rgb') >= 0) {
      styleValue = styleValue >= 1 ? parseInt(styleValue) : styleValue < 0 ? 0 : styleValue;
    }
    return styleValue
  }

  getStyleValues({ scrollPosition }) {
    this.rangeMotions.forEach((motion, j) => {
      const start = scrollPositionStringToNumber(motion.start)
      const end = scrollPositionStringToNumber(motion.end)
      const isInRange = start < scrollPosition && scrollPosition < end
      const range = end - start

      const scrollPercent = isInRange ? (scrollPosition - start) / range :
        (scrollPosition > start) ? 1 :
          (scrollPosition < end) ? 0 : ''

      for (let style in motion.fromStyle) {
        const fromStyleValue = motion.fromStyle[style]
        const fromStyleValues = motion.fromStyleValues[style]
        const toStyleValues = motion.toStyleValues[style]

        const values = []
        for (let i = 0; i < fromStyleValues.length; i++) {
          values[i] = this.generateScrollStyleValues(
            fromStyleValue,
            fromStyleValues[i],
            toStyleValues[i],
            motion.easing,
            scrollPercent
          )
        }

        this.styleValues[style] = generateStyleValueString(fromStyleValue, values)
      }
    })

    return this.styleValues
  }
}