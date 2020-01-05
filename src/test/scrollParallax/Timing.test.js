import Timing from '../../js/scrollParallax/Timing'

const timing = new Timing(
  {},
  500,
  50,
  [(e) => [e, 1], (e) => [e, 2]]
)
describe('Status', () => {
  it('timingEvent実行時任意のscrollPositionを超えた場合に関数1番目を実行する', () => {
    expect(timing.timingEvent({ stageSize: 500, scrollPosition: 0, directionPositionName: 'Top' })).toEqual(undefined)
    expect(timing.timingEvent({ stageSize: 500, scrollPosition: 249, directionPositionName: 'Top' })).toEqual(undefined)
    expect(timing.timingEvent({ stageSize: 500, scrollPosition: 250, directionPositionName: 'Top' })).toEqual([{ target: {}, isOver: true}, 1])
  })
  it('一度関数1が実行されたあと、再度scrollPositionが小さくなった場合関数2を実行する', () => {
    expect(timing.timingEvent({ stageSize: 500, scrollPosition: 251, directionPositionName: 'Top' })).toEqual(undefined)
    expect(timing.timingEvent({ stageSize: 500, scrollPosition: 250, directionPositionName: 'Top' })).toEqual(undefined)
    expect(timing.timingEvent({ stageSize: 500, scrollPosition: 0, directionPositionName: 'Top' })).toEqual([{ target: {}, isOver: false}, 2])
  })
})