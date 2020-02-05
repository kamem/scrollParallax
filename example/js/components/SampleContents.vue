<template>
<div class="sample-cntents">
  <div class="sample-contents-item" ref="sample-contents-item">
    <slot />
  </div>
  <div class="sample-code">
  </div>
</div>
</template>

<style scoped>
.sample-cntents {
  position: absolute;
  top: 100px;
  bottom: 0;
  right: 0;
  left: 0;
}
.sample-contents-item {
  overflow: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 200px;
  left: 0;
}
.sample-code {
  width: 200px;
  background-color: #eee;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
</style>
