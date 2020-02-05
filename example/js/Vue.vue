<template>
  <article class="content-body">
    <div v-html="compiledMarkdownText" />
  </article>
</template>

<script>
import marked from 'marked'
import md from '../../docs/VUE.ja.md'

export default {
  name: 'Vue',
  data () {
    return {
      markdownText: md.source
    }
  },
  computed: {
    compiledMarkdownText() {
      return marked(this.markdownText)
      .replace(/\&amp;/g, '&')
      .replace(/..\/README.ja.md/g, '#/')
    }
  }
}
</script>

<style>
</style>
