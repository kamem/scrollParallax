import { Status } from '../scrollParallax/ScrollStatus'

const numRegExp = /([-]?([1-9]\d*|0)(\.\d+)?)(deg|\)|px|em|rem|%|$|\,)/g

export const getStyleValues = (value) => {
  let valueRegAry
  let valueAry = []
  while ((valueRegAry = numRegExp.exec(value)) !== null) {
    valueAry.push(parseFloat(valueRegAry[1]))
  }
  return valueAry
}

export const generateStyleValue = (styleValue) => {
  let value = String(styleValue)
  value = getStringColor(value)
  value = hexadecimalToRgb(value)

  return value
}

export const generateStyleValueString = (style, values) => {
  let i = 0
  return style.replace(numRegExp, (styleValue) => {
    return styleValue.replace(/[-]?([1-9]\d*|0)(\.\d+)?/, values[i++])
  })
}

const plusColor = s => s + s
export const generateColorString = (colorString) => {
  if (colorString.length > 4) return colorString
  return `#${plusColor(colorString[1])}${plusColor(colorString[2])}${plusColor(colorString[3])}`
}
export const generateRGB = (colorString) => {
  const c = colorString.substring(1)
  return [
    parseInt(c.substring(0, 2), 16),
    parseInt(c.substring(2, 4), 16),
    parseInt(c.substring(4, 6), 16)
  ]
}

export const hexadecimalToRgb = (value) => {
  return value.replace(/#[0-9a-fA-F]{3,6}/g, (color) => {
    const [r, g, b] = generateRGB(generateColorString(color))
    return `rgb(${r},${g},${b})`
  })
}

export const getStringColor = (styleValue) => {
  const colors = { red: 'f00', blue: '00f', yellow: 'ff0', green: '008000' }
  return styleValue.replace(/red|blue|green|yellow/g, (color) => '#' + colors[color])
}

export const _offset = (element, { direction }) => {
  const directionPositionName = direction === 'y' ? 'Top' : 'Left'
  const scrollPosition = global[`page${direction.toUpperCase()}Offset`] || document.documentElement[`scroll${directionPositionName}`]
  const el = typeof element !== 'string' ? element : document.querySelector(element)
  return el && el.getBoundingClientRect()[directionPositionName.toLocaleLowerCase()] + scrollPosition
}

export const scrollPositionStringToNumber = (scrollPosition, status = Status) => {
  const { stageSize, contentSize } = status
  const lastScrollPosition = contentSize - stageSize

  if (scrollPosition > lastScrollPosition || ~['lastScrollPosition', 'last'].indexOf(scrollPosition)) {
    return lastScrollPosition
  }

  if (~['string', 'object'].indexOf(typeof scrollPosition)) {
    const i = typeof scrollPosition === 'string' ? scrollPosition.split(',') : scrollPosition
    const positionName = i[0]
    const position = ~['lastScrollPosition', 'last'].indexOf(positionName) ? lastScrollPosition : _offset(positionName, status)

    return (parseInt(i[1]) || 0) + Math.min(position, lastScrollPosition)
  }

  return scrollPosition
}

export const easing = {
	linear : function(t,b,c,d){return b+c*t},
	easeInQuad:function(i,b,c,d){return c*(i/=d)*i+b;},
	easeOutQuad:function(i,b,c,d){return -c*(i/=d)*(i-2)+b;},
	easeInOutQuad:function(i,b,c,d){if((i/=d/2)<1){return c/2*i*i+b;}return -c/2*((--i)*(i-2)-1)+b;},
	easeInCubic:function(i,b,c,d){return c*(i/=d)*i*i+b;},
	easeOutCubic:function(i,b,c,d){return c*((i=i/d-1)*i*i+1)+b;},
	easeInOutCubic:function(i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i+b;}return c/2*((i-=2)*i*i+2)+b;},
	easeInQuart:function(i,b,c,d){return c*(i/=d)*i*i*i+b;},
	easeOutQuart:function(i,b,c,d){return -c*((i=i/d-1)*i*i*i-1)+b;},
	easeInOutQuart:function(i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i+b;}return -c/2*((i-=2)*i*i*i-2)+b;},
	easeInQuint:function(i,b,c,d){return c*(i/=d)*i*i*i*i+b;},
	easeOutQuint:function(i,b,c,d){return c*((i=i/d-1)*i*i*i*i+1)+b;},
	easeInOutQuint:function(i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i*i+b;}return c/2*((i-=2)*i*i*i*i+2)+b;},
	easeInSine:function(i,b,c,d){return -c*Math.cos(i/d*(Math.PI/2))+c+b;},
	easeOutSine:function(i,b,c,d){return c*Math.sin(i/d*(Math.PI/2))+b;},
	easeInOutSine:function(i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b;},
	easeInExpo:function(i,b,c,d){return(i==0)?b:c*Math.pow(2,10*(i/d-1))+b;},
	easeOutExpo:function(i,b,c,d){return(i==d)?b+c:c*(-Math.pow(2,-10*i/d)+1)+b;},
	easeInOutExpo:function(i,b,c,d){if(i==0){return b;}if(i==d){return b+c;}if((i/=d/2)<1){return c/2*Math.pow(2,10*(i-1))+b;}return c/2*(-Math.pow(2,-10*--i)+2)+b;},
	easeInCirc:function(i,b,c,d){return -c*(Math.sqrt(1-(i/=d)*i)-1)+b;},
	easeOutCirc:function(i,b,c,d){return c*Math.sqrt(1-(i=i/d-1)*i)+b;},
	easeInOutCirc:function(i,b,c,d){if((i/=d/2)<1){return -c/2*(Math.sqrt(1-i*i)-1)+b;}return c/2*(Math.sqrt(1-(i-=2)*i)+1)+b;},
	easeInElastic:function(m,p,a,b){var d=1.70158;var c=0;var n=a;if(m==0){return p;}if((m/=b)==1){return p+a;}if(!c){c=b*0.3;}if(n<Math.abs(a)){n=a;var d=c/4;}else{var d=c/(2*Math.PI)*Math.asin(a/n);}return -(n*Math.pow(2,10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c))+p;},
	easeOutElastic:function(m,p,a,b){var d=1.70158;var c=0;var n=a;if(m==0){return p;}if((m/=b)==1){return p+a;}if(!c){c=b*0.3;}if(n<Math.abs(a)){n=a;var d=c/4;}else{var d=c/(2*Math.PI)*Math.asin(a/n);}return n*Math.pow(2,-10*m)*Math.sin((m*b-d)*(2*Math.PI)/c)+a+p;},
	easeInOutElastic:function(m,p,a,b){var d=1.70158;var c=0;var n=a;if(m==0){return p;}if((m/=b/2)==2){return p+a;}if(!c){c=b*(0.3*1.5);}if(n<Math.abs(a)){n=a;var d=c/4;}else{var d=c/(2*Math.PI)*Math.asin(a/n);}if(m<1){return -0.5*(n*Math.pow(2,10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c))+p;}return n*Math.pow(2,-10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c)*0.5+a+p;},
	easeInBack:function(k,b,c,d,j){if(j==undefined){j=1.70158;}return c*(k/=d)*k*((j+1)*k-j)+b;},
	easeOutBack:function(k,b,c,d,j){if(j==undefined){j=1.70158;}return c*((k=k/d-1)*k*((j+1)*k+j)+1)+b;},
	easeInOutBack:function(k,b,c,d,j){if(j==undefined){j=1.70158;}if((k/=d/2)<1){return c/2*(k*k*(((j*=(1.525))+1)*k-j))+b;}return c/2*((k-=2)*k*(((j*=(1.525))+1)*k+j)+2)+b;},
	easeInBounce:function(i,b,c,d){return c-easing.easeOutBounce(d-i,0,c,d)+b;},
	easeOutBounce:function(i,b,c,d){if((i/=d)<(1/2.75)){return c*(7.5625*i*i)+b;}else{if(i<(2/2.75)){return c*(7.5625*(i-=(1.5/2.75))*i+0.75)+b;}else{if(i<(2.5/2.75)){return c*(7.5625*(i-=(2.25/2.75))*i+0.9375)+b;}else{return c*(7.5625*(i-=(2.625/2.75))*i+0.984375)+b;}}}},
	easeInOutBounce:function(i,b,c,d){if(i<d/2){return easing.easeInBounce(i*2,0,c,d)*0.5+b;}return easing.easeOutBounce(i*2-d,0,c,d)*0.5+c*0.5+b;}
};