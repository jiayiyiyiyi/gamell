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
    QuesOne_audio:"three_two.mp3",
    QuesTwo_audio:"four_one.mp3",
    QuesThree_audio:"one_two.mp3",
    QuesFour_audio:"three_one.mp3",
    QuesFive_audio:"two_two.mp3", 
    QuesSix_audio:"one_one.mp3", 
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
  	CardSlot:"card-slot.png",
  	Five:"number_fivve.png",
  	Four:"number_four.png",
  	Three:"number_stree.png",
  	Two:"number_two.png",
  	One:"number_one.png",
  	Plus:"plus.png",
  	Sign:"sign.png",
  	OneGreen:"white-one-green.png",
  	TwoGreen:"white-two-green.png",
  	ThreeGreen:"white-stree-green.png",
  	
  	
  	OneApple:"white-one-apple.png",
  	TwoApple:"white-two-apple.png",
  	ThreeApple:"white-stree-apple.png",
  	
  	FiveApple:"white-five-apple.png",

  	TwoGrape:"white-two-grape.png",
  	OneGrape:"white-stree-grape.png",
  	FourGrape:"white-four-grape.png",
  	FiveGrape:"white-five-grape.png",
  	OneStraw:"white-one-strawberry.png",

	ThreeStraw:"white-stree-strawberry.png",
  	FourStraw:"white-four-strawberry.png",
  	FiveStraw:"white-five-strawberry.png",
  	OneOrange:"white-one-orange.png",
  	TwoOrange:"white-two-orange.png",
  	ThreeOrange:"white-stree-orange.png",
  	FourOrange:"white-four-orange.png",
	OneMush:"mushroom-01.png",
	TwoMush:"mushroom-02.png",
	FourMush:"mushroom-04.png",
    celebrateGirl:"celebrate-girl.png",
  	
};
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}