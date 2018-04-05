import Vue from 'vue'
import Vuex from 'vuex'
import cookieObj from '@/static/js/cookie.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    num: getAllCount() || 0,
    cartList: cookieObj.get('list') || []
  },
  mutations: {
    addCart (state, payload) {
      var listStr = cookieObj.get('list')
      if (!listStr) {
        cookieObj.set({
          name: 'list',
          value: '[]'
        })
        listStr = cookieObj.get('list')
      }
      var listObj = JSON.parse(listStr)
      if (checkObjByPid(payload.id)) {
        listObj = updateObjById(payload.id, 1)
      } else {
        var obj = {
          id: payload.id,
          price: payload.price,
          num: 1,
          img: payload.img
        }
        listObj.push(obj)
        listObj = updateData(listObj)
      }
      state.cartList = listObj
      state.num = getAllCount()
    },
    addNum (state, payload) {
      changeNum(state, payload, 1)
    },
    reduceNum (state, payload) {
      changeNum(state, payload, -1)
    },
    paySuccess (state, payload) {
      var flag = Array.isArray(state.cartList)
      var list = []
      if (!flag) {
        list = JSON.parse(state.cartList)
      } else {
        list = state.cartList
      }
      var payList = payload.payload
      var noPayList = []
      for (var i = 0, len = list.length; i < len; i++) {
        var isPay = false
        for (var j = 0, leng = payList.length; j < leng; j++) {
          if (payList[j].id === list[i].id) {
            isPay = true
            break
          }
        }
        if (!isPay) {
          noPayList.push(list[i])
        }
      }
      state.cartList = updateData(noPayList)
      state.num = getAllCount()
    }
  },
  getters: {
    getCartList: state => {
      // var flag = Object.prototype.toString.call(state.cartList)
      var flag = Array.isArray(state.cartList)
      if (!flag) {
        return JSON.parse(state.cartList)
      } else {
        return state.cartList
      }
    }
  }
})

/**
 * 判断购物车内是否有该商品
 * @param id
 * @returns 'boolean'
 */
function checkObjByPid (id) {
  var jsonStr = cookieObj.get('list')
  var jsonObj = JSON.parse(jsonStr)
  var isExist = false
  var len = jsonObj.length
  for (var i = 0; i < len; i++) {
    if (jsonObj[i].id === id) {
      isExist = true
      break
    }
  }
  return isExist
}

/*
  功能：更新本地数据
  参数：arr    数组对象
  返回一个值：最新的本地转换后的数组对象
* */
function updateData (arr) {
  var jsonStr = JSON.stringify(arr)
  cookieObj.set({
    name: 'list',
    value: jsonStr
  })
  jsonStr = cookieObj.get('list')
  return JSON.parse(jsonStr)
}

/*
    更新本地数据根据pid
    id:商品的标识
 */
function updateObjById (id, num) {
  var jsonStr = cookieObj.get('list')
  var listObj = JSON.parse(jsonStr)
  for (var i = 0, len = listObj.length; i < len; i++) {
    if (listObj[i].id === id) {
      listObj[i].num += num
      break
    }
  }
  return updateData(listObj)
}

/*
    获取购物车内数量
 */
function getAllCount () {
  var allCount = 0
  var jsonStr = cookieObj.get('list')
  if (jsonStr) {
    var listObj = JSON.parse(jsonStr)
    for (var i = 0, len = listObj.length; i < len; i++) {
      allCount += listObj[i].num
    }
  }
  return allCount
}

/*
    加减购物车
 */
function changeNum (state, payload, num) {
  var listStr = cookieObj.get('list')
  var listObj = JSON.parse(listStr)
  for (var i = 0, len = listObj.length; i < len; i++) {
    if (listObj[i].id === payload.payload.id) {
      listObj[i].num += num
      if (listObj[i].num === 0) {
        listObj.splice(i, 1)
      }
      break
    }
  }
  listObj = updateData(listObj)
  state.cartList = listObj
  state.num = getAllCount()
  return state.cartList
}

export default store
