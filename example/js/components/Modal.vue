<template>
  <transition name="fade">
    <div class="overlay" v-if="isVisible">
      <div class="modal">
        <slot />
        <p class="close" @click="close">☓</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
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

.fade-enter-active, .fade-leave-active {
  transition: all .2s cubic-bezier(.16,.56,.51,1);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.9)
}

.close {
  z-index: 1;
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>
