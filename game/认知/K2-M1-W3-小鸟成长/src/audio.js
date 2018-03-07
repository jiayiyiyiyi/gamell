//共性
var sound = {
  rightAudio:function(){//正确
    cc.audioEngine.playEffect(res.Right_audio);
  },
  wrongAudio:function(){//错误
    cc.audioEngine.playEffect(res.Wrong_audio);
  },
  winAudio:function(){//完成 欢呼
    cc.audioEngine.playEffect(res.Win_audio);
  },
  starAudio:function(){//飞星
    cc.audioEngine.playEffect(res.Star_audio);
  },
  buttonAudio:function(){//点击
    cc.audioEngine.playEffect(res.Button_audio);
  },
  stopAudio : function(){//停止
    cc.audioEngine.stopMusic();
  },
  stopEff:function () {//停止播放音效
      cc.audioEngine.stopAllEffects();
  },
  //个性
  gameBgAudio:function(){//背景
    cc.audioEngine.playMusic(res.GameBg_audio,true);
    cc.audioEngine.setMusicVolume(0.2);  
  },
  hintAudio: function () {//提示
      cc.audioEngine.playEffect(res.seesaw_problem);
  },
  birdAudio: function () {//提示
      cc.audioEngine.playEffect(res.Bird_audio);
  },
  eggAudio: function () {//提示
      cc.audioEngine.playEffect(res.Egg_audio);
  },
  eatAudio: function () {//提示
      cc.audioEngine.playEffect(res.Eat_audio);
  },
  oneAudio: function () {//提示
      cc.audioEngine.playEffect(res.One_audio);
  },
  twoAudio: function () {//提示
      cc.audioEngine.playEffect(res.Two_audio);
  },
  threeAudio: function () {//提示
      cc.audioEngine.playEffect(res.Three_audio);
  },
  fourAudio: function () {//提示
      cc.audioEngine.playEffect(res.Four_audio);
  },
}