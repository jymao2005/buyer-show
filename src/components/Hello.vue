<template>
  <div id="hello">
    <p :key="cmt" v-for="cmt in rateList">{{cmt.rateContent}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      comments:{}
    }
  },
  computed:{
    rateList(){
        return this.comments && this.comments.rateList;
    }
  },
  async mounted(){
    this.comments = await this.$api.getComments({pageIdx:3});

  }
}
</script>

<style scoped lang='scss'>
#hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
