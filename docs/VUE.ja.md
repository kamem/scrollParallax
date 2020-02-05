# vue.scrollParallax

## Example

* [vue y scroll](http://github.develo.org/scrollParallax/public/example4/)
* [vue x scroll](http://github.develo.org/scrollParallax/public/example5/)

## Usage

```javascript
import Vue from 'vue'
import Parallax from 'scrollParallax/vue'
import App from './App'

Vue.use(Parallaxm)

const app = new Vue({
  el: '#app',
  render: (h) => h(App)
})
```

横方向にしたい場合は下記

```javascript
Vue.use(Parallaxm, { direction: 'x' })
```

他の[オプション](../README.ja.md#Usage)もここで指定できます。


* v-parallax-timing
* v-parallax-speed
* v-parallax-fit

### timing

```javascript
<template>
<div v-parallax-timing />
</template>
```


### speed
```javascript
<template>
<div
  v-parallax-speed
  styles="top"
  :speed="3"
  contentScrollPosition="#speed"
/>
</template>
```


```javascript
<template>
<div
  v-parallax-speed="parallaxSpeed"
/>
</template>

<script>
export default {
  data() {
    return {
      parallaxSpeed: {
        styles: "top"
        speed: 3
        contentScrollPosition: '#speed'
      }
    }
  },
}
</script>
```


### fit
```javascript
<template>
<div
  v-parallax-fit
  :start="1000"
  :end="2000"
  :fromStyle="{
    opacity: 0,
  }"
  :toStyle="{
    opacity: 1,
  }"
  easing="easeOutBack"
/>
</template>
```


```javascript
<template>
<div
  v-parallax-fit="parallaxFit"
/>
</template>

<script>
export default {
  data() {
    return {
      parallaxFit: {
        start: 1000,
        end: 2000,
        fromStyle: {
          opacity: 0
        },
        toStyle: {
          opacity: 1,
        },
        easing: 'easeOutBack'
      }
    }
  },
}
</script>
```

#### 複数指定したい場合
```javascript
<template>
<div
  v-parallax-fit="parallaxFit"
/>
</template>

<script>
export default {
  data() {
    return {
      parallaxFit: [
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
      ]
    }
  },
}
</script>
```