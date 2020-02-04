<template>
  <div v-html="compiledMarkdownText" />
</template>

<script>
import marked from 'marked'
import md from '../../docs/JQUERY.ja.md'
export default {
  name: 'Vue',
  data () {
    return {
      markdownText: md.source
    }
  },
  computed: {
    compiledMarkdownText() {
      return marked(this.markdownText).replace(/\&amp;/g, '&')
    }
  }
}
</script>

<style>
</style>
