
let config = {
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onShow: function () {
    // Do something when page show.
  },
  onReady: function () {
    // Do something when page ready.
    this.data.roomdata.roomsInfo.map(e => {
      this.sliderightshow(this, -150, 1)
      this.sleep(100)
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
  tapName(e) {
    // this.tapZoom()
    console.warn(this.data.scale)
    let idx = e.currentTarget.dataset.src
    console.warn('......[ans]', idx)
    console.warn('.....asdsad', this)
    let newX = this.data.roomdata.roomsInfo[idx].roomFunc.x
    let newY = this.data.roomdata.roomsInfo[idx].roomFunc.y
    this.setData({
      onBrowsing: true,
      // scale: 5,
      x: newX,
      y: newY,
    })
  },
  tapZoom(param) {
    if (param) {
      this.setData({
        scale: 1
      })
    } else {
      this.setData({
        scale: 2
      })
    }
  },
  data: {
    animeList: [],
    scale: 1,
    onBrowsing: false,
    stdInfo: [
      {
        name: "lostexin",
        age: 21,
        gender: "m",
        title: "1F楼层题目导航",
        floorPicArray: "../../assets/2F.png"
      },
    ],
    roomdata: {
      roomsInfo: [
        {
          roomNum: "0101",
          roomName: "门卫室",
          roomFunc: { x: -70, y: 0 }
        },
        {
          roomNum: "0102",
          roomName: "视频监控大厅",
          roomFunc: { x: -300, y: 0 }
        },
        {
          roomNum: "0103",
          roomName: "物业办公室",
          roomFunc: { x: -400, y: 0 }
        },
        // {
        //   roomNum: 0105,
        //   roomName: "司机办公室",
        //   roomFunc: ""
        // },
        {
          roomNum: "0105",
          roomName: "司机办公室",
          roomFunc: { x: -500, y: 0 }
        },
        {
          roomNum: "0106",
          roomName: "司机办公室",
          roomFunc: { x: -600, y: 0 }
        },
        {
          roomNum: "0107",
          roomName: "安防控制室",
          roomFunc: { x: -700, y: 0 }
        },
        {
          roomNum: "0108",
          roomName: "自动化电池室",
          roomFunc: { x: -800, y: 0 }
        },
        {
          roomNum: "0109",
          roomName: "自动化机房2",
          roomFunc: { x: -900, y: 0 }
        },
        {
          roomNum: "0110",
          roomName: "营销服务大厅",
          roomFunc: { x: -1000, y: 0 }
        },
        {
          roomNum: "0111",
          roomName: "自动化机房1",
          roomFunc: { x: -1100, y: 0 }
        },
        {
          roomNum: "0112",
          roomName: "自动化UPS室",
          roomFunc: { x: -1200, y: 0 }
        },
        {
          roomNum: "0113",
          roomName: "消防控制室",
          roomFunc: { x: -1300, y: 0 }
        },
      ]
    },
  },
  sliderightshow: function (that, px, opacity) {
    var animation = wx.createAnimation({
     duration: 800,
     timingFunction: 'ease',
    });

    animation.translateX(px).opacity(opacity).step()
    let newArray = that.data.animeList
    let animeItem = animation.export()
    newArray.push(animeItem)

    that.setData({
      animeList: newArray
    })
    //设置动画
   },
   sleep: function (numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime)
        return;
    }
  }
}

Page(config)