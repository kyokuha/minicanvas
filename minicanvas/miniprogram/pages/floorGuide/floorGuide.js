
let config = {
  data: {
    anime: '',
    pinAnime: '',
    scale: 1,
    onBrowsing: false,
    firstRoom: '',
    scalehandle: 3,
    pinleft: 0,
    pinbottom: 0
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    let jsonGuide = ''
    let jsonIndex = ''
    if (options) {
      jsonIndex = indexJson.floorsIndexJson[options.floor_num]
      switch (options.floor_num) {
        case '0':
          jsonGuide = guideJson.floorsOneGuide
          break
        case '1':
          jsonGuide = guideJson.floorsTwoGuide
          break
        case '2':
          jsonGuide = guideJson.floorsTreGuide
          break
      }
    }
    this.setData({
      scalehandle: 1,
      roomsInfo: jsonGuide,
      indexInfo: jsonIndex
    })
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
    if (!this.data.onBrowsing) {
      this.showScaleBtn(true)
      this.setData({
        onBrowsing: true,
      })
    }
    let idx = e.currentTarget.dataset.src
    let newX = this.data.roomsInfo[idx].Coordinate.x
    let newY = this.data.roomsInfo[idx].Coordinate.y
    let pinL = this.data.roomsInfo[idx].pinCoordinate.left
    let pinB = this.data.roomsInfo[idx].pinCoordinate.bottom
    this.setData({
      // handleScale: 3,
      x: newX,
      y: newY,
      pinleft: pinL,
      pinbottom: pinB
    })
    this.pinInAnimation()
  },
  showScaleBtn: function (state) {
    let that = this
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    if (state) {
      animation.height('50rpx').backgroundColor('#808A87').step()
    } else {
      animation.height('0rpx').backgroundColor('#FFFFFF').step()
    }
    let animeItem = animation.export()
    that.setData({
      anime: animeItem
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
  },
  scaleZoomOut() {
    this.showScaleBtn(false)
    this.setData({
      scalehandle: 3,
      x: '0rpx',
      y: '0rpx',
      onBrowsing: false,
      firstRoom: 'first_room'
    })
    this.sleep(100)
    this.setData({
      scalehandle: 1,
    })
  },
  pinInAnimation: function () {
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });

    animation.bottom(this.data.pinbottom).left(this.data.pinleft).step()
    this.setData({pinAnime: animation.export()})
  },
}

var indexJson = require('../../data/floorIndex')
var guideJson = require('../../data/floorGuide')
Page(config)  