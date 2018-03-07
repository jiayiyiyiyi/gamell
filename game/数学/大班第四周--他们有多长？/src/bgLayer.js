/*背景层*/
var BgLayer = cc.Layer.extend({
  ctor:function () {
    this._super();
    var size = cc.director.getWinSize();
    var sprite = cc.Sprite.create(res.Bg);
    sprite.setPosition(size.width / 2, size.height / 2);
    sprite.setScale(size.height / sprite.height); //全屏显示
    this.addChild(sprite, 0);
    sound.gameBgAudio();
  }      
})