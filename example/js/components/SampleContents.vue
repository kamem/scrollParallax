<template>
<div class="sample-cntents">
  <div :class="['sample-contents-item', {code: $slots.code}]" ref="sample-contents-item">
    <slot />
  </div>
  <div class="sample-contents-code" v-if="$slots.code" ref="sample-contents-code">
    <slot name="code" />
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    this.prettyPrint()
  },
  methods: {
    prettyPrint() {
      const code = this.$refs['sample-contents-code']
      code.querySelectorAll('pre').forEach(pre => {
        pre.classList.add('prettyprint')
      })
      PR.prettyPrint()
    }
  }
}
</script>

<style scoped>
.sample-cntents {
  position: absolute;
  top: 100px;
  bottom: 0px;
  right: 0;
  left: 0px;
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.sample-contents-item {
  overflow: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
}
.code {
  right: 25%;
}
.sample-contents-code {
  padding: 8px;
  overflow: auto;
  background-color: #eee;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 75%;
  right: 0;
  box-sizing: border-box;
}

@media screen and (max-width: 680px) {
.sample-cntents {
  display: flex;
  flex-direction: column;
}
.sample-contents-item {
  position: static;
}
.code {
  right: 0;
}
.sample-contents-code {
  position: static;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5) inset;
  height: 100px;
  min-height: 100px;
}
}
</style>
