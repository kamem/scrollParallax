<template>
<header class="header">
  <nav>
    <ul class="gnav">
      <li class="gnav-item"><a href="#/">Readme</a></li>
      <li class="gnav-item"><a href="#/docs/JQUERY.ja.md">jQuery Readme</a></li>
      <li class="gnav-item"><a href="#/docs/VUE.ja.md">Vue Readme</a></li>
      <!-- <li class="gnav-item"><a href="#/samples">Samples</a></li>
      <li class="gnav-item"><a href="#/examples">Examples</a></li> -->
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
.header {
  height: 40px;
  background-color: #333;
}
.gnav {
  display: flex;
}
.gnav-item {
  padding: 0 16px;
  line-height: 40px;
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
