<template>
  <header id="main-header">
    <h1 class="main-title">jquery.scroll.parallax</h1>
    <p class="main-text">このプラグインには3つの機能があります。</p>

    <a href="#timing" class="main-parallax-item">
    <dl>
      <dt class="main-parallax-item-label">Timing</dt>
      <dd class="main-parallax-item-value">任意の位置を通過したときに関数を実行する</dd>
    </dl>
    </a>

    <a href="#speed" class="main-parallax-item">
    <dl>
      <dt class="main-parallax-item-label">Speed</dt>
      <dd class="main-parallax-item-value">スクロール量に応じてcssを変化させる</dd>
    </dl>
    </a>

    <a href="#fit" class="main-parallax-item">
    <dl>
      <dt class="main-parallax-item-label">Fit</dt>
      <dd class="main-parallax-item-value">移動距離に応じてcssを変化させる</dd>
    </dl>
    </a>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  mounted() {
  },
  methods: {
  },
}
</script>

<style scoped>
.main-title {
  padding-top: 200px;
  text-align: center;
  font-size: 40px;
  font-weight: normal;
  letter-spacing: 0.05em;
}
.main-text {
  margin: 16px 0 64px;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.1em;
}

.gear {
  position: absolute;
  top: -300px;
  right: -450px;
  z-index: -1;
}


.main-parallax-item {
  color: #fff;
  text-align: center;
  text-decoration: none;

  & > * {
    transition: opacity 0.15s;
  }

  &:hover > * {
    opacity: 0.6;
  }
}

.main-parallax-item-label {
  padding: 10px 0;
  width: 160px;
  background-color: var(--color-black);
  text-align: center;
  text-decoration: underline;
  display: inline-block;
  margin-bottom: 24px;
  letter-spacing: 0.1em;
}

.main-parallax-item-value {
  padding: 10px 20px;
  text-decoration: underline;
  display: inline-block;
  margin-bottom: 24px;
  letter-spacing: 0.1em;
}
</style>
