Page({
  /**
   * 页面的初始数据
   */
  data: {
    theme: null,
    prizeList: [
      {
        name: null,
        number: null,
        perNumber: null
      }, {
        name: null,
        number: null,
        perNumber: null
      }, {
        name: null,
        number: null,
        perNumber: null
      }
    ],
    onlyGroupJoin: false
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
  /**
   * 增加奖项
   */
  handlePlus() {
    let prizeList = this.data.prizeList;
    prizeList.push({
      name: null,
      number: null,
      perNumber: null
    });
    this.setData({
      prizeList: prizeList
    });
  },
  /**
   * 删除奖项
   */
  handleReduce(e) {
    let idx = e.currentTarget.dataset.index;
    let prizeList = [];
    this.data.prizeList.forEach((item, index) => {
      if(index !== idx) {
        prizeList.push(item);
      }
    });
    this.setData({
      prizeList: prizeList
    });
  },
  handleThemeInput(e) {
    this.setData({
      theme: e.detail.value
    });
  },
  /**
   * 输入监听
   */
  handleInput(e) {
    let idx = e.currentTarget.dataset.index;
    let name = e.currentTarget.dataset.name;
    let prizeList = this.data.prizeList;
    let value = name !== name ? parseInt(e.detail.value) : e.detail.value;
    prizeList[idx][name] = value;
    this.setData({
      prizeList: prizeList
    });
  },
  handleChange(e) {
    this.setData({
      onlyGroupJoin: !this.data.onlyGroupJoin
    })
  },
  /**
   * 提交订单
   */
  handleSubmit(e) {
    if (this.data.theme === null || this.data.theme === '') {
      this.showModal('抽奖主题不能为空');
      return false;
    }
    this.data.prizeList.forEach((item, index) => {
      if(item.name === null || item.name === '') {
        this.showModal('奖项设置不能留空');
        return false;
      }
      if (item.number === null || item.number === 0) {
        this.showModal('中奖人数不能留空且不能为0');
        return false;
      }
      if (item.perNumber === null || item.perNumber === 0) {
        this.showModal('每次抽中人数不能留空且不能为0');
        return false;
      }
      if (item.perNumber - item.number > 0) {
        this.showModal('奖项设置每次抽中人数不能大于中奖人数');
        return false;
      }
	  console.log('表单验证成功...');
    });
  },
  showModal(tips) {
    wx.showModal({
      title: '提示',
      content: tips,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
  }
});