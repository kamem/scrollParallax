<template>
  <div class="app">
    <Header />

    <main id="contents">
      <article>
        <MainHeader />

        <Items name="install">
          <template v-slot:title>Install</template>
          <p class="install-code">npm install jquery.scroll-parallax</p>
          <p class="install-code">yarn add jquery.scroll-parallax</p>
        </Items>

        <Items name="timing">
          <template v-slot:title>Timing</template>
          <template v-slot:text>任意の位置を通過したときに関数を実します。<br>
    スクロールしたときに上から下、下から上に向かって<br>
    通過したときにそれぞれ関数を実行します。</template>
          <template v-slot:code>$(el).parallaxTiming([
      function(e) {
        console.log(’上から下’)
      },
      function(e) {
        console.log(’下から上’)
      }
    ])</template>
        </Items>

        <Items name="speed">
          <template v-slot:title>Speed</template>
          <template v-slot:text>任意の位置を通過したときに関数を実行します。<br>
    スクロールしたときに上から下、下から上に向かって<br>
    通過したときにそれぞれ関数を実行します。</template>
          <template v-slot:code>$(el).parallaxSpeed({
      style: 'top',
      speed: 2,
      fixScrollPosition: 500
    })</template>
        </Items>

        <Items name="fit">
          <template v-slot:title>Fit</template>
          <template v-slot:text>移動距離に応じてcssを変化させます。<br>
    スクロールがstartからendまで移動したときに<br>
    fromStyleからtoStyleにcssが変化していきます。<br>
    easingを指定することも可能です。</template>
          <template v-slot:code>$(el).parallaxFit([{
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

          <Circles />
        </Items>
      </article>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import MainHeader from './components/MainHeader'
import Items from './components/Items'
import Circles from './components/Circles'
export default {
  name: 'App',
  components: {
    Header,
    MainHeader,
    Items,
    Circles
  },
  mounted() {
    // this.parallaxTiming({
    //   eventScrollPosition: 600,
    //   toggle: [
    //     function(e) {console.log(e)},
    //     function(e) {console.log(e)},
    //   ]
    // })
    // this.parallaxTiming({
    //   eventScrollPosition: 800,
    //   toggle: [
    //     function(e) {console.log(e)},
    //     function(e) {console.log(e)},
    //   ]
    // })
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

.install-code {
  margin: 32px auto 0;
  padding: 8px 16px;
  background-color: var(--color-black);
  letter-spacing: 0.1em;
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
