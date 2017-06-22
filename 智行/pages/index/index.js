//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    imgUrls: [
      {
        link: '/pages/',
        url: '../../images/haibao/1.jpg'
      }, {
        link: '/pages/',
        url: '../../images/haibao/2.jpg'
      }, {
        link: '/pages/',
        url: '../../images/haibao/3.jpg'
      }
    ],
    currentTab: 0,

    index: 0,
    date: '2017年6月16日',
 
    
  },

  switchNav:function(e){
    var id =e.currentTarget.id;
    var that = this;
    that.setData({currentTab: id});
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  
})  
