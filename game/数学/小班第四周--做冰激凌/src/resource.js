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
    Food_audio:"food.mp3",
    StartTip_audio:"start_tip.mp3",
    Blue_audio:"blue.mp3",
    Green_audio:"green.mp3",
    Purple_audio:"purple.mp3",

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
   	ConeBlue:"cone_blue.png",
   	ConeGreen:"cone_green.png",
   	ConePink:"cone_pink.png",
   	CrumbBlue:"crumb_blue.png",
   	CrumbGreen:"crumb_green.png",
   	CrumbPink:"crumb_pink.png",
   	HeartBlue:"heart_blue.png",
   	HeartGreen:"heart_green.png",
   	HeartPink:"heart_pink.png",
   	IceBlue:"icecream_blue.png",
   	IceGreen:"icecream_green.png",
   	IcePink:"icecream_pink.png",
   	MackBlueLean:"macaroon_blue_leaning.png",
   	MackGreenLean:"macaroon_green_leaning.png",
   	MackPinkLean:"macaroon_pink_leaning.png",
   	MacBlue:"macaroon_blue.png",
   	MacGreen:"macaroon_green.png",
   	MacPink:"macaroon_pink.png",
   	Table:"table.png",
    celebrateGirl:"celebrate-girl.png",
};
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}