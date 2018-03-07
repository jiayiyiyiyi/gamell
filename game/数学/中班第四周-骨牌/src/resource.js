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
    StartTip_audio:"start_tip.mp3",
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
    Bg : "-g-bg.png", //背景层
    CardSlot:"-g-card-slot.png",
    CardOne:"-g-dominoes01.png",
    CardTwo:"-g-dominoes02.png",
    CardThree:"-g-dominoes03.png",
    CardFour:"-g-dominoes04.png",
    CardFive:"-g-dominoes05.png",
    CardSix:"-g-dominoes06.png",
    CardSeven:"-g-dominoes07.png",
    CardEight:"-g-dominoes08.png",
    CardNine:"-g-dominoes09.png",
    CardTen:"-g-dominoes10.png",
    Tray:"-g-tray.png",
    ExtBox:"ext-box.png",
    Project:"projection.png",
    One:"WechatIMG12.png",
    Two:"WechatIMG18.png",
    Three:"WechatIMG13.png",
    Four:"WechatIMG14.png",
    Five:"WechatIMG15.png",
    Six:"WechatIMG16.png",
    Seven:"WechatIMG17.png",
	Eight:"WechatIMG9.png",
    Nine:"WechatIMG10.png",
    Ten:"38.jpg",
    Zero:"WechatIMG11.png",
    celebrateGirl:"celebrate-girl.png",
};
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}