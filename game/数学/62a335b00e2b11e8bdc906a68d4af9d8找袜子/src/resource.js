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
    Bg : "bg.jpg", //背景层 
    Hand : "hand.png",
    HandClick : "handclick.png",
    BlueSock:"blue_socks.png",
    CatOne:"cat_one.png",
    Cat:"cat.png",
    ClipOne:"clip_01.png",
    ClipTwo:"clip_02.png",
    GreenSock:"green_socks.png",
    PurpleSocks:"purple_socks.png",
    RedSocks:"red_socks.png",
    SmallBlueRight:"small_blue_socks_right.png",
    SmallBlue:"small_blue_socks.png",
    SmallGreenRight:"small_green_socks_right.png",
    SmallGreen:"small_green_socks.png",
    SmallPurpleRight:"small_purple_socks_right.png",
    SmallPurple:"small_purple_socks.png",
    SmallRedRight:"small_red_socks_right.png",
    SmallRed:"small_red_socks.png",
    Stick:"stick.png",
    Ward:"wardrobe.png",
    //
    Red_audio:"red.mp3",
    Green_audio:"green.mp3",
    Blue_audio:"blue.mp3",
    Purple_audio:"purple.mp3",
    celebrateGirl:"celebrate-girl.png",
    
};
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}