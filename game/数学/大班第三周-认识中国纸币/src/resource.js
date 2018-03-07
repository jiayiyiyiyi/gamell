//公共资源
var res = {
    //声音
    Right_audio : "right.mp3",
    Wrong_audio : "wrong.mp3",
    Win_audio : "celebration.mp3",
    Star_audio : "star.m4a",
    Button_audio : "button.wav",
    GameBg_audio : "game-bg.mp3",
    Hint_audio : "right.mp3",
    Subject_audio:"subject.mp3",
    Onejiao_audio:"one_horn.mp3",
    Fivejiao_audio:"five_horn.mp3",
    Oneyuan_audio:"one_element.mp3",
    //图片
    Back : "back.png", //头部公共部分
    BlackStar : "shape.png",
    FlyStar : "flay-star.png",
    LightStar : "light-star.png",
    ResultBg : "result-image-bg.png",
    RepeatNormal : "result-btn-repeat-normal.png",
    DoneNormal : "result-btn-done-normal.png",
    RepeatPress : "result-btn-repeat-pressed.png",
    DonePress : "result-btn-done-pressed.png",
    Bg : "bg.png", //背景层
    BgBehind:"bag_behind.png",
    BgFivejiao:"bag_fivejiao.png",
    BgFivejiaoSmall:"bag_fivejiao_small.png",
    BgFrontFive:"bag_front_fivejiao.png",
    BgFrontOnejiao:"bag_front_onejiao.png",
    BgFrontOneyuan:"bag_front_oneyuan.png",
    BgOnejiao:"bag_onejiao.png",
    BgOnejiaoSmall:"bag_onejiao_small.png",
    BgOneyuan:"bag_oneyuan.png",
    BgOneyuanSmall:"bag_oneyuan_small.png",
    Fivejiao:"fivejiao.png",
    Onejiao:"onejiao.png",
    Oneyuan:"oneyuan.png",
    ShadowOnejiao:"shadow_onejiao.png",
    ShadowOneyuan:"shadow_oneyuan.png",
    ShadowFivejiao:"shadow_fivejiao.png",
    Table:"table.png",
    celebrateGirl:"celebrate-girl.png",
};
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}