let config = {
  data: {
    animeList: [],

  },
  onLoad: function (options) {
    // Do some initialize when page load.
    this.setData ({
      floorsIndex: indexJson.floorsIndexJson
    })
    console.warn('......[]', this.data.floorsIndex)
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
    let fl = e.currentTarget.dataset.src
    console.warn('......[TEST FL]', fl)
    let targetURL = '../floorGuide/floorGuide?floor_num=' + fl
    wx.navigateTo({
      url: targetURL,
    })
  },
}

var indexJson = require('../../data/floorIndex')
Page(config)