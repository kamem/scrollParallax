# vue.scrollParallax

## Usage

```
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

```
Vue.use(Parallaxm, { direction: 'x' })
```

他の[オプション](../README.ja.md#Usage)もここで指定できます。


* v-parallax-timing
* v-parallax-speed
* v-parallax-fit

### timing

```
<template>
<div v-parallax-timing />
</template>
```


### speed
```
<template>
<div
  v-parallax-speed
  styles="top"
  :speed="3"
  contentScrollPosition="#speed"
/>
</template>
```


```
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
```
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


```
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
```
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