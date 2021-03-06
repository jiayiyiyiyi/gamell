//共性
var sound = {
  rightAudio:function(){
    cc.audioEngine.playEffect(res.Right_audio);
  },
  wrongAudio:function(){
    cc.audioEngine.playEffect(res.Wrong_audio);
  },
  winAudio:function(){
    cc.audioEngine.playEffect(res.Win_audio);
  },
  starAudio:function(){
    cc.audioEngine.playEffect(res.Star_audio);
  },
  buttonAudio:function(){
    cc.audioEngine.playEffect(res.Button_audio);
  },
  stopAudio : function(){
    cc.audioEngine.stopMusic();
  },
  //个性
  gameBgAudio:function(){
    cc.audioEngine.playMusic(res.GameBg_audio,true);
    cc.audioEngine.setMusicVolume(0.2);  
  },
  hintAudio:function(){
    cc.audioEngine.playEffect(res.Hint_audio);
  },
  onejiaoAudio:function(){
    cc.audioEngine.playEffect(res.Onejiao_audio);
  },
 	fivejiaoAudio:function(){
    cc.audioEngine.playEffect(res.Fivejiao_audio);
  },
  oneyuanAudio:function(){
    cc.audioEngine.playEffect(res.Oneyuan_audio);
  },
  subjectAudio:function(){
    cc.audioEngine.playEffect(res.Subject_audio);
  },
}