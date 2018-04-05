<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default ({
  name: 'Main',
  data () {
    return {
      main: 'main'
    }
  }
})
</script>

<style>
.main{
  padding: 50px;
  position: relative;
  left: 90px;
}
</style>
