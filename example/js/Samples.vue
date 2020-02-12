<template>
  <div>
    <header class="header">
      <nav>
        <ul class="gnav">
          <li class="gnav-item"><a href="#/samples/bg">背景を動かす</a></li>
         <li class="gnav-item"><a href="#/samples/inertial">全体を慣性で動かす</a></li>
        </ul>
      </nav>
    </header>

    <Readme v-if="$route.params.name" :text="samples[$route.params.name]" />

    <Modal v-if="isPreview && !!$route.params.name" @close="onClose">
      <SampleContents v-if="isPreview && !!$route.params.name" ref="sample-contents">
        <component :is="$route.params.name" :status="status" />
      </SampleContents>
    </Modal>
  </div>
</template>

<script>
import Modal from './components/Modal'

import SampleContents from './components/SampleContents'
import bg from './components/samples/background-image/bg'
import Readme from './components/Readme.vue'

import background from './components/samples/background-image/README.ja.md'
import inertialScroll from './components/samples/inertial-scroll/README.ja.md'

import inertial from './components/samples/inertial-scroll/inertial'

export default {
  components: {
    SampleContents,
    bg,
    inertial,
    Readme,
    Modal
  },
  data() {
    return {
      isVisible: false
    }
  },
  computed: {
    samples: () => ({
      bg: background,
      inertial: inertialScroll
    }),
    isPreview() {
      return ~this.$route.path.indexOf('preview')
    }
  },
  data() {
    return {
      status: undefined,
      isMounted: false
    }
  },
  methods: {
    onClose() {
      this.$router.push('/samples')
    },
    cStatus() {
      if(!this.isPreview) return
      setTimeout(() => {
        const stage = this.$refs['sample-contents'] && this.$refs['sample-contents'].$refs['sample-contents-item']
        if(this.status) {
          this.status.functions = []
          this.status.setVal(Object.assign({}, this.status, {stage}))
        } else if(stage) {
          this.status = this.createStatus({name: 'preview', stage})
        }
      }, 0)
    }
  },
  mounted() {
    this.cStatus()
  },
  watch: {
    ['$route']() {
      this.cStatus()
    }
  }
}
</script>

<style scoped>
.gnav {
  display: flex;
  overflow: auto;
  height: 60px;
  background-color: #000;
}

.gnav-item {
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  padding: 0 16px;
  line-height: 60px;
  font-size: 14px;
  list-style-type: none;
  & a {
    color: #fff;
    text-decoration: none;
    display: block;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
