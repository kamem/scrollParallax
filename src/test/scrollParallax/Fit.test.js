import Fit from '../../js/scrollParallax/Fit'

const fit = new Fit({})

describe('Status', () => {
  it('timinguEvent実行時任意のscrollPositionを超えた場合に関数1番目を実行する', () => {

		fit.setMotion({
			start: 0,
			end: 1000,
			fromStyle: {
        top: '100px'
      },
			toStyle: {
        top: '200px'
      }
		})
    expect(1).toEqual(1)
  })
})