# jquery.scrollParallax

## Usage

```
import $ from 'jquery'
import 'scrollParallax/jquery'
```

直接HTMLに読みたい場合はdistフォルダのファイルを使い下記の通り読み込んでください。

```
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/jquery.scrollParallax.min.js"></script>
```


横方向にしたい場合は下記

```
$.parallax({ direction: 'x' })
```

他の[オプション](../README.ja.md#Usage)もここで指定できます。


### timing

```
$('#timing').parallaxTiming()
```


### speed
```
$('.speed').parallaxSpeed({
  style: 'top',
  speed: 3,
  contentScrollPosition: '#speed'
})
```


### fit
```
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
```
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