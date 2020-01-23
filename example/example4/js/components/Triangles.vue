<template>
  <div class="squares">
    <div class="square" v-for="i of 3"></div>
  </div>
</template>

<script>
export default {
  name: 'Triangles'
}
</script>

<style scoped>
.triangles {
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
}

.triangle {
  position: absolute;
  &:nth-child(1) {
    top: -80px;
    right: -80px;
  }
  &:nth-child(2) {
    top: 80px;
    left: 120px;
    width: 240px;
    height: 160px;
  }
  &:nth-child(3) {
    bottom: -30px;
    left: 50px;
    width: 240px;
    height: 240px;
  }
}
</style>
