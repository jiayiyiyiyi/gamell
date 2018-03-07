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
    Big_audio:"big.mp3",
    Small_audio:"small.mp3",
    Lion_audio:"cartoon_lion.mp3",
    Mouse_audio:"cartoon_mouse.mp3",
    Kinds_audio:"kids_cheering.mp3",

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
    Bg : "big.png", //背景层
    BlueFlag:"blue_flag.png",
    CarBig:"carbig.png",
    CarSmall:"carsmall.png",
    Lion:"lion.png",
    Mouse:"mouse.png",
    RedFlag:"red_flag.png",
    SeatBig:"seat_big.png",
    SeatSmall:"seat_small.png",
    WheelBig:"steering-wheel_big.png",
    wheelSmall:"steering-wheel_small.png",
    LionLaugh:"lion_laugh.png",
    MouseLaugh:"mouse_laugh.png",
    Plate:"plate.png",
    ProjeBig:"projection_big.png",
    ProjeSmall:"projection_small.png",
    VehicleBig:"vehicle_big.png",
    VehicleSmall:"1.png",
    Hand : "hand.png",
    HandClick : "handclick.png",
    celebrateGirl:"celebrate-girl.png",
};
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}