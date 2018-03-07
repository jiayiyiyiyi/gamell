/*精灵相关的 数据全部在这写
需要加载的精灵  坐标 阴影
选择错误替换精灵
声音提示
resdata=  统一使用变量
数据统一建值
*/
/* 字段 统一
* sprUrl sprUrlY
* 精灵坐标sp_X sp_Y
* 阴影坐标sp_Xy sp_Yy
* 选择作物精灵 errorSp
* 个性声音 audioP
* 答案 data
* 其他不确定字段 需要备注
* */
var common_data=[
    {id:0,obtain:0,taoal:6},
    {id:1,obtain:0,taoal:1},
    {id:2,obtain:0,taoal:1},
    {id:3,obtain:0,taoal:1},
    {id:4,obtain:0,taoal:1},
    {id:5,obtain:0,taoal:1}
]
var arrsubject=[
    [
        [{url:res.China,id:0},{url:res.America,id:1},{url:res.British,id:2},{url:res.Egypt,id:3},{url:res.France,id:4}],
        [{url:res.Backk,id:0},{url:res.Backk,id:1},{url:res.Backk,id:2},{url:res.Backk,id:3},{url:res.Backk,id:4}],
        [{x:108,y:278},{x:236,y:278},{x:365,y:278},{x:492,y:278},{x:626,y:278}],
        [{x:108,y:137},{x:236,y:137},{x:365,y:137},{x:492,y:137},{x:626,y:137}],
        [{x:108,y:207},{x:236,y:207},{x:365,y:207},{x:492,y:207},{x:626,y:207}],

    ],
    [
        [{url:res.WordChina,x:332,y:348},{url:res.ChinaFlagCompleted,x:206,y:115}],
        [
            {url:res.StarOne,x:229,y:251,id:0,name:"big"},
            {url:res.StarTwo,x:305,y:300,id:1,name:"small"},
            {url:res.StarThree,x:325,y:278,id:2,name:"small"},
            {url:res.StarFour,x:326,y:247,id:3,name:"small"},
            {url:res.StarFive,x:305,y:224,id:4,name:"small"}
        ],
        [
            {url:res.BottomstarOneAll,id:0,name:"big",urly:res.BottomstarOne},
            {url:res.BottomstarTwoAll,id:1,name:"small",urly:res.BottomstarTwo},
            {url:res.BottomstarThreeAll,id:2,name:"small",urly:res.BottomstarThree},
            {url:res.BottomstarFourAll,id:3,name:"small",urly:res.BottomstarFour},
            {url:res.BottomstarFiveAll,id:4,name:"small",urly:res.BottomstarFive}
        ],
        [{x:141,y:26},{x:251,y:26},{x:360,y:26},{x:468,y:26},{x:566,y:26}]
    ],
    [
        [{url:res.WordAmerica,x:332,y:348},{url:res.AmericaOutline,x:208,y:115}],
        [
            {url:res.BottomFlagThreeBig,x:208,y:224,id:0,name:"three"},
            {url:res.BottomFlagTwoBig,x:316,y:224,id:1,name:"two"},
            {url:res.BottomFlagFourBig,x:398,y:224,id:2,name:"four"},
            {url:res.BottomFlagOneBig,x:208,y:115,id:3,name:"one"},
            {url:res.BottomFlagSixBig,x:286,y:115,id:4,name:"six"},
            {url:res.BottomFlagFiveBig,x:428,y:115,id:5,name:"five"},
        ],
        [
            {url:res.BottomflagThreeAll,id:0,urly:res.BottomFlagThreeBig,name:"three"},
            {url:res.BottomflagTwoAll,id:1,urly:res.BottomFlagTwoBig,name:"two"},
            {url:res.BottomflagFourAll,id:2,urly:res.BottomFlagFourBig,name:"four"},
            {url:res.BottomflagOneAll,id:3,urly:res.BottomFlagOneBig,name:"one"},
            {url:res.BottomflagSixAll,id:4,urly:res.BottomFlagSixBig,name:"six"},
            {url:res.BottomflagFiveAll,id:5,urly:res.BottomFlagFiveBig,name:"five"},
        ],
        [{x:75,y:23},{x:175,y:23},{x:275,y:23},{x:375,y:23},{x:475,y:23},{x:575,y:23},]
    ],
    [
        [
            {url:res.WordBritish,x:330,y:348},
            {url:res.BritishFlag,x:203,y:110},
            {url:res.BritishFlagCompleted,x:203,y:110},
            {url:res.BritishOutline,x:203,y:110,id:0,name:"right"}
        ],
        [
            {url:res.BottompatternThreeAll,id:0,name:"right",urly:res.BottompatternThree},
            {url:res.BottompatternOneAll,id:1,name:"wrong",urly:res.BottompatternOne},
            {url:res.BottompatternTwoAll,id:2,name:"wrong",urly:res.BottompatternTwo}
        ],
        [{x:140,y:24},{x:329,y:23},{x:521,y:24}]
    ],
    [
        [{url:res.WordEgypt,x:329,y:348},{url:res.EgyptFlagCompleted,x:211,y:105}],
        [
            {url:res.EgyptOutlineOne,x:211,y:250,id:0,name:"red"},
            {url:res.EgyptOutlineTwo,x:212,y:176,id:1,name:"glod"},
            {url:res.EgyptOutlineOne,x:211,y:105,id:2,name:"black"},
        ],
        [
            {url:res.BottomcolorTwoAll,id:0,x:149,y:41,urly:res.BottomcolorTwo,name:"red"},
            {url:res.BottomcolorThreeAll,id:1,x:513,y:32,urly:res.BottomcolorThree,name:"glod"},
            {url:res.BottomcolorOneAll,id:2,x:331,y:41,urly:res.BottomcolorOne,name:"black"},
        ]
    ],
    [
        [{url:res.WordFrance,x:330,y:349},{url:res.FranceFlagCompleted,x:211,y:118}],
        [
            {url:res.FranceOutlineOne,x:418,y:118,id:0,name:"red"},
            {url:res.FranceOutlineTwo,x:314,y:118,id:1,name:"white"},
            {url:res.FranceOutlineOne,x:211,y:118,id:2,name:"blue"},
        ],
        [
            {url:res.BottomcolorSixAll,id:0,urly:res.BottomcolorSix,name:"blue"},
            {url:res.BottomcolorFiveAll,id:1,urly:res.BottomcolorFive,name:"white"},
            {url:res.BottomcolorFourAll,id:2,y:41,urly:res.BottomcolorFour,name:"red"},
        ],
        [{x:193,y:28},{x:350,y:28},{x:508,y:28}]
    ]
]

var updata = {
    task_id: '28bab1aa3b474bcd9ee73abd1dfddb33',
    is_finish: 0,
    finish_star: 0,
    finish_steps: 0,
    finish_time: 0,
};