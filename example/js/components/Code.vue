<template>
  <div>
    <p class="label" v-if="type">{{type}}</p>
    <pre class="code"><slot name="code" /></pre>
  </div>
</template>

<script>
import escapeHtml from 'escape-html'
export default {
  props: {
    type: String
  },
  computed: {
    code() {
      return escapeHtml(this.$slots.code.text)
    }
  },
}
</script>

<style scoped>
.label {
  margin: 4px 0;
  font-size: 12px;
  font-weight: bold;
}
.code {
  font-size: 12px;
  color: #333;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  border-radius: 2px;
  padding: 8px;
  overflow: auto;
}
</style>
