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
      :targetPercentage="0.09"
    >
      <div class="box" v-for="i of 4" />
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
  top: 100px;
  bottom: 0;
  left: 0;
  right: 25%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}
.box {
  flex-grow: 1;
  background-size: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5) inset;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  &:nth-child(1) {
    background-color: red;
  }
  &:nth-child(2) {
    background-color: yellow;
  }
  &:nth-child(3) {
    background-color: blue;
  }
  &:nth-child(4) {
    background-color: pink;
  }
}
</style>
