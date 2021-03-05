<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{name:'About'}">next</router-link>
    <br>
    <br>
    <br>
    <h1 class="declaration">本網頁為練習之用，如有侵權敬請告知 聯絡:49843218lin@gmail.com</h1>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
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
  .declaration {
    width: 1000px;
  }
</style>
