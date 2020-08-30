<template>
  <article class="content-body" ref="content-body">
    <div v-html="compiledMarkdownText" />
  </article>
</template>

<script>
import marked from 'marked'
export default {
  props: {
    text: Object
  },
  computed: {
    compiledMarkdownText() {
      return marked(this.text.source)
      .replace(/href="docs/g, `href="${location.pathname}#/docs`)
      .replace(/http:\/\/github.develo.org\/scrollParallax\/public\//g, '')
      .replace(/\&amp;/g, '&')
      .replace(/..\/README.md/g, '#/')
    }
  },
  mounted() {
    this.prettyPrint()
  },
  methods: {
    prettyPrint() {
      const content = this.$refs['content-body']
      content.querySelectorAll('pre').forEach(pre => {
        pre.classList.add('prettyprint')
      })
      PR.prettyPrint()
    }
  },
  watch: {
    text() {
      setTimeout(() => {
        this.prettyPrint()
      }, 0)
    },
  },
}
</script>

<style>
</style>
