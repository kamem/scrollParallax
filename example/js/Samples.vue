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
    <SampleContents ref="sample-contents">
      <component :is="$route.params.name" :status="status" />
      <template v-slot:code v-if="$route.params.name">
        <component :is="`${$route.params.name}Code`" :status="status" />
      </template>
    </SampleContents>
  </div>
</template>

<script>
import SampleContents from './components/SampleContents'
import bg from './components/samples/background-image/bg'
import bgCode from './components/samples/background-image/bgCode'

import inertial from './components/samples/inertial-scroll/inertial'
import inertialCode from './components/samples/inertial-scroll/inertialCode'

export default {
  components: {
    SampleContents,
    bg,
    bgCode,
    inertial,
    inertialCode
  },
  data() {
    return {
      status: undefined,
      isMounted: false
    }
  },
  mounted() {
    this.status = this.createStatus({
      stage: this.$refs['sample-contents'].$refs['sample-contents-item'],
    })
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
