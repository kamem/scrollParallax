import Timing from '../../js/scrollParallax/Timing'

const timing = new Timing(
  {},
  500,
  0.5,
  [(e) => [e, 1], (e) => [e, 2]]
)
describe('Status', () => {
  it('timingEvent実行時任意のscrollPositionを超えた場合に関数1番目を実行する', () => {
    expect(timing.timingEvent({ endScrollPosition: 0, stageSize: 500, scrollPosition: 0, contentSize: 1000, directionPositionName: 'Top' })).toEqual(undefined)
    expect(timing.timingEvent({ endScrollPosition: 249, stageSize: 500, scrollPosition: 249, contentSize: 1000, directionPositionName: 'Top' })).toEqual(undefined)
    expect(timing.timingEvent({ endScrollPosition: 250, stageSize: 500, scrollPosition: 250, contentSize: 1000, directionPositionName: 'Top' })).toEqual([{ target: {}, isOver: true}, 1])
  })
  it('一度関数1が実行されたあと、再度scrollPositionが小さくなった場合関数2を実行する', () => {
    expect(timing.timingEvent({ endScrollPosition: 251, stageSize: 500, scrollPosition: 251, contentSize: 1000, directionPositionName: 'Top' })).toEqual(undefined)
    expect(timing.timingEvent({ endScrollPosition: 250, stageSize: 500, scrollPosition: 250, contentSize: 1000, directionPositionName: 'Top' })).toEqual(undefined)
    expect(timing.timingEvent({ endScrollPosition: 0, stageSize: 500, scrollPosition: 0, contentSize: 1000, directionPositionName: 'Top' })).toEqual([{ target: {}, isOver: false}, 2])
  })
})