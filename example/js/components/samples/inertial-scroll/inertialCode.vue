<template>
<div>
  <Code type="vue">
    <template v-slot:code>{{code.jquery}}</template>
  </Code>
</div>
</template>

<script>
import Code from '../../Code'
export default {
  components: {
    Code
  },
  data() {
    return {
      code: {
        jquery: `<section class="item"
  v-for="i of 4"
  v-parallax-speed
  styles="background-position"
  :status="status"
  :speed="[[0, 0.04 * (i % 2 === 0 ? 1 : -1)]]"
  :min="[[0, 0]]"
  :max="[[0, 100]]"
  :contentScrollPosition="i * 360"
  :targetPercentage="0.1">
</section>
`
      } 
    }
  },
  props: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
