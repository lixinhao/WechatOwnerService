// pages/viewPersonFace/viewPersonFace.js
const context = require("../../context/Java110Context.js");
const constant = context.constant;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      face:null,
      btnValue:"采集人脸"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        face:''
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      this.loadOwnerFace();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  collectFace:function(){
    //采集人脸
    console.log('采集人脸');
    wx.navigateTo({
      url: '/pages/collectFace/collectFace',
    })
  },
  /**
   * 查询业主人脸
   */
  loadOwnerFace:function(){
    let _that = this;
    context.getOwner(function(_owner){
      let _face = constant.url.getOwnerPhotoPath + "?objId=" + _owner.memberId+"&communityId="+_owner.communityId+"&fileTypeCd=10000&time=" + new Date();
      _that.setData({
        face: _face
      });
    });
  }
})