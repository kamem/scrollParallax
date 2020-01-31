import {Status, ScrollPosition} from './scrollParallax/ScrollStatus'
import Timing from './scrollParallax/Timing'
import Speed from './scrollParallax/Speed'
import Fit from './scrollParallax/Fit'

const setScrollEvents = (func, opt, status = Status)=> {
	status.functions.push([func, opt.targetPercentage && new ScrollPosition({...status, targetPercentage: opt.targetPercentage})])
}

const Parallax = {
	install(Vue, opt) {
    const $scrollStatus = Vue.observable({
			scrollPosition: Status.scrollPosition,
			values: {}
    })
		Status.setVal({...opt, updateFunction: (status) => {
			$scrollStatus.scrollPosition = Status.scrollPosition
			$scrollStatus.values = Object.assign(
				{},
				$scrollStatus.values,
				Status.functions.reduce((result, [current, scrollPosition]) => {

					return Object.assign(
						{},
						result,
						current(
							scrollPosition ? 
							Object.assign({}, Status, { scrollPosition: scrollPosition.generateScrollPosition() }) :
							Status)
					)
				}, {})
			)
		}})


		Vue.prototype.$scrollStatus = $scrollStatus

		Vue.directive('parallax-timing', {
			bind: (el, { value }, { data: { attrs: o = {} }}) => {
				const opt = value || o
				const timing = new Timing(
					opt.el || el,
					opt.eventScrollPosition,
					opt.center || 50,
					opt.toggle || [
						() => el.classList.add('on'),
						() => el.classList.remove('on'),
					]
				)

				setScrollEvents((status) => timing.timingEvent(status), opt)
			}
		})

		Vue.directive('parallax-speed', {
			bind: (el, { value }, { data: { attrs: o = {} }}) => {
				const opt = value || o
				setTimeout(() => {
					const element = opt.el || el
					const s = new Speed(
						element,
						opt.styles,
						opt.speed || 2,
						opt.min || -99999,
						opt.max || 99999,
						opt.contentScrollPosition || 0,
						opt.contentScrollPositionStyleValue
					)

					setScrollEvents((status) => {
						const styleValues = s.getStyleValues(status)
						for(const key in styleValues) {
							element.style[key] = styleValues[key]
						}
					}, opt)
				}, 0)
			}
		})

		Vue.directive('parallax-fit', {
			bind: (el, { value }, { data: { attrs: o = {} }}) => {
				setTimeout(() => {
					const fit = new Fit(el)
					const opt = value || o

					if(opt.length) {
						opt.forEach((motion) => fit.setMotion(motion))
					} else if(opt['end'] !== undefined) {
						fit.setMotion({
							start: opt['start'],
							end: opt['end'],
							fromStyle: opt['fromStyle'],
							toStyle:  opt['toStyle'],
							easing: opt['easing']
						})
					}
					for(let i = 1; opt['motion' + i + 'End'] !== undefined; i++) {
						const motion = 'motion' + i;
						fit.setMotion({
							start: opt[motion + 'Start'],
							end: opt[motion + 'End'],
							fromStyle: opt[motion + 'FromStyle'],
							toStyle:  opt[motion + 'ToStyle'],
							easing: opt[motion + 'Easing']
						})
					}
					fit.setFromStyle()
					fit.setStyleValues()
					fit.setStart()

					setScrollEvents((status) => {
						fit.setRangeMotions(status)
						fit.setDefaultStyles()
				
						const styleValues = fit.getStyleValues(status)
						for(const key in styleValues) {
							el.style[key] = styleValues[key]
						}
					}, opt)
				}, 0)
			}
		})

		Vue.mixin({
			methods: {
				parallaxTiming(opt) {
					const timing = new Timing(
						'',
						opt.eventScrollPosition,
						opt.center || 50,
						Object.prototype.toString.call(opt) === '[object Array]' ? opt : (opt.start ? [opt.start, opt.end] : opt.toggle)
					)

					setScrollEvents((status) => (status) => ({
						[opt.name]: timing.timingEvent(status)
					}), opt)
				},
				parallaxSpeed(opt) {
					const s = new Speed(
						'',
						opt.style,
						opt.speed || 2,
						opt.min || -99999,
						opt.max || 99999,
						opt.contentScrollPosition || 0,
						opt.contentScrollPositionStyleValue
					)

					setScrollEvents((status) => ({
						[opt.name]: s.getStyleValues(status)
					}), opt)
				},
				parallaxFit(name, opt) {
					const fit = new Fit(this)

					if(opt.length) {
						opt.forEach((motion) => fit.setMotion(motion))
					} else if(opt['end'] !== undefined) {
						fit.setMotion({
							start: opt['start'],
							end: opt['end'],
							fromStyle: opt['fromStyle'],
							toStyle:  opt['toStyle'],
							easing: opt['easing']
						})
					}
					for(let i = 1; opt['motion' + i + 'End'] !== undefined; i++) {
						const motion = 'motion' + i;
						fit.setMotion({
							start: opt[motion + 'Start'],
							end: opt[motion + 'End'],
							fromStyle: opt[motion + 'FromStyle'],
							toStyle:  opt[motion + 'ToStyle'],
							easing: opt[motion + 'Easing']
						})
					}
					fit.setFromStyle()
					fit.setStyleValues()
					fit.setStart()


					setScrollEvents((status) => {
						fit.setRangeMotions(status)
						fit.setDefaultStyles()
				
						return {
							[name]: fit.getStyleValues(status)
						}
					}, opt)
				}
			}
		})
	},
}

export default Parallax
