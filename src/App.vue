<template>
  <div id="app">
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
//import Hello from './views/details.vue'
//import Hello from './components/Hello.vue'
//import Full from './views/full.vue'

export default {
  name: 'app',
  components: {
    Hello,
 //   Full
  }
  ,mounted(){
    this.$message("element-ui installed");
  }
}
</script>
 