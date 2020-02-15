# 色を変更する

[プレビュー](http://github.develo.org/scrollParallax/public/#/samples/changeRgb/preview)

## Vue
```vue
<template>
<div class="container">
  <p class="box1" v-parallax-fit="box1"></p>
</div>
</template>

<script>
export default {
  data() {
    return {
      box1: [
        {
          start: 0,
          end: 100,
          fromStyle: {
            backgroundColor: '#000' 
          },
          toStyle: {
            backgroundColor: '#ff0000' 
          },
        },
        {
          end: 'last',
          toStyle: {
            backgroundColor: '#0000ff' 
          },
        },
      ]
    }
  }
}
</script>
```

## jQuery
### html
```html
<p class="box1"></p>
```
### js
```jquery
$('box1').parallaxFit([
  {
    start: 0,
    end: 100,
    fromStyle: {
      backgroundColor: '#000' 
    },
    toStyle: {
      backgroundColor: '#ff0000' 
    },
  },
  {
    end: 'last',
    toStyle: {
      backgroundColor: '#0000ff' 
    },
  },
])
```

## CSS
```css
.box1 {
  width: 100px;
  height: 100px;
  position: fixed;
  top: 20px;
  left: 50%;
  margin-left: -50px;
}
```