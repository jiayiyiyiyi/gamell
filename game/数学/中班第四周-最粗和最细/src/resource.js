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
    QuesOne_audio:"question_one.mp3",
    QuesTwo_audio:"question_two.mp3",
    QuesThree_audio:"question_four.mp3",
    QuesFour_audio:"question_three.mp3",
    
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
    BottleOne:"bottle_one.png",
    BottleTwo:"bottle_two.png",
    BottleThree:"bottle_three.png",
    BranchOne:"branch_two.png",
    BranchTwo:"branch_one.png",
    BranchThree:"branch_three.png",
   	BrushOne:"brush_three.png",
   	BrushTwo:"brush_two.png",
   	BrushThree:"brush_one.png",
   	Desk:"desk.png",
   	RopeOne:"rope_three.png",
   	RopeTwo:"rope_one.png",
   	RopeThree:"rope_two.png",
    celebrateGirl:"celebrate-girl.png",
};
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}