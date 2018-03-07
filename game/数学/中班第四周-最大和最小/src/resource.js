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
    BoxOpen_audio:"box_open.mp3",
    CarHorn_audio:"car_horn.mp3",
    CarStart_audio:"car_starting.mp3",
    Plan_audio:"helicopter_passing_by_01.mp3",
    Jump_audio:"jump.mp3",
    QuesOne_audio:"question_one.mp3",
    QuesTwo_audio:"question_two.mp3",
    QuesThree_audio:"question_three.mp3",
    QuesFour_audio:"question_four.mp3",

    
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
    
    BgOne:"bg_one.png",
    BgTwo:"bg_two.png",
    BgThree:"bg_three.png",
    BgFour:"bg_four.png",
    AirplanOne:"airplane_one.png",
    AirplanTwo:"airplane_two.png",
    AirplanThree:"airplane_three.png",
    AirplanFour:"airplane_four.png",
    AirplanFive:"airplane_five.png",
    CarOne:"bus.png",
    CarTwo:"car.png",
    CarThree:"taxi.png",
    CarFour:"truck.png",
    CarFive:"pickuptruck.png",
    GiftOne:"gift_one.png",
    GifOneOpen:"gift_one_open.png",
    GiftTwo:"gift_two.png",
    GiftThree:"gift_three.png",
    GiftFour:"gift_four.png",
    GiftFive:"gift_five.png",
    CakeOne:"cake_one.png",
    CakeTwo:"cake_two.png",
    CakeThree:"cake_three.png",
    CakeFour:"cake_four.png",
    CakeFive:"cake_five.png",
    QuestionSmall:"question_small.png",
    QuestionBig:"question_big.png",
    celebrateGirl:"celebrate-girl.png",
};
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}