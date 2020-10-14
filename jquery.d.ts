
type Toggle = [Function, Function]
type ScrollPositionType = string | number | [String | HTMLElement, number]

interface TimingEvent {
  start: Function,
  end: Function
}

interface ParallaxTimingOptions {
  target?: string | HTMLElement,
  toggle?: Toggle,
  eventScrollPosition?: ScrollPositionType,
  eventTriggerPercentage?: number,
  class?: string
}
interface ParallaxParallaxSpeed {
  style?: string | string[],
  speed?: number | number[],
  min?: number | number[],
  max?: number | number[],
  targetPercentage?: number,
  contentScrollPosition?: ScrollPositionType,
  contentScrollPositionStyleValue?: number | number[] | string | string[],
}
type Styles = {[styleName: string]: string | number}
interface Motion {
  start?: ScrollPositionType,
  end?: ScrollPositionType,
  fromStyle?: Styles,
  toStyle: Styles,
  easing?: string | Function
}

interface JQuery {
  parallaxTiming(opt?: TimingEvent | Toggle | ParallaxTimingOptions): this;
  parallaxSpeed(opt?: ParallaxParallaxSpeed): this;
  parallaxFit(opt: Motion[] | Motion): this;
}

