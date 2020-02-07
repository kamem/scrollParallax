import { Status, ScrollPosition } from './scrollParallax/ScrollStatus'
import Timing from './scrollParallax/Timing'
import Speed from './scrollParallax/Speed'
import Fit from './scrollParallax/Fit'

/* all parallax default options */
$.parallax = (opt) => {
  Status.setVal(opt)
  if(Status.debugMode) $('body').append('<p class="parallax-debug" style="border: 1px solid red;position: absolute;' + (Status.direction === 'y' ? 'width' : 'height') + ': 100%;' + (Status.direction === 'y' ? 'left' : 'top') + ': 0;' + '"></p>')
}

/* timing default options */
$.parallaxTiming = function (opt) {
  this.eventTriggerPercentage = opt.eventTriggerPercentage
}

const setScrollEvents = (func, opt, status = Status) => {
  status.functions.push([func, opt.targetPercentage && new ScrollPosition({ ...status, targetPercentage: opt.targetPercentage })])
}

$.fn.parallaxTiming = function (opt = {}) {
  const positionName = Status.directionPositionName.toLocaleLowerCase()
  const timingEvent = Object.prototype.toString.call(opt) === '[object Array]' ? opt : (opt.start ? [opt.start, opt.end] : opt.toggle)
  const c = opt.class || 'on'
  const timing = new Timing(
    opt.target || this[0],
    opt.eventScrollPosition,
    opt.eventTriggerPercentage || $.eventTriggerPercentage,
    timingEvent || [
      () => $(this).addClass(c),
      () => $(this).removeClass(c),
    ]
  )

  setScrollEvents((status) => {
    timing.timingEvent(status)
    if(Status.debugMode) {
      $('body > .parallax-debug').css(
        positionName,
        timing.eventScrollPlussWindowPerCentPosition
      )
    }
  }, opt)

  return this
}

/* speed */
$.fn.parallaxSpeed = function (opt) {
  const $el = this
  const s = new Speed(
    $el[0],
    opt.style || opt.styles,
    opt.speed,
    opt.min,
    opt.max,
    opt.contentScrollPosition || 0,
    opt.contentScrollPositionStyleValue,
  )

  setScrollEvents((status) => {
    $el.css(s.getStyleValues(status))
  }, opt)

  return this
}

/* fit */
$.fn.parallaxFit = function (opt) {
  const $el = this
  const fit = new Fit($el[0])

  if(opt.length) {
    opt.forEach((motion) => fit.setMotion(motion))
  } else if(opt['end'] !== undefined) {
    fit.setMotion({
      start: opt['start'],
      end: opt['end'],
      fromStyle: opt['fromStyle'],
      toStyle: opt['toStyle'],
      easing: opt['easing']
    })
  }
  for (let i = 1; opt['motion' + i + 'End'] !== undefined; i++) {
    const motion = 'motion' + i;
    fit.setMotion({
      start: opt[motion + 'Start'],
      end: opt[motion + 'End'],
      fromStyle: opt[motion + 'FromStyle'],
      toStyle: opt[motion + 'ToStyle'],
      easing: opt[motion + 'Easing']
    })
  }
  fit.setFromStyle()
  fit.setStyleValues()
  fit.setStart()

  setScrollEvents((status) => {
    fit.setRangeMotions(status)
    fit.setDefaultStyles()

    $el.css(fit.getStyleValues(status))
  }, opt)

  return this
}
