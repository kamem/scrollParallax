import '../css/app.css'
import $ from 'jquery'
import '../../../jquery'

const $nav = $('.gnav > ul > *')

$nav.each(function () {
  $(this).parallaxTiming({ target: $(this).find('a').attr('href') })
})

$('#timing').parallaxTiming()


$('.material').append('<div class="borders"></div>')
const borderContent = 8
for (let i = 0; i < borderContent; i++) {
  $('.borders').append('<div class="border"></div>')
  $('.border').eq(i).css({
    width: Math.floor(Math.random() * 300) + 300,
    opacity: Math.random() + 0.1,
  }).parallaxSpeed({
    contentScrollPosition: 0,
    style: ['width', 'left'],
    speed: Math.random() * 0.2 + 0.5 * ([-1, 1][Math.floor(Math.random() * 2)]),
  })
}

$('.drop').parallaxFit([
  {
    start: 0,
    end: 'last',
    fromStyle: {
      top: '5%'
    },
    toStyle: {
      top: '80%'
    },
  }
])

$('.dropPath').parallaxFit([
  {
    start: 0,
    end: '#timing',
    fromStyle: {
      fill: '#1176ff'
    },
    toStyle: {
      fill: '#67ad0c'
    },
  },
  {
    end: ['#speed', -300],
    toStyle: {
      fill: '#ff15d0'
    },
  },
  {
    end: 'last',
    toStyle: {
      fill: '#1176ff'
    },
  },
])

$('.gear').parallaxSpeed({
  style: 'transform',
  contentScrollPositionStyleValue: 'rotate(0deg)',
  targetPercentage: 0.05,
  contentScrollPosition: 0,
  speed: -0.2,
})


$('.triangle').each(function (i) {
  $(this).parallaxSpeed({
    style: [
      'transform',
      'top',
      'opacity'
    ],
    contentScrollPositionStyleValue: `rotate(${Math.floor(Math.random() * 60 * i)}deg)`,
    speed: [
      Math.random() * 0.05 * ([-1, 1][Math.floor(Math.random() * 2)]),
      Math.random() * 0.15,
      0.005
    ],
    contentScrollPosition: '#speed',
  })
})

$('.circle').each(function (i) {
  $(this).parallaxFit([
    {
      start: ['#fit', -300 + i * 50],
      end: ['#fit', i * 100],
      fromStyle: {
        opacity: 0,
        transform: 'scale(0.3)',
        top: $(this).css('top')
      },
      toStyle: {
        opacity: 1,
        transform: 'scale(1)',
        top: $(this).css('top')
      },
      easing: function (t, b, c, d) {
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (-49 * tc * ts + 135 * ts * ts + -130 * tc + 50 * ts + -5 * t);
      }
    },
  ])
})