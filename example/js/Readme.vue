<template>
  <Readme :text="markdownText" />
</template>

<script>
import Readme from './components/Readme'
import md from '../../README.md'
export default {
  components: {
    Readme
  },
  data () {
    return {
      markdownText: md
    }
  },
}
</script>

<style>
</style>
