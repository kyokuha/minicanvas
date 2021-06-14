
let config = {
    tapName(e) {
      console.warn('......[Tap]', e.target.dataset.src)
      let ans = e.target.dataset.src
      if (ans === "true") {
        console.warn('true here')
        this.setData({
          x: -500,
          y: -500,
        })
      } else {
        console.warn('false here')
        this.setData({
          x: 0,
          y: 0,
        })
      }

    },
  data: {
    x: 0,
    y: 0,
    stdInfo: [
      {
        name: "lostexin",
        age: 21,
        gender: "m",
        title: "1F楼层题目导航",
        floorPicArray: "../../assets/1F.png"
      },
    ],
    roomdata: {
      roomsInfo: [
        {
          roomNum: 1,
          roomName: "科长室",
          roomFunc: "科长日常工作办公室"
        },
        {
          roomNum: 2,
          roomName: "阅览室",
          roomFunc: "日常文献编纂阅览工作室"
        },
        {
          roomNum: 3,
          roomName: "会議室",
          roomFunc: "定例会議を行う室"
        },
        {
          roomNum: 4,
          roomName: "会議室",
          roomFunc: "定例会議を行う室"
        },
        {
          roomNum: 5,
          roomName: "会議室",
          roomFunc: "定例会議を行う室"
        },
        {
          roomNum: 6,
          roomName: "会議室",
          roomFunc: "定例会議を行う室"
        },
        {
          roomNum: 7,
          roomName: "会議室",
          roomFunc: "定例会議を行う室"
        },
        {
          roomNum: 8,
          roomName: "会議室",
          roomFunc: "定例会議を行う室"
        },
      ]
    },
  }
}

Page(config)