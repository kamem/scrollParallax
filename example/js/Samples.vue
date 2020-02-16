<template>
  <div class="container">
    <header class="header">
      <nav>
        <ul class="gnav">
          <li class="gnav-item"><a href="#/samples">一覧</a></li>
          <li class="gnav-item"><a href="#/samples/bg">上下に背景を動かす</a></li>
          <li class="gnav-item"><a href="#/samples/changeRgb">色を変更する</a></li>
          <li class="gnav-item"><a href="#/samples/inertial">全体を慣性で動かす</a></li>
        </ul>
      </nav>
    </header>

    <Readme v-if="$route.params.name" :text="samples[$route.params.name]" />

    <Modal :isVisible="isPreview && !!$route.params.name" @close="onClose">
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
import changeRgb from './components/samples/change-rgb/changeRgb'
import Readme from './components/Readme.vue'

import bgReadme from './components/samples/background-image/README.ja.md'
import changeRgbReadme from './components/samples/change-rgb/README.ja.md'
import inertialReadme from './components/samples/inertial-scroll/README.ja.md'

import inertial from './components/samples/inertial-scroll/inertial'

export default {
  components: {
    SampleContents,
    bg,
    changeRgb,
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
      bg: bgReadme,
      changeRgb: changeRgbReadme,
      inertial: inertialReadme
    }),
    isPreview() {
      return !!~this.$route.path.indexOf('preview')
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
      history.back()
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
.container {
  display: flex;
}

.content-body {
  max-width: none;
  flex-grow: 1;
  overflow: hidden;
}

.header {
  width: 20%;
  background-color: rgba(255, 255, 255, 0.8);
}

.gnav {
  padding: 8px 0;
}

.gnav-item {
  margin: 0;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  padding: 0.4em 16px;
  font-size: 13px;
  list-style-type: none;
  & a {
    color: #333;
    text-decoration: none;
    display: block;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
