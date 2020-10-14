interface ScrollParallaxEffectOptions {
  stage?: Window | HTMLElement,
  direction?: Direction,
  debugMode?: boolean,
  targetPercentage?: number,
  updateFunction?: Function
}

export enum Direction {
  y = 'y',
  x = 'x'
}

export class ScrollParallaxEffectScrollStatus {
  constructor()
  setVal(opt?: ScrollParallaxEffectOptions): this;
  scrollEventUpdate(): void;
  update(): void;
  setDirectionInfo(): void;
}

export declare const Status: ScrollParallaxEffectScrollStatus;

export declare const updateStatus: (opt: ScrollParallaxEffectOptions) => ScrollParallaxEffectScrollStatus;
export declare const status: ScrollParallaxEffectScrollStatus;
export declare const ScrollStatus: ScrollParallaxEffectScrollStatus;

type Toggle = [Function, Function]
type ScrollPositionType = string | number | ScrollPositionString | [String | HTMLElement, number]

export enum ScrollPositionString {
  lastScrollPosition = 'lastScrollPosition',
  last = 'last'
}

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

export declare class ParallaxTiming {
  constructor(
    element: string | HTMLElement,
    opt?: TimingEvent | Toggle | ParallaxTimingOptions
  )
}

interface styleValueInfo {
  name: string,
  speed: number,
  min: number,
  max: number,
  contentStyleValue: number,
  styleValues: object
}

export default class Speed {
  constructor(
    $el: string | HTMLElement,
    style: string | string[],
    speed: number | number[],
    min: number | number[],
    max: number | number[],
    contentScrollPosition: ScrollPositionType,
    contentStyleValue: number | number[],
  );
  generateStyles(styles: string[]): styleValueInfo;
  generateValues(
    status: ScrollParallaxEffectScrollStatus,
    min: number | number[],
    max: number | number[],
    speed: number | number[],
    styleValues: object,
    contentStyleValue: string | number
  ): any;
  getStyleValues(status: ScrollParallaxEffectScrollStatus): object;
}

export declare class ParallaxSpeed {
  constructor(
    element: string | HTMLElement,
    opt?: ParallaxParallaxSpeed
  )
  getValues(): Speed;
}



type Styles = {[styleName: string]: string | number}
interface Motion {
  start?: ScrollPositionType,
  end?: ScrollPositionType,
  fromStyle?: Styles,
  toStyle: Styles,
  easing?: string | Function
}

export class Fit {
  constructor($el: string | HTMLElement);
  setMotion(motion: Motion): void;
  setStyleValues(): void;
  generateStyleValues(fromStyle: object): {};
  setStyleValue(fromStyle: object): {};
  setRangeMotions(status?: ScrollParallaxEffectScrollStatus): void;
  setDefaultStyles(): void;
  setFromStyle(): void;
  getLastToStyle(style: string, i: number): string;
  setStart(): void;
  getLastStart(i: number): string;
  generateScrollStyleValues(
    style: string,
    fromtStyle: number,
    toStyle: number,
    easingName: string | Function,
    scrollPercent: number
  ): number;
  getStyleValues(status?: ScrollParallaxEffectScrollStatus): object;
}

export declare class ParallaxFit {
  constructor(
    element: string | HTMLElement,
    opt: Motion[] | Motion
  )
  getValues(): Fit;
}
 