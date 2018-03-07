/*主层*/
var MainLayer = cc.Layer.extend({
  ctor:function () {
    this._super();
    this.count = 0;
    /*公共*/
    this.comCon();
    /*初始化界面*/
    this.init();
    this.onOff = true;
    this.dragAction();
    /*背景音乐*/
    sound.gameBgAudio();
    this.openArr = [];
	},
	comCon:function(){
    //加号
	this.plus = cc.Sprite.create(res.Plus);
    this.plus.setAnchorPoint(0, 0);
    this.plus.setPosition(266*fix, 142+50*fix);
    this.plus.setScale(0.333*fix);
    this.addChild(this.plus, 0);
    //等号
    this.sign = cc.Sprite.create(res.Sign);
    this.sign.setAnchorPoint(0, 0);
    this.sign.setPosition(434*fix, 142+55*fix);
    this.sign.setScale(0.333*fix);
    this.addChild(this.sign, 0);
    //上加号
	this.plusUp = cc.Sprite.create(res.Plus);
    this.plusUp.setAnchorPoint(0, 0);
    this.plusUp.setPosition(266*fix, 142+168*fix);
    this.plusUp.setScale(0.333*fix);
    this.addChild(this.plusUp, 0);
    //上等号
    this.signUp = cc.Sprite.create(res.Sign);
    this.signUp.setAnchorPoint(0, 0);
    this.signUp.setPosition(435*fix, 142+170*fix);
    this.signUp.setScale(0.333*fix);
    this.addChild(this.signUp, 0);
	},
	init:function(){
				//卡槽
	this.spr = data.cards[this.count];
	this.slotOne = cc.Sprite.create(res.CardSlot);
    this.slotOne.setAnchorPoint(0, 0);
    this.slotOne.setPosition(152*fix, 142+18*fix);
	this.slotOne.id = this.spr[0].id;
    this.slotOne.setScale(0.333*fix);
    this.addChild(this.slotOne, 0);
    
	this.slotTwo = cc.Sprite.create(res.CardSlot);
    this.slotTwo.setAnchorPoint(0, 0);
    this.slotTwo.setPosition(322*fix, 142+18*fix);
    this.slotTwo.id = this.spr[1].id;
    this.slotTwo.setScale(0.333*fix);
    this.addChild(this.slotTwo, 0);
    
	this.slotThree = cc.Sprite.create(res.CardSlot);
    this.slotThree.setAnchorPoint(0, 0);
    this.slotThree.setPosition(490*fix, 142+18*fix);
    this.slotThree.id = this.spr[2].id;
    this.slotThree.setScale(0.333*fix);
    this.addChild(this.slotThree, 0);
		    //卡片位置
    this.pos = [
		{
			x:128,
			y:17
		},
		{
			x:256,
			y:17
		},
		{
			x:384,
			y:17
		},
		{
			x:512,
			y:17
		}
    ]
    //卡片
	var sum=Math.floor(Math.random()*this.pos.length);
	this.one = cc.Sprite.create(this.spr[0].one);
	this.one.setAnchorPoint(0, 0);
	this.one.setPosition(this.pos[sum].x*fix, this.pos[sum].y*fix);
	this.one.id = this.spr[0].id;
	this.one.setScale(0.333*fix);
	this.addChild(this.one, 1);
	this.pos.splice(sum,1);
	    	
	sum=Math.floor(Math.random()*this.pos.length);
	this.two = cc.Sprite.create(this.spr[1].one);
	this.two.setAnchorPoint(0, 0);
	this.two.setPosition(this.pos[sum].x*fix, this.pos[sum].y*fix);
	this.two.id = this.spr[1].id;
	this.two.setScale(0.333*fix);
	this.addChild(this.two, 1);
	this.pos.splice(sum,1);
	    	
	sum=Math.floor(Math.random()*this.pos.length);
	this.three = cc.Sprite.create(this.spr[2].one);
	this.three.setAnchorPoint(0, 0);
	this.three.setPosition(this.pos[sum].x*fix, this.pos[sum].y*fix);
	this.three.id = this.spr[2].id;
	this.three.setScale(0.333*fix);
	this.addChild(this.three, 1);
	this.pos.splice(sum,1);
	    	
	sum=Math.floor(Math.random()*this.pos.length);
	this.four = cc.Sprite.create(this.spr[3].one);
	this.four.setAnchorPoint(0, 0);
	this.four.setPosition(this.pos[sum].x*fix, this.pos[sum].y*fix);
	this.four.id = this.spr[3].id;
	this.four.setScale(0.333*fix);
	this.addChild(this.four, 1);
	this.pos.splice(sum,1);
		//上方数字
	this.num = data.numbers[this.count];
	this.numOne = cc.Sprite.create(this.num[0].one);
	this.numOne.setAnchorPoint(0, 0);
	this.numOne.setPosition(184*fix, 142+156*fix);
	this.numOne.setScale(0.333*fix);
	this.addChild(this.numOne, 1);

	this.numTwo = cc.Sprite.create(this.num[0].two);
	this.numTwo.setAnchorPoint(0, 0);
	this.numTwo.setPosition(355*fix, 142+156*fix);
	this.numTwo.setScale(0.333*fix);
	this.addChild(this.numTwo, 1);
	    
	this.numThree = cc.Sprite.create(this.num[0].three);
	this.numThree.setAnchorPoint(0, 0);
	this.numThree.setPosition(519*fix, 142+156*fix);
	this.numThree.setScale(0.333*fix);
	this.addChild(this.numThree, 1);
	    
	this.dragArr = [this.one,this.two,this.three,this.four];
	this.cards = [this.slotOne,this.slotTwo,this.slotThree];
	this.nums = [this.numOne,this.numTwo,this.numThree];
	    
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
    if(this.count == 4){
		this.upFive = function(){
			sound.quesFiveAudio();
	    }
	    this.schedule(this.upFive,8,cc.REPEAT_FOREVER,1);
		}
    if(this.count == 5){
		this.upSix = function(){
			sound.quesSixAudio();
	    }
	    this.schedule(this.upSix,8,cc.REPEAT_FOREVER,1);
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
			if(this.onOff){
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
                    this.onOff = false;
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
                    if(this.count == 4){
                        this.unschedule(this.upFive);
                    }
                    if(this.count == 5){
                        this.unschedule(this.upSix);
                    }
                    /*保存原始坐标*/
                    dragX = target.getPosition().x;
                    dragY = target.getPosition().y;
                    return true;
                }
                return false;
			}
        }.bind(this),
        onTouchMoved: function (touch, event) {            //实现onTouchMoved事件处理回调函数, 触摸移动时触发
               
                var size = cc.director.getWinSize();
                // 移动当前按钮精灵的坐标位置
                var target = event.getCurrentTarget();
                
                var delta = touch.getDelta();              //获取事件数据: delta
                /*设置层级*/
                target.setLocalZOrder(2);
    
                /*判断边界*/
                var moveX = target.x += delta.x;
                var moveY = target.y += delta.y;
                var wid = target.getBoundingBox().width;
                var heg = target.getBoundingBox().height;
                if(moveX + wid > size.width){
                  target.x = size.width - wid;
                }
                if(moveY + heg > size.height){
                  target.y = size.height - heg;
                }
                if(target.x < 0){
                  target.x = 0
                }
                if(target.y < 0){
                  target.y = 0
                } 
            }.bind(this),
        onTouchEnded: function (touch, event) {            // 实现onTouchEnded事件处理回调函数                        
			var target = event.getCurrentTarget();
			updata.finish_steps++;
			this.onOff = true;
            this.judgeEach(target);
            if(this.moveFlag){
              //回到原位
              target.setPosition(dragX,dragY);
            }
        }.bind(this)
    });

    // 添加监听器到管理器
    var len = this.dragArr.length;
    for(var i = 0 ; i < len ; i++){
      cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
    } 
 },
 judgeEach : function(target){
  	var flag = false;
   	for(var i=0;i<this.cards.length;i++){
   		/*挑选相同 ID*/
   		var s = this.cards[i].getBoundingBox();
   		var rect = cc.rect(s.x, s.y , s.width, s.height);
   		var drag = target.getBoundingBox();
   		// 碰撞检测
		if (cc.rectIntersectsRect(drag, rect)) {
			if(this.count < 4){
				/*如果匹配成功*/
				if(target.id == this.cards[i].id){
					flag = true;
			        /*提示声音*/
                      // sound.rightAudio();
			        /*移除所以监听事件*/
			        cc.eventManager.removeAllListeners();
			        var _this = cc.director.getRunningScene().getChildByTag(2);
			        _this.onTouchBegan();
			
			        this.moveFlag = false;
			        //添加到数组
					this.openArr.push(target);
					if(this.cards[i].id == 1){
						target.setPosition(152*fix,142+18*fix)
					}
					if(this.cards[i].id == 2){
						target.setPosition(322*fix,142+18*fix);
					}
					if(this.cards[i].id == 4){
						target.setPosition(490*fix,142+18*fix);
					}
			       //移除
					for(var j=0;j<this.dragArr.length;j++){
						if(target == this.dragArr[j]){
							this.dragArr.splice(j,1);
						}
					}
					/*添加监听*/
					var len = this.dragArr.length;
					for(var j = 0 ; j < len ; j++){
				        cc.eventManager.addListener(this.listener1.clone(), this.dragArr[j]);
					}
			      }else{
			        // sound.wrongAudio();
			        // var _this = cc.director.getRunningScene().getChildByTag(2);
			        // _this.wrongStar();
			      }
			    }
			    if(this.count >= 4){
		    			 /*如果匹配成功*/
			      if((target.id == 1&&this.cards[i].id==1) || (target.id == 2&&this.cards[i].id==2) || (target.id == 1&&this.cards[i].id==2) || (target.id == 2&&this.cards[i].id == 1)){
			      	flag = true;
			      	this.cards[i].id = 10;
					  /*移除所以监听事件*/
			        cc.eventManager.removeAllListeners();
			        var _this = cc.director.getRunningScene().getChildByTag(2);
			        _this.onTouchBegan();
			
			        this.moveFlag = false;
			           //添加到数组
					this.openArr.push(target);
					if(this.cards[i].x == 152*fix){
						target.setPosition(152*fix,142+18*fix)
					}
					if(this.cards[i].x == 322*fix){
						target.setPosition(322*fix,142+18*fix);
					}
			       //移除
				  for(var j=0;j<this.dragArr.length;j++){
					if(target == this.dragArr[j]){
						this.dragArr.splice(j,1);
						}
					}
					/*添加监听*/
					var len = this.dragArr.length;
					for(var j = 0 ; j < len ; j++){
				        cc.eventManager.addListener(this.listener1.clone(), this.dragArr[j]);
					}
			      }else{

			      }
		    			 /*如果匹配成功*/
			      if(target.id == 4&&this.cards[i].id == 4){
			        flag = true;
			        /*移除所以监听事件*/
			        cc.eventManager.removeAllListeners();
			        var _this = cc.director.getRunningScene().getChildByTag(2);
			        _this.onTouchBegan();
			
			        this.moveFlag = false;
			           //添加到数组
					this.openArr.push(target);
					if(this.cards[i].x == 490*fix){
						target.setPosition(490*fix,142+18*fix);
					}
			       //移除
					for(var j=0;j<this.dragArr.length;j++){
						if(target == this.dragArr[j]){
							this.dragArr.splice(j,1);
						}
					}
							/*添加监听*/
				    var len = this.dragArr.length;
				    for(var j = 0 ; j < len ; j++){
				        cc.eventManager.addListener(this.listener1.clone(), this.dragArr[j]);
					}
			      }else{
			        // sound.wrongAudio();
			        // var _this = cc.director.getRunningScene().getChildByTag(2);
			        // _this.wrongStar();
			      }
			  }
			  if(flag){
				  sound.rightAudio();
			  }else{
				  sound.wrongAudio();
				  var _this = cc.director.getRunningScene().getChildByTag(2);
				  _this.wrongStar();
			  }
		    }
   	}
   	if(this.openArr.length == 3){
	        /*移除所以监听事件*/
        cc.eventManager.removeAllListeners();
        var _this = cc.director.getRunningScene().getChildByTag(2);
        _this.onTouchBegan();
		        /*出现飞星*/
        this.scheduleOnce(function(){
          var _this = cc.director.getRunningScene().getChildByTag(2);
          _this.rightStar(this.count);
          sound.starAudio();
        },0.8)
        this.scheduleOnce(function(){
          /*重新渲染画布*/ 
          this.review();                     
        },2.3)
   	}
  },
  review : function(){
  	updata.finish_star++;
    this.count ++;
    /*清楚*/
    var len = this.dragArr.length;
    for(var i = 0 ; i < len ; i++){
      this.dragArr[i].removeFromParent();
    } 
    this.dragArr = [];
    var len = this.cards.length;
    for(var i = 0 ; i < len ; i++){
      this.cards[i].removeFromParent();
    } 
    this.cards = [];
    var len = this.nums.length;
    for(var i = 0 ; i < len ; i++){
      this.nums[i].removeFromParent();
    } 
    this.nums = [];
    for(var i = 0; i < this.openArr.length; i++){
        this.openArr[i].removeFromParent();
      }
  	this.openArr = [];
    if(this.count < 6){
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
