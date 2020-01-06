import '../css/app.css'

const $contents = $('#header, #install, #timing, #speed, #fit')
const $nav = $('.gnav > ul > *')

$contents.each(function () {
  $(this).parallaxTiming([
    selectNav,
    selectNav
  ])
})

function selectNav(e) {
  const index = $contents.index(e.target) + (e.isOver ? 0 : -1)
  $nav.removeClass('on').eq(index).addClass('on')
  $contents.removeClass('on').eq(index).addClass('on')
}


$('.material').append('<div class="borders"></div>')
const borderContent = 8
for (let i = 0; i < borderContent; i++) {
  $('.borders').append('<div class="border"></div>')
  $('.border').eq(i).css({
    width: Math.floor(Math.random() * 300) + 300,
    opacity: Math.random() + 0.1,
  }).parallaxSpeed({
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
    contentScrollPosition: '#speed'
  })
})

$('.circle').each(function (i) {
  $(this).parallaxFit([
    {
      start: ['last', -300 + i * 50],
      end: ['last', i * 100],
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
      easing: 'easeOutBack'
    },
  ])
})