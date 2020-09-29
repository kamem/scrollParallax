import { reactive } from 'vue'
import ScrollStatus, { Status, ScrollPosition } from './scrollParallax/ScrollStatus'
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

const generateScrollStatusValues = (Vue, opt = {}, $scrollStatus) => {
  if(opt.name) {
    const scrollObj = {
      scrollPosition: Status.scrollPosition,
      contentSize: Status.contentSize,
      values: {}
    }
    $scrollStatus[opt.name] = Vue.observable ? Vue.observable(scrollObj) : reactive(scrollObj)
  }

  const scrollStatus = opt.name ? $scrollStatus[opt.name] : $scrollStatus
  return {
    ...opt, updateFunction: (status) => {
      scrollStatus.scrollPosition = status.scrollPosition
      scrollStatus.contentSize = status.contentSize
      scrollStatus.values = Object.assign(
        {},
        scrollStatus.values,
        status.functions.reduce((result, [current, scrollPosition]) => {
          return Object.assign(
            {},
            result,
            current(
              scrollPosition ?
                Object.assign({}, status, { scrollPosition: scrollPosition.generateScrollPosition() }) :
                status)
          )
        }, {})
      )
    }
  }
}

const Parallax = {
  install(Vue, opt) {
    const isVue3 = Vue.version.startsWith('3')
    const prototype = isVue3 ? Vue.config.globalProperties : Vue.prototype
    const beforeMount = isVue3 ? 'beforeMount' : 'bind'

    const scrollObj = {
      scrollPosition: Status.scrollPosition,
      contentSize: Status.contentSize,
      values: {}
    }
    const $scrollStatus = Vue.observable ? Vue.observable(scrollObj) : reactive(scrollObj)

    Status.setVal(generateScrollStatusValues(Vue, opt, $scrollStatus, name))

    prototype.$scrollStatus = $scrollStatus

    Vue.directive('parallax-timing', {
      [beforeMount]: (el, { value }, d) => {
        const o = isVue3 ? d.props : d.data.attrs
        const opt = value || o
        const c = opt.class || 'on'
        const timing = new Timing(
          opt.target || el,
          opt.eventScrollPosition,
          opt.eventTriggerPercentage,
          opt.toggle || [
            () => el.classList.add(c),
            () => el.classList.remove(c),
          ]
        )

        setScrollEvents((status) => timing.timingEvent(status), opt, opt.status || o.status || Status)
      }
    })

    Vue.directive('parallax-speed', {
      [beforeMount]: (el, { value }, d) => {
        const o = isVue3 ? d.props : d.data.attrs
        const opt = value || o
        setTimeout(() => {
          const element = opt.el || el
          const s = new Speed(
            element,
            opt.styles,
            opt.speed,
            opt.min,
            opt.max,
            opt.contentScrollPosition === 0 || opt.contentScrollPosition ? opt.contentScrollPosition : element,
            opt.contentScrollPositionStyleValue
          )

          setScrollEvents((status) => {
            const styleValues = s.getStyleValues(status)
            for (const key in styleValues) {
              element.style[key] = styleValues[key]
            }
          }, opt, opt.status || o.status || Status)
        }, 0)
      }
    })

    Vue.directive('parallax-fit', {
      [beforeMount]: (el, { value }, d) => {
        const o = isVue3 ? d.props : d.data.attrs
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

            const styleValues = fit.getStyleValues(status)
            for (const key in styleValues) {
              el.style[key] = styleValues[key]
            }
          }, opt, opt.status || o.status || Status)
        }, 0)
      }
    })

    Vue.mixin({
      methods: {
        createStatus(opt) {
          const status = new ScrollStatus()
          status.setVal(opt.name ? generateScrollStatusValues(Vue, opt, this.$scrollStatus) : opt)
          return status
        },
        parallaxTiming(opt) {
          const timing = new Timing(
            '',
            opt.eventScrollPosition,
            opt.eventTriggerPercentage,
            Object.prototype.toString.call(opt) === '[object Array]' ? opt : (opt.start ? [opt.start, opt.end] : opt.toggle)
          )

          setScrollEvents((status) => ({
            [opt.name]: timing.timingEvent(status)
          }), opt, opt.status || Status)
        },
        parallaxSpeed(opt) {
          const s = new Speed(
            '',
            opt.style,
            opt.speed,
            opt.min,
            opt.max,
            opt.contentScrollPosition || 0,
            opt.contentScrollPositionStyleValue
          )

          setScrollEvents((status) => ({
            [opt.name]: s.getStyleValues(status)
          }), opt, opt.status || Status)
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

            return {
              [name]: fit.getStyleValues(status)
            }
          }, opt, opt.status || Status)
        }
      }
    })
  },
}

export default Parallax
