import {Status} from '../../js/scrollParallax/ScrollStatus'

describe('Status', () => {
  Status.update()
  it('direction: yだった場合、directionPositionNameがTopになるべき', () => {
    Status.setVal({ direction: 'y' })
    expect(Status.directionPositionName).toEqual('Top')
  })
  it('direction: xだった場合、directionPositionNameがLeftになるべき', () => {
    Status.setVal({ direction: 'x' })
    expect(Status.directionPositionName).toEqual('Left')
  })
  it('direction: yだった場合、stageSizeNameがHeightになるべき', () => {
    Status.setVal({ direction: 'y' })
    expect(Status.stageSizeName).toEqual('Height')
  })
  it('direction: xだった場合、stageSizeNameがWidthになるべき', () => {
    Status.setVal({ direction: 'x' })
    expect(Status.stageSizeName).toEqual('Width')
  })
})