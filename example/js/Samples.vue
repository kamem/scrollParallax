<template>
  <div>
  <header class="header">
    <nav>
      <ul class="gnav">
        <li class="gnav-item"><a href="#/">Readme</a></li>
      </ul>
    </nav>
    
  </header>
    <SampleContents ref="sample-contents">
      <div class="scroll-contents">
        <div class="test"
        v-if="status"
        v-parallax-speed
        styles="top"
        :status="status"
        :speed="2"
        :contentScrollPosition="200"
        :targetPercentage="1" />
      </div>
    </SampleContents>
  </div>
</template>

<script>
import SampleContents from './components/SampleContents'

export default {
  name: 'Header',
  components: {
    SampleContents
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

.scroll-contents {
  height: 2000px;
  position: relative;
  overflow: hidden;
}

.test {
  background-color: red;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 500px;
}

.gnav {
  display: flex;
  overflow: auto;
  height: 40px;
  background-color: #333;
}

.gnav-item {
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  padding: 0 16px;
  line-height: 40px;
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
