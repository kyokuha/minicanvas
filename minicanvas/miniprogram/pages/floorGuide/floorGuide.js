
let config = {
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onShow: function () {
    // Do something when page show.
  },
  onReady: function () {
    // Do something when page ready.
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
    scale: 2,
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
          roomFunc: { x: 170, y: -65 }
        },
        {
          roomNum: "0102",
          roomName: "视频监控大厅",
          roomFunc: { x: 170, y: -100 }
        },
        {
          roomNum: "0103",
          roomName: "物业办公室",
          roomFunc: { x: 170, y: -150 }
        },
        // {
        //   roomNum: 0105,
        //   roomName: "司机办公室",
        //   roomFunc: ""
        // },
        {
          roomNum: "0105",
          roomName: "司机办公室",
          roomFunc: { x: 0, y: -150 }
        },
        {
          roomNum: "0106",
          roomName: "司机办公室",
          roomFunc: { x: -100, y: -150 }
        },
        {
          roomNum: "0107",
          roomName: "安防控制室",
          roomFunc: { x: -200, y: -150 }
        },
        {
          roomNum: "0108",
          roomName: "自动化电池室",
          roomFunc: { x: -300, y: -150 }
        },
        {
          roomNum: "0109",
          roomName: "自动化机房2",
          roomFunc: { x: -400, y: -150 }
        },
        {
          roomNum: "0110",
          roomName: "营销服务大厅",
          roomFunc: { x: -400, y: -100 }
        },
        {
          roomNum: "0111",
          roomName: "自动化机房1",
          roomFunc: { x: -400, y: -65 }
        },
        {
          roomNum: "0112",
          roomName: "自动化UPS室",
          roomFunc: { x: -400, y: -65 }
        },
        {
          roomNum: "0113",
          roomName: "消防控制室",
          roomFunc: { x: -400, y: -65 }
        },
      ]
    },
  }
}

Page(config)