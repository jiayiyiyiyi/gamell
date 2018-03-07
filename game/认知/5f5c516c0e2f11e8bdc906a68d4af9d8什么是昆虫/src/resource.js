//公共资源
var res = {
   //个性图片配音 音效
    Abdomen:"abdomen.png",
	AntComplete:"ant_complete.png",
	AntDotted:"ant_dotted_line.png",
	AntGo:"ant_go.png",
	BeePositive:"bee_positive.png",
	Bg:"bg.jpg",
	OneBg:"bg.png",
	BigButterLine:"big_butterfly_lin.png",
	BigButter:"big_butterfly.png",
	BigButterFly:"big_butterfly_fly.png .png",
	Chest:"chest.png",
	ClickTwo:"click_two.png",
	Click:"click.png",
	Cloud:"cloud.png",
	Foot:"foot.png",
	Grass:"grass.png",
	Ground:"ground.png",
	Head:"head.png",
	HoneyFlayOne:"honeybee_fly_one.png .png",
	HoneyFlayTwo:"honeybee_fly_two.png",
	HoneyLow:"honeybee_low.png",
	HoneyNormal:"honeybee_normal.png",
	HoneyPage:"honeybee_page.png",
	Honey:"honeybee.png",
	Map:"map.png",
	NormalFlop:"normal_flop.png",
	NormalFlower:"normal_flower.png",
	Ommateum:"ommateum_flower.png",
	Wing:"wing.png",
	BgOne:"bg_one.jpg",
	Black:"black_glowworm.png",
	Correct : "correct.png",

	HeadSucc:"-g-line_five.png",
	ChesSucc:"-g-line_four.png",
	WingSucc:"-g-line_one.png",
	AbdomenSucc:"-g-line_six.png",
	LegSucc:"-g-line_three.png",
	OmmaSucc:"-g-line_two.png",
	Background:"-g-background.png",
	AntBig:"-g-big_ant_complete_six.png",
	ButterBig:"-g-big_butterfly_one.png",
	AntSmall:"-g-small_ant_leg.png",
	ButterSmall:"-g-small_butter_flyWing.png",
	WingBig:"big-wing.png",
	WingSmall:"-g-small_honeybee_flyWing.png",
	//
	ButterFly_audio:"audio/butterfly.mp3",
	Honeybee_audio:"audio/honeybee.mp3",
	Creeping_audio:"audio/creeping_bug.mp3",
	//进场音
	Bee_audio:"audio/bee.mp3",
	//介绍音
	Legs_audio:"audio/6_legs.mp3",
	Abdomen_audio:"audio/abdomen.mp3",
	Chest_audio:"audio/chest.mp3",
	Head_audio:"audio/head.mp3",
	Wing_audio:"audio/wing.mp3",
	//复眼
	Omma_audio:"audio/ommateum.mp3",


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
    shape:"common/shape.png",
    celebrateGirl:"common/celebrate-girl.png",
};

/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}