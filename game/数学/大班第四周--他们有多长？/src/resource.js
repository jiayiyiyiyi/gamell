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
    KeyShow_audio : "eject.mp3",
    Problem_audio:"problem_length.mp3",

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
    BottleThree:"bottle_stree.png",
    Line:"line.png",
    Ruler:"ruler.png",
    Wood:"wood.png",
    Four:"four.png",
   Zero:"zero.png",
 	One:"one.png",
 	Two:"two.png",
 	Three:"three.png",
 	Four:"four.png",
 	Five:"five.png",
 	Six:"six.png",
 	Seven:"seven.png",
 	Eight:"eight.png",
 	Nine:"nine.png",
 	OneSmall:"one_small.png",
 	TwoSmall:"two_small.png",
 	ThreeSmall:"three_small.png",
 	FourSmall:"four_small.png",
 	FiveSmall:"five_small.png",
 	SixSmall:"six_small.png",
 	SevenSmall:"seven_small.png",
 	EightSmall:"eight_small.png",
 	NineSmall:"nine_small.png",
 	ZeroSmall:"zero_small.png",
 	Backk:"backk.png",
 	Right:"right.png",
 	AnswerSpace:"answer_space.png",
 	Answer:"answer.png",
 	Sun:"sun.jpg",
 	Ques:"limi.jpg",
    celebrateGirl:"celebrate-girl.png",
   
};
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}