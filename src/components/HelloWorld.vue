<template>
  <div class="hello">
    <router-link to="/home">{{ msg }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Vue Demo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #000;
  text-decoration: none;
  font-size: 50px;
}
.hello{
  margin-top: 100px;
}
</style>
