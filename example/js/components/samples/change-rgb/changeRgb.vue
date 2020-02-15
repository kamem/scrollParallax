<template>
<div v-if="status" class="container">
  <p class="box1" :status="status" v-parallax-fit="box1"></p>
</div>
</template>

<script>
export default {
  props: {
    status: Object
  },
  data() {
    return {
      box1:[
        {
          start: 0,
          end: 100,
          fromStyle: {
            backgroundColor: '#000' 
          },
          toStyle: {
            backgroundColor: '#ff0000' 
          },
        },
        {
          end: 'last',
          toStyle: {
            backgroundColor: '#0000ff' 
          },
        },
      ]
    }
  }
}
</script>

<style scoped>
.container {
  height: 2000px;
}
.box1 {
  width: 100px;
  height: 100px;
  position: fixed;
  top: 20px;
  left: 50%;
  margin-left: -50px;
}
</style>
