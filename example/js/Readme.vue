<template>
  <div v-html="compiledMarkdownText" />
</template>

<script>
import marked from 'marked'
import md from '../../README.ja.md'
export default {
  name: 'App',
  data () {
    return {
      markdownText: md.source
    }
  },
  computed: {
    compiledMarkdownText() {
      return marked(this.markdownText)
      .replace(/href="docs/g, 'href="/#/docs')
      .replace(/http:\/\/github.develo.org\/scrollParallax\/public\//g, './')
    }
  }
}
</script>

<style>
</style>
