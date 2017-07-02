<template>
  <div id="app">
      1233456
    <Hello></Hello>
  </div>
</template>

<script>
//import Hello from './components/Hello.vue'
import Hello from './views/details.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
  ,mounted(){
   // this.$message("element-ui installed");
  }
}
</script>
