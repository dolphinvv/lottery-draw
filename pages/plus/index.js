Page({
  data: {
    methods: [
      {
        id: 1,
        url: '/pages/handle/index',
        icon: '../../images/icon-handle.svg',
        label: '手动开奖',
        desc: '主持人手动开奖\n年会、晚会、线下场景使用'
      }, {
        id: 2,
        url: '/pages/auto/index',
        icon: '../../images/icon-auto.svg',
        label: '自动开奖',
        desc: '达到指定人数/指定时间\n系统自动开奖'
      }, {
        id: 3,
        url: '/pages/shake/index',
        icon: '../../images/icon-shake.svg',
        label: '摇号开奖',
        desc: '主持人分配编号\n系统随机抽取中奖号码'
      }
    ]
  },
  onLoad() {
    wx.getUserInfo({
      success: (res) => {
        let userInfo = res.userInfo;
        let nickName = userInfo.nickName;
        let avatarUrl = userInfo.avatarUrl;
        let gender = userInfo.gender; //性别 0：未知、1：男、2：女
        let province = userInfo.province;
        let city = userInfo.city;
        let country = userInfo.country;
        this.setData({
          userInfo: userInfo
        });
      }
    });
  },
  onLaunch() {
    //没有AppID，也没有开发者服务器
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: '',
            data: {
              code: res.code
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg);
        }
      }
    });
  }
});