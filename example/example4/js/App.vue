<template>
  <div class="app">
    <p class="scroll" :style="$scrollStatus.values.rotate">{{$scrollStatus.values}}</p>
    <p class="test" v-parallax-speed :speed="1" styles="top"></p>
    <p class="scroll" v-parallax-fit :start="0" :end="100" :toStyle="{left: '100px'}">ごごごご</p>
    <div class="box" id="timing" ref="timing">
    </div>
    <div class="box" v-parallax-timing>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.parallaxTiming({
      eventScrollPosition: 600,
      toggle: [
        function(e) {console.log(e)},
        function(e) {console.log(e)},
      ]
    })
    this.parallaxTiming({
      eventScrollPosition: 800,
      toggle: [
        function(e) {console.log(e)},
        function(e) {console.log(e)},
      ]
    })
    this.parallaxFit(
      'fit',
      [
        {
          end: [this.$refs.timing, -300],
          fromStyle: {
            opacity: '0'
          },
          toStyle: {
            opacity: '1'
          },
        },
      ]
    )
    this.parallaxSpeed({
      name: 'rotate',
      style: ['transform', 'top'],
      contentScrollPositionStyleValue: ['rotate(0deg)', '0px'],
      speed: 3,
    })
  },
  methods: {
  },
}
</script>

<style scoped>
.app {
  overflow: hidden;
  height: 5000px;
  background-color: #ccc;
}

.box {
  margin-top: 1000px;
  background-color: #39c;
  height: 500px;

}
.test {
  position: fixed;
  top: 2px;
}
.scroll {
  position: fixed;
}
</style>
