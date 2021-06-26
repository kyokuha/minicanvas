let config = {
  data: {
    animeList: [],
    floorsIndex: [
      {
        floorNum: 1,
        floorInfo: [
          { subfloorNum: 1, floorName: "视频监控大厅 物业服务  营销服务大厅" },
          { subfloorNum: 2, floorName: "电力调度控制中心大厅" }
        ]
      },
      {
        floorNum: 2,
        floorInfo: [
          { subfloorNum: 1, floorName: "应急指挥中心 供电服务指挥大厅 会议室" }
        ],
      },
      {
        floorNum: 3,
        floorInfo: [
          { subfloorNum: 1, floorName: "信息通信分公司 信调大厅 会议室" }]
      },
      {
        floorNum: 4,
        floorInfo: [
          { subfloorNum: 1, floorName: "活动室 职工书屋 档案室" }
        ]
      },
      {
        floorNum: 5,
        floorInfo: [
          { subfloorNum: 1, floorName: "配电网 综合服务中心 多媒体教室" }
        ]
      },
      {
        floorNum: 6,
        floorInfo: [
          { subfloorNum: 1, floorName: "审计部 物资供应中心 市场营销部" }
        ]
      },
      {
        floorNum: 7,
        floorInfo: [
          { subfloorNum: 1, floorName: "安全监察部 运检技术部 电力调度控制中心" }
        ]
      },
      {
        floorNum: 8,
        floorInfo: [
          { subfloorNum: 1, floorName: "党委党建部 纪委" }
        ]
      },
      {
        floorNum: 9,
        floorInfo: [
          { subfloorNum: 1, floorName: "党委办公室 财务资产部 会计核算中心" },
          { subfloorNum: 2, floorName: "廉洁教育展厅 企业文化展厅 党员之家" }
        ]
      },
      {
        floorNum: 10,
        floorInfo: [
          { subfloorNum: 1, floorName: "建设部 发展策划部 党委组织部" }
        ]
      },
    ],
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onShow: function () {
    // Do something when page show.
  },
  onReady: function () {
    // Do something when page ready.
    this.data.floorsIndex.map(e => {
      this.slideupshow(this, 0, 1)
      this.sleep(300)
    })
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onResize: function () {
    // Do something when page resize
  },
  slideupshow: function (that, px, opacity) {
    console.warn('......[run once]')
    var that = this
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    animation.translateY(px).opacity(opacity).step()

    let newArray = that.data.animeList
    let animeItem = animation.export()
    newArray.push(animeItem)

    that.setData({
      animeList: newArray
    })
  },
  sleep: function (numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime)
        return;
    }
  },
  tapName(e) {
    // this.tapZoom()
    console.warn(e.currentTarget.dataset)
    let fl = e.currentTarget.dataset
    let targetURL = '../floorGuide/floorGuide?floor_num=' + fl
    wx.navigateTo({
      url: targetURL,
    })
  },
}

Page(config)