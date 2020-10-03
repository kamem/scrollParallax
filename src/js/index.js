import _ScrollStatus, { Status, ScrollPosition } from './scrollParallax/ScrollStatus'
import Timing from './scrollParallax/Timing'
import Speed from './scrollParallax/Speed'
import Fit from './scrollParallax/Fit'

const setScrollEvents = (func, opt, status = Status) => {
  status.functions.push([
    func,
    opt.targetPercentage !== status.targetPercentage ? new ScrollPosition({ ...status, targetPercentage: opt.targetPercentage }) :
    status !== Status && status.ScrollPosition
  ])
}

export const updateStatus = (opt) => Status.setVal(opt)
export const status = Status
export const ScrollStatus = _ScrollStatus

const getElement = (element) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element
  if(!el) throw `undefined element "${element}"`
  return el 
}

export class  ParallaxTiming {
  constructor(element, opt = {}) {
    const el = getElement(element)
    const timingEvent = Object.prototype.toString.call(opt) === '[object Array]' ? opt : (opt.start ? [opt.start, opt.end] : opt.toggle)
    const c = opt.class || 'on'

    const timing = new Timing(
      opt.target || el,
      opt.eventScrollPosition,
      opt.eventTriggerPercentage,
      timingEvent || [
        () => el.classList.add(c),
        () => el.classList.remove(c),
      ]
    )

    setScrollEvents((status) => {
      timing.timingEvent(status)
    }, opt, opt.status)
  }
}


export class ParallaxSpeed {
  constructor(element, opt = {}) {
    const el = getElement(element)
    const s = new Speed(
      el,
      opt.style || opt.styles,
      opt.speed,
      opt.min,
      opt.max,
      opt.contentScrollPosition === 0 || opt.contentScrollPosition ? opt.contentScrollPosition : el,
      opt.contentScrollPositionStyleValue,
    )
    this.speed = s

    setScrollEvents((status) => {
      Object.assign(el.style, s.getStyleValues(status));
    }, opt, opt.status)
  }

  getValues() {
    return this.speed
  }
}

export class ParallaxFit {
  constructor(element, opt) {
    const el = getElement(element)
    const fit = new Fit(el)
    this.fit = fit

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

      Object.assign(el.style, fit.getStyleValues(status));
    }, opt, opt.status)
  }

  getValues() {
    return this.fit
  }
}


window.Parallax = {
  Timing: ParallaxTiming,
  Speed: ParallaxSpeed,
  Fit: ParallaxFit,
  updateStatus,
  Status,
  ScrollStatus
}