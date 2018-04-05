<template>
  <div class="home">
    <h1>{{ home }}</h1>
    <LeftNav></LeftNav>
    <Main></Main>
  </div>
</template>

<script>
import LeftNav from '@/components/common/LeftNav'
import Main from '@/components/page/Main'
export default {
  name: 'home',
  data () {
    return {
      home: 'LFC'
    }
  },
  components: {
    LeftNav,
    Main
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #000;
  text-decoration: none;
}
h1{
  margin-top: 30px;
}
</style>
