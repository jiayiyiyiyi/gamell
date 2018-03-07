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
* 新的位置 nX,nY
* */

var arrsubject=[
        {url:res.Tree,sX:-120,sY:-40},
        {url:res.CloudTwo,sX:0,sY:194},
        {url:res.Nest,sX:210,sY:52},
        {url:res.CloudOne,sX:485,sY:324},
        {url:res.BigBirdOpen,id:1,sX:225,sY:127,error:res.BigBirdClose},
        {url:res.EggSmall,sX:395,sY:118},
        {url:res.Egg,sX:344,sY:126,id:2,errorOne:res.EggOne,errorTwo:res.EggTwo,errorThree:res.EggThree,errorFour:res.EggFour},
        {url:res.Kid,sX:377,sY:177,id:10,errorOne:res.KidCrowOne,errorTwo:res.KidCrowTwo},
        {url:res.EggBroken,sX:320,sY:124},
        {url:res.Box,sX:35,sY:137,nX:464,nY:137},
        {url:res.FoodOne,id:3,sX:82,sY:283,nX:111,nY:178,oX:522,oY:303,tX:565,tY:164},
        {url:res.FoodTwo,id:3,sX:175,sY:309,nX:600,nY:298,oX:495,oY:227},
        {url:res.Apple,id:4,sX:126,sY:234},
        {url:res.Lollipop,id:4,sX:199,sY:193},
        {url:res.Carrot,id:4,sX:545,sY:216},
        {url:res.Fish,id:4,sX:621,sY:223},
        {url:res.NewClose,sX:279,sY:127,error:res.NewOpen},
        
        
        
        
        {data:2,Rota:0},
        {url:res.Tree,sX:-120,sY:-40,urly:res.shadow,Xy:85,Yy:138,error:res.g_bird_error,audios:sound.woo},
]

var updata = {
    task_id: '7bbe137542584bbda8d039f049d253d0',
    is_finish: 0,
    finish_star: 0,
    finish_steps: 0,
    finish_time: 0,
};