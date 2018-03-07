//公共资源
var res = {
   //个性图片配音 音效
	Bg:"bg.png",
	Apple:"apple.png",
	BigBirdClose:"mother_bird_laugh.png",
	BigBirdOpen:"mother_bird.png",
	BigBirdFlyOne:"bird_fly_one.png",
	BigBirdFlyTwo:"bird_fly_two.png",
	Egg:"bird-egg.png",
	EggSmall:"bird-egg-small.png",
	EggBroken:"bird-egg-broken.png",
	Kid:"bird-kid.png",
	KidCrowOne:"bird-kid-crow01.png",
	KidCrowTwo:"bird-kid-crow02.png",
	Nest:"bird-nest.png",
	NewOne:"bird-new01.png",
	NewTwo:"bird-new02.png",
	NewClose:"bird-new-close.png",
	NewOpen:"bird-new-open.png",
	Box:"box.png",
	Carrot:"carrot.png",
	CloudOne:"cloud01.png",
	CloudTwo:"cloud02.png",
	EggOne:"egg-one.png",
	EggTwo:"egg-two.png",
	EggThree:"egg-three.png",
	EggFour:"egg-four.png",
	Fish:"fish.png",
	FoodOne:"food01.png",
	FoodTwo:"food02.png",
	Lollipop:"lollipop.png",
	Tree:"tree.png",
	ChickThree:"chicks_three.png",
	ChickFour:"chicks_four.png",
	ChickFive:"chicks_five.png",
	ChickSix:"chicks_six.png",
	ChickSeven:"chicks_seven.png",
	ChickEight:"chicks_eight.png",
	NoOne:"chicks_one_no.png",
	NoTwo:"chicks_no.png",
	NoThree:"chicks_eight_no.png",
    NoFour:"-g-chicks_one_fan.png",
    NoFive:"-g-chicks_no_fan.png",
    NoSix:"-g-chicks_eight_fan.png",
    //
    Bird_audio:"audio/bird.mp3",
    Egg_audio:"audio/eggshell.mp3",
	Eat_audio:"audio/eating_cake.mp3",
    One_audio:"audio/bird_one.mp3",
    Two_audio:"audio/bird_two.mp3",
    Three_audio:"audio/bird_three.mp3",
    Four_audio:"audio/bird_four.mp3",

    //声音
    Right_audio : "common/right.mp3",
    Wrong_audio : "common/wrong.mp3",
    Win_audio : "common/celebration.mp3",
    Star_audio : "common/star.m4a",
    Button_audio : "common/button.wav",
    GameBg_audio : "common/light_song_for_kids.mp3",


    //图片
    Back : "common/back.png", //头部公共部分
    BlackStar : "common/shape.png",
    FlyStar : "common/flay-star.png",
    LightStar : "common/light-star.png",
    ResultBg : "common/result-image-bg.png",
    RepeatNormal : "common/result-btn-repeat-normal.png",
    DoneNormal : "common/result-btn-done-normal.png",
    RepeatPress : "common/result-btn-repeat-pressed.png",
    DonePress : "common/result-btn-done-pressed.png",
    Hand : "common/hand.png",
    HandClick : "common/handclick.png",
    celebrateGirl:"common/celebrate-girl.png",
};

/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}