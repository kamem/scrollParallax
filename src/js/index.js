import {Status} from './scrollParallax/ScrollStatus'
import Timing from './scrollParallax/Timing'
import Speed from './scrollParallax/Speed'
import Fit from './scrollParallax/Fit'

/* all parallax default options */
$.parallax = (ops) => {
	Status.setVal(ops)
	if(Status.debugMode) $('body').append('<p class="parallax-debug" style="border: 1px solid red;position: absolute;' + (Status.direction === 'y' ? 'width' : 'height') + ': 100%;' + (Status.direction === 'y' ? 'left' : 'top') + ': 0;' + '"></p>')
}

/* timing default options */
$.parallaxTiming = function(ops) {
	this.timingLinePercent = ops.timingLinePercent
}

$.fn.parallaxTiming = function(ops) {
	const positionName = Status.directionPositionName.toLocaleLowerCase()
	const timing = new Timing(
		this,
		ops.eventScrollPosition,
		ops.timingLinePercent || $.timingLinePercent,
		Object.prototype.toString.call(ops) === '[object Array]' ? ops : (ops.start ? [ops.start, ops.end] : ops.toggle)
	)

	Status.functions.push((status) => {
		timing.timingEvent(status)
		if(Status.debugMode){
			$('body > .parallax-debug').css(
				positionName,
				timing.eventScrollPlussWindowPerCentPosition
			)
		}
  })
  
  return this
}

/* speed */
$.fn.parallaxSpeed = function({
	speed = 2,
	min = -99999,
	max = 99999,
	contentScrollPositionStyleValue,
	contentScrollPosition = 0,
	style = 'top'
}) {
	const $el = this

	const styles = typeof style === 'object' ? style : [style]
	const speeds = typeof speed === 'object' ? speed : [speed]
	const mins = typeof min === 'object' ? min : [min]
	const maxs = typeof max === 'object' ? max : [max]
	const contentScrollPositionStyleValues = typeof contentScrollPositionStyleValue === 'object' ? contentScrollPositionStyleValue : [contentScrollPositionStyleValue]

  const scrollStyles = styles.map((name, i) => ({
    name,
    scrollSpeed: new Speed(
			$el,
      speeds[i] || speed,
      mins[i] || min,
      maxs[i] || max,
      contentScrollPosition,
      contentScrollPositionStyleValues[i] || String($el.css(name)) || String($el.css(style))
    )
  }))

	Status.functions.push((status) => {
		scrollStyles.forEach(({ name, scrollSpeed }) => {
			$el.css(name, scrollSpeed.generateStyleValue(status))
		})
  })
  
  return this
}

/* fit */
$.fn.parallaxFit = function(ops) {
	const fit = new Fit(this)

	if(ops.length) {
		ops.forEach((motion) => fit.setMotion(motion))
	} else if(ops['end'] !== undefined) {
		fit.setMotion({
			start: ops['start'],
			end: ops['end'],
			fromStyle: ops['fromStyle'],
			toStyle:  ops['toStyle'],
			easing: ops['easing']
		})
	}
	for(let i = 1; ops['motion' + i + 'End'] !== undefined; i++) {
		const motion = 'motion' + i;
		fit.setMotion({
			start: ops[motion + 'Start'],
			end: ops[motion + 'End'],
			fromStyle: ops[motion + 'FromStyle'],
			toStyle:  ops[motion + 'ToStyle'],
			easing: ops[motion + 'Easing']
		})
	}
	fit.setFromStyle()
	fit.setStyleValues()
	fit.setStart()

	Status.functions.push((status) => {
			fit.setRangeMotions(status)
			fit.setDefaultStyles()

			fit.$el.css(fit.getStyleValues(status))
	});
  
  return this
}

/* event */
$(Status.$stage).on('scroll resize load', () => {
	Status.update()
	Status.functions.forEach(func => func(Status))
})

const scrollStop = () => $(Status.$stage).queue([]).stop()
global.addEventListener('DOMMouseScroll', scrollStop, false)
global.onmousewheel = document.onmousewheel = scrollStop
