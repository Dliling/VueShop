<template>
  <div class="hello">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 80%; margin-left: 70px"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="img"
        label="图片"
        width="180">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" style="width: 80px;height: 80px;"/>
        </template>
      </el-table-column>
      <el-table-column
        label="id"
        width="120">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格(¥)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量"
        width="120">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="addNum(scope.row)">+</el-button>
          <el-button size="mini" @click="reduceNum(scope.row)">-</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="total" v-if="$store.state.num">
      <span class="mr30">数量：{{selectedNum}}</span>
      <span class="mr30">金额：{{selectedPay}}</span>
      <el-button size="mini" @click="pay">结算</el-button>
    </div>
  </div>
</template>

<script>
import store from '@/store/store.js'
// import { mapGetters } from 'vuex';
export default {
  name: 'Cart',
  data () {
    return {
      selectedNum: 0,
      selectedPay: 0,
      selectedArray: []
    }
  },
  computed: {
    tableData () {
      return this.$store.getters.getCartList
    }
  },
  methods: {
    // 复选框
    handleSelectionChange (val) {
      this.selectedNum = 0
      this.selectedPay = 0
      for (var i = 0, len = val.length; i < len; i++) {
        this.selectedNum += val[i].num
        this.selectedPay += val[i].num * val[i].price
      }
      this.selectedArray = val
    },
    // 加数量
    addNum (obj) {
      this.$store.commit({
        type: 'addNum',
        payload: obj
      })
    },
    // 减数量
    reduceNum (obj) {
      this.$store.commit({
        type: 'reduceNum',
        payload: obj
      })
    },
    // 结算
    pay () {
      if (this.selectedNum > 0) {
        this.selectedNum = 0
        this.selectedPay = 0
        this.$store.commit({
          type: 'paySuccess',
          payload: this.selectedArray
        })
        this.$message({
          message: '您已结算成功，请继续购物～',
          type: 'success'
        })
      } else {
        this.$message({
          message: '请先选择结算的商品～',
          type: 'warning'
        })
      }
    }
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #000;
  text-decoration: none;
  font-size: 50px;
}
th{
  text-align: center!important;
}
.total{
  margin-top: 30px;
}
.mr30{
  margin-right: 30px;
}
</style>
