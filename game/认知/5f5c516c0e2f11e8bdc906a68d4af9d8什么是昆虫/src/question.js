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
    {id:0,obtain:0,taoal:3},
    {id:1,obtain:0,taoal:1},
    {id:2,obtain:0,taoal:1},
]
var arrsubject=[
    [
        {url:res.Map,sX:97,sY:-5},
        {url:res.HoneyPage,sX:534,sY:86},
        {url:res.HoneyPage,sX:543,sY:149},
        {url:res.HoneyPage,sX:511,sY:200},
        {url:res.HoneyPage,sX:480,sY:259},
        {url:res.HoneyPage,sX:543,sY:292},
        {url:res.HoneyPage,sX:332,sY:74},
        {url:res.HoneyPage,sX:305,sY:201},
        {url:res.HoneyPage,sX:308,sY:273},
        {url:res.HoneyPage,sX:233,sY:279},
        {url:res.HoneyPage,sX:189,sY:207},
        {url:res.HoneyPage,sX:160,sY:150},
        {url:res.HoneyPage,sX:140,sY:84},
        {url:res.HoneyPage,sX:147,sY:278},
        {url:res.HoneyPage,sX:74,sY:256},
        {url:res.HoneyPage,sX:84,sY:162},
        
    ],
    [
       [
           {url:res.Honey,sX:134,sY:33},
           {url:res.Head,sX:321,sY:132,id:6},
           {url:res.Chest,sX:289,sY:115,id:5},
           {url:res.Abdomen,sX:233,sY:55,id:2},
           {url:res.Wing,sX:132,sY:216,id:3},
           {url:res.Foot,sX:309,sY:33,id:4},
       ],
        [
            {url:res.AbdomenSucc,sX:132,sY:88,sing:res.Abdomen_audio},
            {url:res.WingSucc,sX:81,sY:256,sing:res.Wing_audio},
            {url:res.LegSucc,sX:423,sY:65,sing:res.Legs_audio},
            {url:res.ChesSucc,sX:138,sY:177,sing:res.Chest_audio},
            {url:res.HeadSucc,sX:419,sY:231,sing:res.Head_audio},
            {url:res.OmmaSucc,sX:475,sY:149,sing:res.Abdomen_audio},
        ]
    ],
    [
            [
                {url:res.Background,sX:77,sY:11},
                {url:res.Background,sX:302,sY:11},
                {url:res.Background,sX:527,sY:11}
            ],
    		[
    			{url:res.HoneyLow,sX:211,sY:161,name:"honey"},
    			{url:res.ButterSmall,name:"butter",urly:res.ButterBig,id:1},
    			{url:res.WingSmall,name:"honey",urly:res.WingBig,id:2},
    			{url:res.AntSmall,name:"ant",urly:res.AntBig,id:3},
    		],
    		[
    			{url:res.AntDotted,sX:246,sY:151,name:"ant"},
                {url:res.ButterSmall,name:"butter",urly:res.ButterBig,id:1},
                {url:res.WingSmall,name:"honey",urly:res.WingBig,id:2},
                {url:res.AntSmall,name:"ant",urly:res.AntBig,id:3},
            ],
    		[
    			{url:res.BigButterLine,sX:291,sY:167,name:"butter"},
                {url:res.ButterSmall,name:"butter",urly:res.ButterBig,id:1},
                {url:res.WingSmall,name:"honey",urly:res.WingBig,id:2},
                {url:res.AntSmall,name:"ant",urly:res.AntBig,id:3},
            ],
    //公共
       [
	       {url:res.Cloud,sX:114,sY:292},
	       {url:res.Grass,sX:11,sY:153},
	       {url:res.Ground,sX:0,sY:0},
       ],
    ],
    [
        {url:res.BeePositive,sX:148,sY:90},
        {url:res.NormalFlower,id:1},
        {url:res.Ommateum,id:2},
    ]
]
var updata = {
    task_id: '5f5c516c0e2f11e8bdc906a68d4af9d8',
    is_finish: 0,
    finish_star: 0,
    finish_steps: 0,
    finish_time: 0,
};
