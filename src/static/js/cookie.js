const cookieObj = {
  set: function (o) {
    var cookieStr = encodeURIComponent(o.name) + '=' + encodeURIComponent(o.value)
    if (o.expires) {
      cookieStr += ';expires=' + o.expires
    }
    if (o.path) {
      cookieStr += ';path=' + o.path
    }
    if (o.domain) {
      cookieStr += ';domain=' + o.domain
    }
    if (o.secure) {
      cookieStr += ';secure'
    }
    document.cookie = cookieStr
  },
  del: function (n) {
    var date = new Date()
    date.setHours(-1)
    console.log(this)
    this.set({
      name: n,
      expires: date
    })
  },
  get: function (n) {
    n = encodeURIComponent(n)
    var cooikeTotal = document.cookie
    var cookies = cooikeTotal.split('; ')
    for (var i = 0, len = cookies.length; i < len; i++) {
      var arr = cookies[i].split('=')
      if (n === arr[0]) {
        return decodeURIComponent(arr[1])
      }
    }
  }
}
export default cookieObj
