/*精灵相关的 数据全部在这写
需要加载的精灵  坐标 阴影
选择错误替换精灵
声音提示
resdata=  统一使用变量
数据统一建值
*/
var common_data=[
    {id:0,obtain:0,taoal:4},
    {id:1,obtain:0,taoal:1},
    {id:2,obtain:0,taoal:1},
    {id:3,obtain:0,taoal:1},
    {id:4,obtain:0,taoal:1},
]
/* 字段 统一
* sprUrl sprUrlY
* 精灵坐标sp_X sp_Y
* 阴影坐标sp_Xy sp_Yy
* 选择作物精灵 errorSp
* 个性声音 audioP
* 答案 data
* 其他不确定字段 需要备注
* */
//var common_data=[
//  {id:0,obtain:0,taoal:4},
//  {id:1,obtain:0,taoal:1},
//  {id:2,obtain:0,taoal:1},
//  {id:3,obtain:0,taoal:1},
//  {id:4,obtain:0,taoal:1}
//]
var arrsubject=[
    [
        {url:res.DragOne,sX:70,sY:95,id:1},
        {url:res.DragTwo,sX:200,sY:34,id:2},
        {url:res.DragThree,sX:505,sY:178,id:3},
        {url:res.DragFour,sX:184,sY:219,id:4},

        {url:res.g_bird,id:1,sX:50,sY:138,urly:res.shadow,Xy:85,Yy:138,error:res.g_bird_error,audios:sound.woo},
        {data:2,Rota:0}
    ],
    [
		{url:res.FireSix,sX:115,sY:284,id:0,error:res.FireGlowFive},
		{url:res.FireFive,sX:112,sY:102,id:1,error:res.FireGlowFour},
		{url:res.FireThree,sX:241,sY:186,id:2,error:res.FireGlowOne},
		{url:res.FireFour,sX:258,sY:85,id:3,error:res.FireGlowThree},
		{url:res.FireSeven,sX:348,sY:260,id:4,error:res.FireGlowSix},
		{url:res.FireOne,sX:428,sY:92,id:5,error:res.FireGlowTen},
		{url:res.FireTen,sX:478,sY:247,id:6,error:res.FireGlowEight},
		{url:res.FireEight,sX:514,sY:147,id:7,error:res.FireGlowSeven},
		{url:res.FireTwo,sX:565,sY:23,id:8,error:res.FireGlowTwo},
		{url:res.FireNine,sX:570,sY:281,id:9,error:res.FireGlowNine},
	],
    [
		{url:res.EggOne,sX:366,sY:143,id:1},
		{url:res.EggTwo,sX:322,sY:89,id:2},
		{url:res.ButterChry,sX:285,sY:72,id:3},
		{url:res.ButterFly,sX:273,sY:88,id:4},
		{url:res.ButterLeaf,sX:0,sY:28},
    ],
    [	
    		{url:res.HoneyFlowerOne,sX:340,sY:8,id:1},
    		{url:res.HoneyFlowerTwo,sX:432,sY:11,id:2},
    		{url:res.HoneyFlowerThree,sX:591,sY:34,id:3},
    		{url:res.HoneyHive,sX:142,sY:198,id:4},
    		{url:res.HoneybeeOne,sX:400,sY:170,id:5,error:res.HoneybeeTwo},
    		{url:res.HoneyOne,sX:73,sY:50,id:6,errorOne:res.HoneyTwo,errorTwo:res.HoneyThree,errorThree:res.HoneyFour},
    		{url:res.HoneyReturnOne,sX:517,sY:801,error:res.HoneyReturnTwo},
    		{url:res.HoneyStomachOne,sX:123,sY:50,errorOne:res.HoneyStomachTwo,errorTwo:res.HoneyStomachThree,errorThree:res.HoneyStomachFour},
    		
    		{url:res.HoneyLayer,sX:229,sY:271,nX:229,nY:238,oX:257,oY:254,error:res.HoneyWhiteOne,errorOne:res.HoneyWhiteTwo,errorTwo:res.HoneyWhiteThree},
		{url:res.HoneyCloudsOne,sX:0,sY:308},
		{url:res.HoneyCloudsTwo,sX:110,sY:289},
		{url:res.HoneyCloudsThree,sX:549,sY:331},
		{url:res.HoneyTree,sX:-150,sY:-30},
		{url:res.HoneyFlower,sX:340,sY:-25},
		
    ]
]
//lang
var data = {
    LoneScene: [
       // {indent:2,url: res.Black,id:2,sx: 0,sy:0,},
        {indent:1,url: res.butterfly,sx:238+45,sy:229+55,name:"butter"},
        {indent:1,url: res.dragonfly,sx:413+52,sy:212+43,name:"dragon"},
        {indent:1,url: res.FireGlowTen,sx:428+23,sy:92+24,name:"firglow"},
        {indent:1,url: res.mifeng,sx:589+37,sy:94+27,name:"honeybee"},
       // {indent:3,url: res.aperture,sx:100,sy:100},
    ]
}
var updata = {
    task_id: '72fcb2840e2f11e8bdc906a68d4af9d8',
    is_finish: 0,
    finish_star: 0,
    finish_steps: 0,
    finish_time: 0,
};