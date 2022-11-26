// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    latitude: 39.908860,
    longitude: 116.397390,
    markers: [],
    map: null
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  toReset() {
    this.data.map.moveToLocation();
  },

  // 生命周期
  onShow() {
    // 资源都加载完了，已经显示
    // map 可见
    this.data.map = wx.createMapContext('myMap')
  },

  onLoad() {
    wx.showLoading({
      title: '加载中...'
    })
    wx.getLocation({
      type: 'gcj02',
      // 箭头函数 可以不用写function
      success: (res) => {
        wx.hideLoading()
        // console.log(res,'////');
        // es6 的解构 数组 jason对象
        // es6 漂亮的语法 数据中的一部分解析出来 并成为局部变量
        let {latitude, longitude} =res; // json
        this.setData({
          latitude: latitude,
          longitude: longitude
        })
        // 模块化
        this.tocreate(res);
      }
    })
  },

  // 附近的单车
  tocreate(res) {
    let ran = Math.ceil(Math.random()*5+5);
    // console.log(Math.random());
    let markers = [];
    for(let i = 0; i < ran; i ++) {
      let obj = {
        id: i,
        iconPath: '/images/map-bicycle.png',
        callout: {},
        latitude: this.data.latitude + (0.5 - Math.random())/1000,
        longitude: this.data.longitude + (0.5 - Math.random())/1000,
        with: 52,
        height: 30
      }
    markers.push(obj)
    }
    this.setData({
      markers: markers
    })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
