// 各楼层详细JSON数据文件。若有楼层信息更新，请填入下列JSON数据中
// ※※※平面地图若无修改、更换，请勿改变坐标值（Coordinate）※※※
/*

{
    roomNum: "0309",      //此处为科室房间房号
    roomName: "信息机房",  //此处为房间房名
    roomDetails:
    {
      admin: '李队长',          //此处为科室房间责任人名
      del: '080-1234-5678',    //此处为科室房间电话
      info: '接待用车，公车管理'  //此处为科室房间办公内容信息
    },
    Coordinate: { x: '-2850rpx', y: '-1000rpx' } //此处为平面图定位用坐标，如无刻意改修请勿更改
  },
*/
var floorsOneGuide = [
  {
    roomNum: "0101",
    roomName: "门卫室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1300rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0102",
    roomName: "视频监控大厅",
    roomDetails:
    {
      admin: '赵总监',
      del: '080-1234-5678',
      info: '安保管理，视频监控'
    },
    Coordinate: { x: '-700rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0103",
    roomName: "物业办公室",
    roomDetails:
    {
      admin: '钱物业',
      del: '080-1234-5678',
      info: '物业管理，工程修缮'
    },
    Coordinate: { x: '-500rpx', y: '-1000rpx' }
  },
  // {
  //   roomNum: 0105,
  //   roomName: "司机办公室",
  //   Coordinate: ""
  // },
  {
    roomNum: "0105",
    roomName: "司机办公室",
    roomDetails:
    {
      admin: '孙队长',
      del: '080-1234-5678',
      info: '车队出车，通勤管理'
    },
    Coordinate: { x: '-400rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0106",
    roomName: "司机办公室",
    roomDetails:
    {
      admin: '李队长',
      del: '080-1234-5678',
      info: '接待用车，公车管理'
    },
    Coordinate: { x: '-300rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0107",
    roomName: "安防控制室",
    roomDetails:
    {
      admin: '周局长',
      del: '080-1234-5678',
      info: '大楼安防总调度'
    },
    Coordinate: { x: '-600rpx', y: '-400rpx' }
  },
  {
    roomNum: "0108",
    roomName: "自动化电池室",
    roomDetails:
    {
      admin: '吴技术总监',
      del: '080-1234-5678',
      info: '机械自动化管理室'
    },
    Coordinate: { x: '-900rpx', y: '-400rpx' }
  },
  {
    roomNum: "0109",
    roomName: "自动化机房2",
    roomDetails:
    {
      admin: '吴技术总监',
      del: '080-1234-5678',
      info: '机械自动化管理室'
    },
    Coordinate: { x: '-1700rpx', y: '-400rpx' }
  },
  {
    roomNum: "0110",
    roomName: "营销服务大厅",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-3300rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0111",
    roomName: "自动化机房1",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1700rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0112",
    roomName: "自动化UPS室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1200rpx', y: '-400rpx' }
  },
  {
    roomNum: "0113",
    roomName: "消防控制室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-500rpx', y: '-400rpx' }
  },
]
var floorsTwoGuide = [
  {
    roomNum: "0201",
    roomName: "运检设备监控室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1850rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0202",
    roomName: "应急指挥中心",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1600rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0211",
    roomName: "供电服务指挥中心控制室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-680rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0212",
    roomName: "供电服务指挥大厅",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-400rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0213",
    roomName: "会议室控制室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-200rpx', y: '-400rpx' }
  },
  {
    roomNum: "0215",
    roomName: "供电服务指挥中心办公室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-530rpx', y: '-400rpx' }
  },
  {
    roomNum: "0217",
    roomName: "自动化终端控制室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1100rpx', y: '-400rpx' }
  },
  {
    roomNum: "0218",
    roomName: "自动化值班室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1200rpx', y: '-400rpx' }
  },
  {
    roomNum: "0219",
    roomName: "应急会商室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1600rpx', y: '-400rpx' }
  },
  {
    roomNum: "0220",
    roomName: "应急控制室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1700rpx', y: '-400rpx' }
  },
  {
    roomNum: "0221",
    roomName: "应急设备间",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1900rpx', y: '-400rpx' }
  },
  {
    roomNum: "0222",
    roomName: "自动化工器具室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-2000rpx', y: '-400rpx' }
  },
  {
    roomNum: "0223",
    roomName: "DTS导演室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-2000rpx', y: '0rpx' }
  },
  {
    roomNum: "0225",
    roomName: "DTS指挥观摩室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-2100rpx', y: '0rpx' }
  },
  {
    roomNum: "0226",
    roomName: "DTS仿真实训室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-2200rpx', y: '0rpx' }
  },
  {
    roomNum: "0227",
    roomName: "电力调度控制中心",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-2200rpx', y: '-400rpx' }
  },
  {
    roomNum: "0228",
    roomName: "备用设备室",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-2000rpx', y: '-1000rpx' }
  },
]
var floorsTreGuide = [
  {
    roomNum: "0301",
    roomName: "通信机房",
    roomDetails:
    {
      admin: '张门卫',
      del: '080-1234-5678',
      info: '内勤，安保，访问登记'
    },
    Coordinate: { x: '-1500rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0302",
    roomName: "信息通信分公司办公室",
    roomDetails:
    {
      admin: '赵总监',
      del: '080-1234-5678',
      info: '安保管理，视频监控'
    },
    Coordinate: { x: '-500rpx', y: '-1000rpx' }
  },
  {
    roomNum: "0303",
    roomName: "信息通信分公司办公室",
    roomDetails:
    {
      admin: '钱物业',
      del: '080-1234-5678',
      info: '物业管理，工程修缮'
    },
    Coordinate: { x: '-300rpx', y: '-1000rpx' }
  },

  {
    roomNum: "0305",
    roomName: "信息通信分公司办公室",
    roomDetails:
    {
      admin: '孙队长',
      del: '080-1234-5678',
      info: '车队出车，通勤管理'
    },
    Coordinate: { x: '-550rpx', y: '-400rpx' }
  },
  {
    roomNum: "0306",
    roomName: "信息通信分公司电源室",
    roomDetails:
    {
      admin: '李队长',
      del: '080-1234-5678',
      info: '接待用车，公车管理'
    },
    Coordinate: { x: '-900rpx', y: '-400rpx' }
  },
  {
    roomNum: "0307",
    roomName: "信息通信分公司电池室",
    roomDetails:
    {
      admin: '李队长',
      del: '080-1234-5678',
      info: '接待用车，公车管理'
    },
    Coordinate: { x: '-1200rpx', y: '-400rpx' }
  },
  {
    roomNum: "0308",
    roomName: "信调大厅",
    roomDetails:
    {
      admin: '李队长',
      del: '080-1234-5678',
      info: '接待用车，公车管理'
    },
    Coordinate: { x: '-1800rpx', y: '-400rpx' }
  },
  {
    roomNum: "0309",
    roomName: "信息机房",
    roomDetails:
    {
      admin: '李队长',
      del: '080-1234-5678',
      info: '接待用车，公车管理'
    },
    Coordinate: { x: '-1800rpx', y: '-1000rpx' }
  },
]

module.exports = {
  floorsOneGuide: floorsOneGuide,
  floorsTwoGuide: floorsTwoGuide,
  floorsTreGuide: floorsTreGuide
}