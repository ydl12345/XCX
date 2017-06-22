// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
  },
  switchNav:function(e){
    var id =e.currentTarget.id;
    console.log(id)
   
    this.setData({currentTab: id});
  },

})