/*场景*/
var StartScene = cc.Scene.extend({
  onEnter:function () {
    this._super();
    var size = cc.director.getWinSize();

    /*添加背景层*/
    var layer = new BgLayer();
    this.addChild(layer,0,0);

    /*最外层*/
    var layer = new MainLayer();
    this.addChild(layer,2,1);
    
    /*飞星层*/
    var layer = new StarLayer();
    this.addChild(layer,3,2);
  }
});        
