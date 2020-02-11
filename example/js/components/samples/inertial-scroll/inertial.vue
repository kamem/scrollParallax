<template>
<div v-if="status">
  <div class="body">

    <div class="content"
      v-parallax-speed
      styles="transform"
      :status="status"
      :speed="-1"
      :min="[[0, null]]"
      :max="[[0, null]]"
      contentScrollPositionStyleValue="translate(0px, 0px)"
      :targetPercentage="0.1"
    >
      <div class="box" v-for="i of 4">
    {{$scrollStatus}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    status: Object
  },
}
</script>

<style scoped>
.body {
  height: 1500px;
  overflow: hidden;
}
.content {
  height: 1500px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}
.box {
  flex-grow: 1;
  &:nth-child(1) {
    background-color: #eee;
  }
  &:nth-child(2) {
    background-color: #ccc;
  }
  &:nth-child(3) {
    background-color: #999;
  }
  &:nth-child(4) {
    background-color: #666;
  }
}
</style>
