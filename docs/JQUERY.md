# jquery.scrollParallax

[![example2](http://github.develo.org/scrollParallax/public/img/thumbs/example2.jpg)](http://github.develo.org/scrollParallax/public/example2/)

## Example
* [y scroll](http://github.develo.org/scrollParallax/public/example1/)
* [x scroll](http://github.develo.org/scrollParallax/public/example2/)
* [y scroll](http://github.develo.org/scrollParallax/public/example3/)

## Usage

```javascript
import $ from 'jquery'
import 'scrollParallax/jquery'
```

直接HTMLに読みたい場合はdistフォルダのファイルを使い下記の通り読み込んでください。

```javascript
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/jquery.scrollParallax.min.js"></script>
```


横方向にしたい場合は下記

```javascript
$.parallax({ direction: 'x' })
```

他の[オプション](../README.md#Usage)もここで指定できます。


### timing

```javascript
$('#timing').parallaxTiming()
```


### speed
```javascript
$('.speed').parallaxSpeed({
  style: 'top',
  speed: 3,
  contentScrollPosition: '#speed'
})
```


### fit
```javascript
$('.fit').parallaxFit({
  start: 1000,
  end: 2000,
  fromStyle: {
    opacity: 0
  },
  toStyle: {
    opacity: 1,
  },
  easing: 'easeOutBack'
})
```

#### 複数指定したい場合
```javascript
$('.fit').parallaxFit([
  {
    start: 0,
    end: 1000,
    fromStyle: {
      opacity: 0
    },
    toStyle: {
      opacity: 1,
    },
    easing: 'easeOutBack'
  },
  {
    start: 1000,
    end: 2000,
    fromStyle: {
      opacity: 1
    },
    toStyle: {
      opacity: 0,
    },
    easing: 'easeOutBack'
  }
]))
```