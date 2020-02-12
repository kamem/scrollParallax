<template>
  <article class="content-body" ref="content-body">
    <div v-html="compiledMarkdownText" />
  </article>
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
      .replace(/href="docs/g, `href="${location.pathname}#/docs`)
      .replace(/http:\/\/github.develo.org\/scrollParallax\/public\//g, './')
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
  }
}
</script>

<style>
</style>
