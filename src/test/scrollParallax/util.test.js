import html from './html'
document.body.innerHTML = html

import {
  getStyleValues,
  generateStyleValue,
  generateStyleValueString,
  generateColorString,
  hexadecimalToRgb,
  scrollPositionStringToNumber,
  getStringColor
} from '../../js/scrollParallax/util'

describe('getStyleValues', () => {
  it('数字が入った文字を数字部分を抜き出した配列として返すべき', () => {
    expect(getStyleValues('rgba(255, 0, 100)')).toEqual([255, 0, 100])
  })
  it('数字が入った文字を数字部分を抜き出した配列として返すべき', () => {
    expect(getStyleValues('linear-gradient(rgb(255,1,2), rgb(255,0,0))')).toEqual([255, 1, 2, 255, 0, 0])
  })
  it('数字が入った文字を数字部分を抜き出した配列として返すべき', () => {
    expect(getStyleValues('rotate(180deg) scale(2)')).toEqual([180, 2])
  })
})

describe('generateStyleValue', () => {
  it('16進数カラーコード3つの場合4つ返す', () => {
    expect(generateStyleValue('#fff')).toBe('rgb(255,255,255)')
  })
  it('複数の16進数カラーコードがある場合も、その部分だけrgbに変換するべき', () => {
    expect(generateStyleValue('linear-gradient(#fff, red)')).toBe('linear-gradient(rgb(255,255,255), rgb(255,0,0))')
  })
  it('カラーコードではない場合そのまま返すべき', () => {
    expect(generateStyleValue('rgb(255,255,255)')).toBe('rgb(255,255,255)')
  })
  it('カラーコードではない場合そのまま返すべき', () => {
    expect(generateStyleValue('1')).toBe('1')
  })
})


describe('generateStyleValueString', () => {
  it('数字の値を、第2引数の配列に順番に入れ直すべき', () => {
    expect(generateStyleValueString('rgba(1, 2, 3)', [255, 0, 100])).toEqual('rgba(255, 0, 100)')
  })
  it('数字の値を、第2引数の配列に順番に入れ直すべき', () => {
    expect(generateStyleValueString('linear-gradient(rgb(255,1,2), rgb(255,0,0))', [1, 2, 3, 2, 3, 5])).toBe('linear-gradient(rgb(1,2,3), rgb(2,3,5))')
  })
  it('数字の値を、第2引数の配列に順番に入れ直すべき', () => {
    expect(generateStyleValueString('rotate(1deg) scale(3)', [180, 2])).toEqual('rotate(180deg) scale(2)')
  })
})


describe('generateColorString', () => {
  it('16進数カラーコード3つの場合4つ返すべき', () => {
    expect(generateColorString('#fff')).toBe('#ffffff')
  })
  it('16進数カラーコード6つの場合そのまま返すべき', () => {
    expect(generateColorString('#ffffff')).toBe('#ffffff')
  })
  it('16進数カラーコードではない場合そのまま返すべき', () => {
    expect(generateColorString('rgb(255, 255, 255)')).toBe('rgb(255, 255, 255)')
  })
})

describe('hexadecimalToRgb', () => {
  it('16進数カラーコードをrgbaに変換するべき', () => {
    expect(hexadecimalToRgb('#fff')).toBe('rgb(255,255,255)')
  })
  it('16進数カラーコードをrgbaに変換するべき', () => {
    expect(hexadecimalToRgb('#ffffff')).toBe('rgb(255,255,255)')
  })
  it('rgbだった場合そのまま帰すべき', () => {
    expect(hexadecimalToRgb('rgb(255, 255, 255)')).toBe('rgb(255, 255, 255)')
  })
  it('カラーコードではない場合そのまま返すべき', () => {
    expect(hexadecimalToRgb('1')).toBe('1')
  })
})

describe('getStringColor', () => {
  it('一部のカラー文字列をを16進数カラーコードに変換するべき', () => {
    expect(getStringColor('red')).toBe('#f00')
  })
  it('一部のカラー文字列をを16進数カラーコードに変換するべき', () => {
    expect(getStringColor('blue')).toBe('#00f')
  })
  it('一部のカラー文字列をを16進数カラーコードに変換するべき', () => {
    expect(getStringColor('yellow')).toBe('#ff0')
  })
  it('一部のカラー文字列をを16進数カラーコードに変換するべき', () => {
    expect(getStringColor('green')).toBe('#008000')
  })
})

describe('scrollPositionStringToNumber', () => {
  const status = { endScrollPosition: 0, stageSize: 600, contentSize: 1000, directionPositionName: 'Top', direction: 'y' }
  it('lastと渡すとcontentSize - stageSizeの値を返す', () => {
    expect(scrollPositionStringToNumber('last', status)).toBe(400)
  })
  it('lastScrollPositionと渡すとcontentSize - stageSizeの値を返すべき', () => {
    expect(scrollPositionStringToNumber('lastScrollPosition', status)).toBe(400)
  })
  it('[タグ名,数値]の文字列で指定した場合は、タグの位置から数値を足した値を返すべき', () => {
    expect(scrollPositionStringToNumber('#test,100', status)).toBe(100)
  })
  it('[タグ名,数値]の文字列で指定した場合は、タグの位置から数値を足した値を返すべき', () => {
    expect(scrollPositionStringToNumber('#test,-100', status)).toBe(-100)
  })
  it('[last,数値]の文字列で指定した場合は、contentSize - stageSize + 数値の位置を返すべき', () => {
    expect(scrollPositionStringToNumber('last,-100', status)).toBe(300)
  })
  it('数字で渡したらそのまま返すべき', () => {
    expect(scrollPositionStringToNumber(300, status)).toBe(300)
  })
  it('ただし、スクロールの最後以上の値だった場合は、スクロールの最後の位置に値を返すべき', () => {
    expect(scrollPositionStringToNumber(1000, status)).toBe(400)
  })
  it('タグ指定の場合も同じくスクロール最後の位置を超えている場合は最後の値を返すべき', () => {
    expect(scrollPositionStringToNumber('#test,500', status)).toBe(400)
  })
})

