# 背景を動かす

[プレビュー](http://github.develo.org/scrollParallax/public/#/samples/bg/preview)

## Vue
```vue
<div v-if="status" class="background-items">
  <section class="background-item"
    v-for="i of 4"
    v-parallax-speed
    styles="background-position"
    :speed="[[0, 0.04 * (i % 2 === 0 ? 1 : -1)]]"
    :min="[[0, 0]]"
    :max="[[0, 100]]"
    :targetPercentage="0.1" />
</div>
```

## jQuery
### html
```html
<div class="background-items">
  <section class="background-item"></section>
  <section class="background-item"></section>
  <section class="background-item"></section>
  <section class="background-item"></section>
</div>
```
### js
```jquery
$('.background-item').each(function(i) {
  $(this).parallaxSpeed({
    styles: 'background-position',
    speed: [[0, 0.04 * (i % 2 === 0 ? 1 : -1)]],
    min: [[0, 0]],
    max: [[0, 100]],
    contentScrollPosition: $(this),
    targetPercentage: 0.1
  })
})
```

## CSS
```css
.background-items {
  display: flex;
  flex-direction: column;
  height: 1200px;
}
.background-item {
  height: 300px;
  flex-grow: 1;
  background-size: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5) inset;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  &:nth-child(1) {
    background-image: url(https://live.staticflickr.com/5507/9932949874_01362a9be7_h.jpg);
  }
  &:nth-child(2) {
    background-image: url(https://live.staticflickr.com/616/21925649309_2d863055b4_k.jpg);
  }
  &:nth-child(3) {
    background-image: url(https://live.staticflickr.com/3902/15325383101_fc153f8b13_h.jpg);
  }
  &:nth-child(4) {
    background-image: url(https://live.staticflickr.com/8591/16477295709_b8814d7cad_h.jpg);
  }
}
```