<template>
<div class="overlay" isVisible="isVisible">
  <div class="modal">
    <slot />
    <p class="close" @click="close">☓</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    isVisible: String,
  },
  methods: {
    close(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.4s;
  &.on {
    opacity: 0.8;
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  overflow: auto;
  &.on {
    opacity: 0.8;
  }
}

.close {
  z-index: 1;
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>
