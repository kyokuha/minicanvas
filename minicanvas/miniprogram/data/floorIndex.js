// 外楼层JSON数据文件。若有楼层信息更新，请填入下列JSON数据中
/*
{
    floorNum: 1,                              //此处为楼层号
    floorMap: '../../assets/1F.png',          //此处为楼层平面图资源，如无刻意改修请勿修改
    floorInfo: [
      { subfloorNum: 1, floorName: "视频监控大厅 物业服务  营销服务大厅", }, // 此处为楼层信息
      { subfloorNum: 2, floorName: "电力调度控制中心大厅" }               // 此处为楼层信息
    // 如楼层信息有多余，请按上述格式升顺顺序增加
    { subfloorNum: 3, floorName: "多功能XXXXX" } 
    { subfloorNum: 4, floorName: "多功能2XXX" } 
  
    ]
  },
*/
var floorsIndexJson = [
  {
    floorNum: 1,
    floorMap: '../../assets/1F.png',
    floorInfo: [
      { subfloorNum: 1, floorName: "视频监控大厅 物业服务  营销服务大厅", },
      { subfloorNum: 2, floorName: "电力调度控制中心大厅" }
    ]
  },
  {
    floorNum: 2,
    floorMap: '../../assets/2F.png',
    floorInfo: [
      { subfloorNum: 1, floorName: "应急指挥中心 供电服务指挥大厅 会议室" }
    ],
  },
  {
    floorNum: 3,
    floorMap: '../../assets/3F.png',
    floorInfo: [
      { subfloorNum: 1, floorName: "信息通信分公司 信调大厅 会议室" }]
  },
  // {
  //   floorNum: 4,
  //   floorMap: '../../assets/1F.png',
  //   floorInfo: [
  //     { subfloorNum: 1, floorName: "活动室 职工书屋 档案室" }
  //   ]
  // },
  // {
  //   floorNum: 5,
  //   floorInfo: [
  //     { subfloorNum: 1, floorName: "配电网 综合服务中心 多媒体教室" }
  //   ]
  // },
  // {
  //   floorNum: 6,
  //   floorInfo: [
  //     { subfloorNum: 1, floorName: "审计部 物资供应中心 市场营销部" }
  //   ]
  // },
  // {
  //   floorNum: 7,
  //   floorInfo: [
  //     { subfloorNum: 1, floorName: "安全监察部 运检技术部 电力调度控制中心" }
  //   ]
  // },
  // {
  //   floorNum: 8,
  //   floorInfo: [
  //     { subfloorNum: 1, floorName: "党委党建部 纪委" }
  //   ]
  // },
  // {
  //   floorNum: 9,
  //   floorInfo: [
  //     { subfloorNum: 1, floorName: "党委办公室 财务资产部 会计核算中心" },
  //     { subfloorNum: 2, floorName: "廉洁教育展厅 企业文化展厅 党员之家" }
  //   ]
  // },
  // {
  //   floorNum: 10,
  //   floorInfo: [
  //     { subfloorNum: 1, floorName: "建设部 发展策划部 党委组织部" }
  //   ]
  // },
]

module.exports = {
  floorsIndexJson: floorsIndexJson
}