<template>
  <div id="app">
    <el-button type="success">ElementUI</el-button>

    <Hello></Hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

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
