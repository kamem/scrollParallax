<template>
  <div class="app">
    <Header />

    <main id="contents">
      <article>
        <MainHeader />

        <Items name="timing">
          <template slot="title">Timing</template>
          <template slot="text">任意の位置を通過したときに関数を実します。<br>
    スクロールしたときに上から下、下から上に向かって<br>
    通過したときにそれぞれ関数を実行します。</template>
          <template slot="code">$(el).parallaxTiming([
      function(e) {
        console.log(’上から下’)
      },
      function(e) {
        console.log(’下から上’)
      }
    ])</template>

          <div class="circles">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </Items>



        <Items name="speed">
          <template slot="title">Speed</template>
          <template slot="text">任意の位置を通過したときに関数を実行します。<br>
    スクロールしたときに上から下、下から上に向かって<br>
    通過したときにそれぞれ関数を実行します。</template>
          <template slot="code">$(el).parallaxSpeed({
      style: 'top',
      speed: 2,
      fixScrollPosition: 500
    })</template>
        </Items>

        <Items name="fit">
          <template slot="title">Fit</template>
          <template slot="text">移動距離に応じてcssを変化させます。<br>
    スクロールがstartからendまで移動したときに<br>
    fromStyleからtoStyleにcssが変化していきます。<br>
    easingを指定することも可能です。</template>
          <template slot="code">$(el).parallaxFit([{
      start: 0,
      end: 200,
      fromStyle: {
        opacity: 0
      },
      toStyle: {
        opacity: 1
      },
      easing: 'easeOutCubic'
    }]</template>
        </Items>
      </article>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import MainHeader from './components/MainHeader'
import Items from './components/Items'
export default {
  name: 'App',
  components: {
    Header,
    MainHeader,
    Items,
  },
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
          end: 1000,
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

<style>
:root {
  --color-black: rgba(0, 0, 0, 0.8);
}

#contents {
  width: 100%;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
}

html{
  scroll-behavior: smooth;
}

body {
  background-color: #2b2b2b;
  color: #fff;
}
</style>
