<template>
  <el-row>
    <el-col :span="20">
      <el-tabs v-model="activeName">
        <el-tab-pane label="汉堡" name="first">
          <el-table
            :data="hamburgers"
            style="width: 100%">
            <el-table-column
              prop="goodsImg"
              label="图片"
              width="180">
              <template slot-scope="scope">
                <img :src="scope.row.goodsImg" alt="" style="width: 80px;height: 80px;"/>
              </template>
            </el-table-column>
            <el-table-column
              prop="goodsId"
              label="ID"
              width="50">
            </el-table-column>
            <el-table-column
              prop="goodsName"
              label="名称">
            </el-table-column>
            <el-table-column
              prop="price"
              label="价格(¥)">
              <template slot-scope="scope">
                <p>¥{{scope.row.price}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="addCart(scope.row.goodsId, scope.row.price, scope.row.goodsImg)">加入购物车</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="饮料" name="third">
          <el-table
            :data="drinks"
            style="width: 100%">
            <el-table-column
              prop="goodsImg"
              label="图片"
              width="180">
              <template slot-scope="scope">
                <img :src="scope.row.goodsImg" alt="" style="width: 80px;height: 80px;"/>
              </template>
            </el-table-column>
            <el-table-column
              prop="goodsId"
              label="ID"
              width="50">
            </el-table-column>
            <el-table-column
              prop="goodsName"
              label="名称">
            </el-table-column>
            <el-table-column
              prop="price"
              label="价格(¥)">
              <template slot-scope="scope">
                <p>¥{{scope.row.price}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="addCart(scope.row.goodsId, scope.row.price, scope.row.goodsImg)">加入购物车</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
import store from '@/store/store.js'
// import { mapMutations } from 'vuex'

export default {
  name: 'List',
  data () {
    return {
      activeName: 'first',
      hamburgers: [],
      drinks: []
    }
  },
  created () {
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(res => {
        this.hamburgers = res.data[0].concat(res.data[1])
        this.drinks = res.data[2]
        this.meals = res.data[3]
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    addCart (id, price, img) {
      this.$store.commit({
        type: 'addCart',
        id: id,
        price: price,
        img: img
      })
    }
    // ...mapMutations(['add']),
  },
  store
}

</script>

<style>
.mr30{
  margin-right: 30px;
}
.mr50{
  margin-right: 50px;
}
.mr70{
  margin-right: 70px;
}
.el-tabs__nav{
  width: 100%;
}
.el-tabs__item{
  width: 50%;
  padding: 0;
}
th{
  text-align: center!important;
}
.food-li{
  text-align: left;
  margin-bottom: 20px;
}
.goodsImg{
  width: 80px;
  height: 80px;
}
</style>
