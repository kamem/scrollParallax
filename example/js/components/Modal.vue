<template>
  <transition name="fade">
    <div class="overlay" v-if="isVisible">
      <div class="modal">
        <slot />
        <p class="close" @click="close">
          <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
            <g>
              <polygon class="st0" points="512,52.535 459.467,0.002 256.002,203.462 52.538,0.002 0,52.535 203.47,256.005 0,459.465 
                52.533,511.998 256.002,308.527 459.467,511.998 512,459.475 308.536,256.005 	"></polygon>
            </g>
          </svg>
        </p>
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
  top: 16px;
  right: 16px;
  background-color: #fff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s;
  & svg {
    width: 12px;
    height: 12px;
    fill: #666;
  }
  &:hover {
    opacity: 0.8;
  }
}

</style>
