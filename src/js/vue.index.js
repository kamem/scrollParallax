import {Status} from './scrollParallax/ScrollStatus'
import Timing from './scrollParallax/Timing'
import Speed from './scrollParallax/Speed'
import Fit from './scrollParallax/Fit'

const Parallax = {
	install(Vue, ops) {
		Status.setVal(ops)
    const $scrollStatus = Vue.observable({
			scrollPosition: Status.scrollPosition,
			values: {}
    })
    const pEvent = () => {
      $scrollStatus.scrollPosition = Status.scrollPosition
			Status.update()
			$scrollStatus.values = Object.assign(
				{},
				$scrollStatus.values,
				Status.functions.reduce((result, current) => {
					return Object.assign(
						{},
						result,
						current(Status)
					)
				}, {})
			)
		}

		Status.$stage.addEventListener('scroll', pEvent, false)
		Status.$stage.addEventListener('resize', pEvent, false)
		Status.$stage.addEventListener('load', pEvent, false)

		Vue.prototype.$scrollStatus = $scrollStatus

		Vue.directive('parallax-timing', {
			bind: (el, { value }, { data: { attrs: o = {} }}) => {
				const ops = value || o
				const timing = new Timing(
					ops.el || el,
					ops.eventScrollPosition,
					ops.center || 50,
					ops.toggle || [
						() => el.classList.add('on'),
						() => el.classList.remove('on'),
					]
				)

				Status.functions.push((status) => timing.timingEvent(status))
			}
		})

		Vue.directive('parallax-speed', {
			bind: (el, { value }, { data: { attrs: o = {} }}) => {
				const ops = value || o
				setTimeout(() => {
					const element = ops.el || el
					const s = new Speed(
						element,
						ops.styles,
						ops.speed || 2,
						ops.min || -99999,
						ops.max || 99999,
						ops.contentScrollPosition || 0,
						ops.contentScrollPositionStyleValue
					)
					Status.functions.push((status) => {
						const styleValues = s.getStyleValues(status)
						for(const key in styleValues) {
							element.style[key] = styleValues[key]
						}
					})
				}, 0)
			}
		})

		Vue.directive('parallax-fit', {
			bind: (el, { value }, { data: { attrs: o = {} }}) => {
				setTimeout(() => {
					const fit = new Fit(el)
					const ops = value || o

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
				
						const styleValues = fit.getStyleValues(status)
						for(const key in styleValues) {
							el.style[key] = styleValues[key]
						}
					})
				}, 0)
			}
		})

		Vue.mixin({
			methods: {
				parallaxTiming(ops) {
					const timing = new Timing(
						'',
						ops.eventScrollPosition,
						ops.center || 50,
						Object.prototype.toString.call(ops) === '[object Array]' ? ops : (ops.start ? [ops.start, ops.end] : ops.toggle)
					)
					Status.functions.push((status) => ({
						[ops.name]: timing.timingEvent(status)
					}))
				},
				parallaxSpeed(ops) {
					const s = new Speed(
						'',
						ops.style,
						ops.speed || 2,
						ops.min || -99999,
						ops.max || 99999,
						ops.contentScrollPosition || 0,
						ops.contentScrollPositionStyleValue
					)
					Status.functions.push((status) => ({
						[ops.name]: s.getStyleValues(status)
					}))
				},
				parallaxFit(name, ops) {
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
				
						return {
							[name]: fit.getStyleValues(status)
						}
					})
				}
			}
		})
	},
}

export default Parallax
