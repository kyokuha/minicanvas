
let config = {
  data: {
    anime: '',
    animeZoom: '',
    scale: 1,
    onBrowsing: false,
    firstRoom: '',
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
      // scale: 1,
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
    this.setData({
      // handleScale: 3,
      x: newX,
      y: newY,
    })
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
      x: '0rpx',
      y: '0rpx',
      onBrowsing: false,
      firstRoom: 'first_room'
    })
  },
  scaleAnime: function (param) {
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });

    animation.scale(param).step()
    this.setData({animeZoom: animation.export()})
  },
}

var indexJson = require('../../data/floorIndex')
var guideJson = require('../../data/floorGuide')
Page(config)  