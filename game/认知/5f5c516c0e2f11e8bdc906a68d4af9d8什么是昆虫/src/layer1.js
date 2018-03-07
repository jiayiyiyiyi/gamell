//每个场景创建一个文件
var Layer1 = cc.Layer.extend({
    ctor: function() {
		this._super();
		this.layerightStar= new StarLayer(common_data[0]);
        this.addChild(this.layerightStar, 10, 10);
		this.dealArr = [];
		//背景
//		var size = cc.director.getWinSize();
//      this.sprite = cc.Sprite.create(res.OneBg);
//      this.sprite.setPosition(size.width / 2, size.height / 2);
//      this.sprite.setScale(size.height / this.sprite.height); //全屏显示
//      this.addChild(this.sprite, 0);
        
     
        this.dragArr = [];
        this.init();
    },
    init:function(){
    	//地图
		this.OneLis = arrsubject[0];
		this.maps = cc.Sprite.create(this.OneLis[0].url);
		this.dealArr.push(this.maps);
	    this.maps.setAnchorPoint(0, 0);
	    this.maps.setPosition(this.OneLis[0].sX*fix, this.OneLis[0].sY*fix);
	    this.maps.setScale(0.333*fix,0.333);
	    this.addChild(this.maps, 1);
	//蜜蜂
	    for(var i =1;i<this.OneLis.length;i++){
			var sprite = new cc.Sprite(this.OneLis[i].url);
            sprite.setAnchorPoint(0.5, 0.5);
            this.dealArr.push(sprite);
            this.dragArr.push(sprite);
            sprite.setPosition((this.OneLis[i].sX+40)*fix, this.OneLis[i].sY+30/fix);
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 2);
	    }
    
    //隐藏蜜蜂
	    for(var i =0 ;i<this.dragArr.length;i++){
	    		this.dragArr[i].setOpacity(0);
	    }
	//出现蜜蜂
		this.schedule(function(){
			this.cos = this.random(this.dragArr);
			this.cos.setOpacity(255);
			this.index = this.dragArr.indexOf(this.cos);
			this.dragArr.splice(this.index,1);
	    },0.2,14,0)
		sound.beeAudio();
    //跳转
    this.scheduleOnce(function(){
		var bglayer = cc.director.getRunningScene().getChildByTag(30);
        this.dealArr.forEach(function(v){
            v.runAction(cc.fadeTo(1,100));
            bglayer._children[0].runAction(cc.fadeTo(1,150));
            v.removeFromParent();

        })
        this.scheduleOnce(function(){
           bglayer._children[0].initWithFile(res.Bg);
           bglayer._children[0].runAction(cc.fadeTo(1,250));
           this.layerightStar.removeFromParent();
           var layer = new Layer2();
			this.addChild(layer, 0, 1);
        },1)
    },4)
        //返回App
        this.layerightStar.onTouchBegan();

   },
   	random: function (arr) {
		index = Math.floor((Math.random() * arr.length));
		return arr[index];
	}
})