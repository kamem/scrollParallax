<template>
<header class="header">
  <nav>
    <ul class="gnav">
      <li class="gnav-item"><a href="#/">Readme</a></li>
      <li class="gnav-item"><a href="#/docs/VANILLA_ES6.md">Vanilla ES6 Readme</a></li>
      <li class="gnav-item"><a href="#/docs/JQUERY.md">jQuery Readme</a></li>
      <li class="gnav-item"><a href="#/docs/VUE.md">Vue Readme</a></li>
      <li class="gnav-item"><a href="#/samples">Samples</a></li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
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
