/*主层*/
var MainLayer = cc.Layer.extend({
  ctor:function () {
    this._super();
    var size = cc.director.getWinSize();
    this.count = 0;
	this.init();
	this.dragAction();
	sound.gameBgAudio();
  },
  init:function(){
	var size = cc.director.getWinSize();
	//背景
	this.bgArr=[res.BgOne,res.BgTwo,res.BgThree,res.BgFour];
    var sprite = cc.Sprite.create(this.bgArr[this.count]);
    sprite.setPosition(size.width / 2, size.height / 2);
    sprite.setScale(size.height / sprite.height); //全屏显示
    this.addChild(sprite, 0);

	this.spr = data.sprites[this.count];
	this.one = cc.Sprite.create(this.spr[0].one);
    this.one.setAnchorPoint(0, 0);
    this.one.setPosition(this.spr[0].x*fix, this.spr[0].y*fix);
    this.one.id = this.spr[0].id;
    this.one.setScale(0.29*fix);
    this.addChild(this.one, 0);
    
	this.two = cc.Sprite.create(this.spr[1].two);
    this.two.setAnchorPoint(0, 0);
    this.two.setPosition(this.spr[1].x*fix, this.spr[1].y*fix);
    this.two.id = this.spr[1].id;
    this.two.setScale(0.29*fix);
    this.addChild(this.two, 0);
   
	this.three = cc.Sprite.create(this.spr[2].three);
    this.three.setAnchorPoint(0, 0);
    this.three.setPosition(this.spr[2].x*fix, this.spr[2].y*fix);
    this.three.id = this.spr[2].id;
    this.three.setScale(0.29*fix);
    this.addChild(this.three, 0);
    
	this.four = cc.Sprite.create(this.spr[3].four);
    this.four.setAnchorPoint(0, 0);
    this.four.setPosition(this.spr[3].x*fix, this.spr[3].y*fix);
    this.four.id = this.spr[3].id;
    this.four.setScale(0.29*fix);
    this.addChild(this.four, 0);
    
	this.five = cc.Sprite.create(this.spr[4].five);
    this.five.setAnchorPoint(0, 0);
    this.five.setPosition(this.spr[4].x*fix, this.spr[4].y*fix);
    this.five.id = this.spr[4].id;
    this.five.setScale(0.29*fix);
    this.addChild(this.five, 0);
    
    //问题框
    this.question = cc.Sprite.create(this.spr[0].question);
    this.question.setAnchorPoint(0, 0);
    this.question.setPosition(265.3*fix, 319.7);
    this.question.setScale(0.29*fix);
    this.addChild(this.question, 0);
  
    this.dragArr = [this.one,this.two,this.three,this.four,this.five];
    
    if(this.count == 0){
    	this.upOne = function(){
    		sound.quesOneAudio();
		}
		this.schedule(this.upOne,8,cc.REPEAT_FOREVER,1);
	}
    if(this.count == 1){
    	this.upTwo = function(){
    		sound.quesTwoAudio();
	    }
	    this.schedule(this.upTwo,8,cc.REPEAT_FOREVER,1);
    }
    if(this.count == 2){
    	this.upThree = function(){
    		sound.quesThreeAudio();
	    }
	    this.schedule(this.upThree,8,cc.REPEAT_FOREVER,1);
	}
    if(this.count == 3){
    	this.upFour = function(){
    		sound.quesFourAudio();
	    }
	    this.schedule(this.upFour,8,cc.REPEAT_FOREVER,1);
	}
  },
  dragAction : function(){
    /*设置 初始坐标 */
    var dragX,dragY;
    // 创建一个事件监听器 OneByOne 为单点触摸
    this.listener1 = cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,      // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
        onTouchBegan: function (touch, event) {       //实现 onTouchBegan 事件处理回调函数
            var target = event.getCurrentTarget();    // 获取事件所绑定的 target, 通常是cc.Node及其子类 
            /*end 时是否恢复原位*/
            this.moveFlag = true;
            // 获取当前触摸点相对于按钮所在的坐标
            var locationInNode = target.convertToNodeSpace(touch.getLocation());  //转换为本地坐标系的坐标 
            var s = target.getContentSize();   //获取 touch 元素的数据(宽高)       
            var rect = cc.rect(0, 0, s.width, s.height); //元素范围

            if (cc.rectContainsPoint(rect, locationInNode)) {     // 判断触摸点是否在按钮范围内 
                /*按键声*/
                sound.buttonAudio();
                if(this.count == 0){
                	this.unschedule(this.upOne);
                }
                if(this.count == 1){
                	this.unschedule(this.upTwo);
                }
                if(this.count == 2){
                	this.unschedule(this.upThree);
				}
				if(this.count == 3){
                	this.unschedule(this.upFour);
				}
                /*保存原始坐标*/
                dragX = target.getPosition().x;
                dragY = target.getPosition().y;
                return true;
            }
            return false;
        }.bind(this),
         onTouchEnded: function (touch, event) {            // 实现onTouchEnded事件处理回调函数                        
			var target = event.getCurrentTarget();
			updata.finish_steps++;
            //第一关
            if(this.count == 0){
           		if(target.id == 1){
           			sound.rightAudio();
           			this.scheduleOnce(function(){
           				sound.carHornAudio();
           				target.runAction(cc.sequence(cc.jumpBy(0.2,cc.p(0,0),20,1),cc.delayTime(0.01),cc.moveBy(1,800,0)))
					},0.6)
           			this.scheduleOnce(function(){
           				sound.carStartAudio();
           			},0.4)
					/*移除所以监听事件*/
					cc.eventManager.removeAllListeners();
					var _this = cc.director.getRunningScene().getChildByTag(2);
					_this.onTouchBegan();
					/*出现飞星*/
					this.scheduleOnce(function(){
						var _this = cc.director.getRunningScene().getChildByTag(2);
						_this.rightStar(this.count);
						sound.starAudio();
					},2)
					this.scheduleOnce(function(){
						/*重新渲染画布*/
						this.review();
					},3)
				}else{
           			sound.wrongAudio();
            	}
            }
            //第二关
            if(this.count == 1){
            	if(target.id == 1){
            		sound.rightAudio();
            		this.scheduleOnce(function(){
            			sound.boxOpenAudio();
            			target.initWithFile(res.GifOneOpen);
            		},0.6)
					/*移除所以监听事件*/
					cc.eventManager.removeAllListeners();
					var _this = cc.director.getRunningScene().getChildByTag(2);
					_this.onTouchBegan();
					/*出现飞星*/
					this.scheduleOnce(function(){
						var _this = cc.director.getRunningScene().getChildByTag(2);
						_this.rightStar(this.count);
						sound.starAudio();
					},2)
					this.scheduleOnce(function(){
						/*重新渲染画布*/
						this.review();
					},3)
				}else{
            		sound.wrongAudio();
            	}
            }
            //第三关
            if(this.count == 2){
            	if(target.id == 1){
            		sound.rightAudio();
            		this.scheduleOnce(function(){
            			sound.planAudio();
            			target.runAction(cc.sequence(cc.jumpBy(0.2,cc.p(0,0),20,1),cc.delayTime(0.01),cc.moveBy(1,-500,0)))
					},0.4)
					/*移除所以监听事件*/
					cc.eventManager.removeAllListeners();
					var _this = cc.director.getRunningScene().getChildByTag(2);
					_this.onTouchBegan();
					/*出现飞星*/
					this.scheduleOnce(function(){
						var _this = cc.director.getRunningScene().getChildByTag(2);
						_this.rightStar(this.count);
						sound.starAudio();
					},2)
					this.scheduleOnce(function(){
						/*重新渲染画布*/
						this.review();
					},3)
				}else{
            		sound.wrongAudio();
            	}
            }
            //第四关
            if(this.count == 3){
            	if(target.id == 3){
            		sound.rightAudio();
            		this.schedule(function(){
            			sound.jumpAudio();
            		},0.3,2,0.5)
					this.scheduleOnce(function(){
						target.runAction(cc.jumpBy(1,cc.p(0,0), 20, 3));
					},0.4)
					/*移除所以监听事件*/
					cc.eventManager.removeAllListeners();
					var _this = cc.director.getRunningScene().getChildByTag(2);
					_this.onTouchBegan();
					/*出现飞星*/
					this.scheduleOnce(function(){
						var _this = cc.director.getRunningScene().getChildByTag(2);
						_this.rightStar(this.count);
						sound.starAudio();
					},2)
					this.scheduleOnce(function(){
						/*重新渲染画布*/
						this.review();
					},3)
				}else{
            		sound.wrongAudio();
            	}
            }
        }.bind(this)
       }) 
       // 添加监听器到管理器
		var len = this.dragArr.length;
		for(var i = 0 ; i < len ; i++){
		  cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
		}
   },
   review : function(){
	this.count ++;
	updata.finish_star++;
    /*清楚*/
    var len = this.dragArr.length;
    for(var i = 0 ; i < len ; i++){
      this.dragArr[i].removeFromParent();
    } 
    this.dragArr = [];
    if(this.count < 4){
      this.init()  
      /*添加监听*/
      var len = this.dragArr.length;
      for(var i = 0 ; i < len ; i++){
        cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
      }        
    }else{
      sound.stopAudio();
	  sound.winAudio();
	  updata.finish_star = this.count;
	  updata.is_finish = 1;
      var _this = cc.director.getRunningScene().getChildByTag(2);
      _this.gameEnd(this.count);
    }               
}
});
