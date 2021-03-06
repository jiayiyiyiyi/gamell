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
  redAudio:function(){
    cc.audioEngine.playEffect(res.Red_audio);
  },
  greenAudio:function(){
    cc.audioEngine.playEffect(res.Green_audio);
  },
  blueAudio:function(){
    cc.audioEngine.playEffect(res.Blue_audio);
  },
  purpleAudio:function(){
    cc.audioEngine.playEffect(res.Purple_audio);
  },
}