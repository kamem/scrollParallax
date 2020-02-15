<template>
<div class="sample-cntents">
  <div class="sample-contents-item" ref="sample-contents-item">
    <slot />
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.sample-cntents {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
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
</style>
