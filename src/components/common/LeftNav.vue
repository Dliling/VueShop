<template>
  <div class="left-nav">
    <ul class="list-nav">
      <router-link class="nav" to="/home">
        <i class="icon iconfont icon-category"></i>
        <p>列表</p>
      </router-link>
      <router-link class="nav" to="/cart">
        <i class="icon iconfont icon-cart"></i>
        <i class="num">{{num}}</i>
        <p>购物车</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import store from '@/store/store.js'
import { mapState } from 'vuex'
export default {
  name: 'leftNav',
  data () {
    return {
    }
  },
  computed: mapState(['num']),
  store
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  ul, li{
    list-style: none;
  }
  .left-nav{
    position: fixed;
    left: 0;
    top: 200px;
    background: #ccc;
    width: 60px;
  }
  .list-nav{
    font-size: 16px;
    width: 60px;
    height: 100%;
  }
  .nav{
    width: 60px;
    height: 50px;
    padding: 10px 0;
    position: relative;
    display: block;
    color: #000;
  }
  .num{
    font-style: normal;
    font-size: 14px;
    color: red;
    position: absolute;
    top: 5px;
    right: 15px;
  }
</style>
