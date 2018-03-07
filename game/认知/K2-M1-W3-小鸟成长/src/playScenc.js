//背景层
var BgLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        sound.stopAudio();
        //默认有公共场景在这里创建 没有的直接删了
        var size = cc.director.getWinSize();
        var sprite = cc.Sprite.create(res.Bg);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(size.height / sprite.height); //全屏显示
        this.addChild(sprite, 0);
        sound.gameBgAudio();
    }
});

/*添加到场景中*/
var MyScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        /*添加背景层*/
        var layer = new BgLayer();
        this.addChild(layer, 0);

        var layer1 = new Layer1();
        this.addChild(layer1, 0, 1);
        /*飞星层*/
        var layer = new StarLayer();
        this.addChild(layer, 3, 10);

    }
})