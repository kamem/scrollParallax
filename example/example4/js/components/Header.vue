<template>
<header id="header">
	<p class="site-name">jquery.scroll.parallax</p>
	<nav class="gnav">
		<ul>
			<li class="gnav-item header"><a href="#header">top</a></li>
			<li class="gnav-item install"><a href="#install">install</a></li>
			<li class="gnav-item timing"><a href="#timing">Timing</a></li>
			<li class="gnav-item speed"><a href="#speed">speed</a></li>
			<li class="gnav-item fit"><a href="#fit">fit</a></li>
		</ul>
	</nav>
	<div class="material">
		<svg version="1.1"
		  class="drop"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
			x="0px" y="0px" width="42.001px" height="85.001px" viewBox="0 0 42.001 85.001"
			style="enable-background:new 0 0 42.001 85.001;" xml:space="preserve"
      v-parallax-fit
      :start="0"
      end="last"
      :fromStyle="{
        top: '5%'
      }"
      :toStyle="{
        top: '80%'
      }"
    >
		<defs>
		</defs>
		<g>
			<path class="dropPath" style="fill-rule:evenodd;clip-rule:evenodd;fill:#1176ff;" d="M21.001,0C21.001,0,0,44.625,0,63.751
				c0,11.728,9.41,21.25,21.001,21.25c11.59,0,21-9.522,21-21.25C42.001,44.625,21.001,0,21.001,0z"
        v-parallax-fit="[
          {
            start: 0,
            end: '#timing',
            fromStyle: {
              fill: '#1176ff'
            },
            toStyle: {
              fill: '#67ad0c'
            },
          },
          {
            end: ['#speed', -300],
            toStyle: {
              fill: '#ff15d0'
            },
          },
          {
            end: 'last',
            toStyle: {
              fill: '#1176ff'
            },
          },
        ]"
      />
		</g>
		</svg>
		<img class="gear" src="/img/gear.svg"
      v-parallax-speed
      styles="transform"
      contentScrollPositionStyleValue="rotate(0deg)"
      :speed="-0.2"
    />
	</div>
</header>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
  },
  methods: {
  },
}
</script>

<style scoped>

.gear {
  position: absolute;
  top: -300px;
  right: -450px;
  z-index: -1;
}

.borders {
  transform: rotate(45deg);
  position: absolute;
  top: -150px;
  left: -150px;
  z-index: -1;
}

.drop {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.material .border {
  margin-bottom: 8px;
  background-color: #1176ff;
  width: 300px;
  height: 54px;
  position: relative;
}

.site-name {
  background-color: var(--color-black);
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px 8px;
  font-size: 12px;
  color: #ccc;
}


.gnav {
  position: fixed;
  top: 50%;
  right: 16px;
  margin-top: -8%;
  z-index: 2;
}

.gnav-item {
  list-style-type: none;
  margin: 12px 0;
  & > a {
    display: block;
    box-sizing: border-box;
    padding-top: 12px;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
  }
  &.on > a{
    background-color: #1176ff;
  }
  &.timing.on > a {
    background-color: #67ad0c;
  }
  &.speed.on > a {
    background-color: #ff15d0;
  }
  &.fit.on > a {
    background-color: #1176ff;
  }
}

</style>
