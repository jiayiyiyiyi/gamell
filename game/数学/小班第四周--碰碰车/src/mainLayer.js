var MainLayer=cc.Layer.extend({
	ctor:function(){
		this._super();
		var size = cc.director.getWinSize();
	    this.count = 0;
	    this.comCon();
	    this.init();
	    this.onOff = true;
	    this.openArr=[];
	    this.updas = function(){
			sound.startTipAudio();
	    }
	    this.schedule(this.updas,8,cc.REPEAT_FOREVER,1);
	    /*可以拖拽*/
	    this.scheduleOnce(function(){
	      this.hintAction();
	      this.dragAction();
	    },1)
	},
	comCon:function(){
		this.plate = cc.Sprite.create(res.Plate);
	    this.plate.setAnchorPoint(0, 0);
	    this.plate.setPosition(0*fix, 0*fix);
	    this.plate.setScale(0.305*fix);
	    this.addChild(this.plate, 0);
		},
		init:function(){
			this.pos=[
				{
					x:198,
					y:8.7
				},
				{
					x:403.7,
					y:8.7
				}
			]
		this.sprArr=data.sprites[this.count];
		this.carOne = cc.Sprite.create(this.sprArr[0].carOne);
	    this.carOne.setAnchorPoint(0, 0);
	    this.carOne.id=this.sprArr[0].id;
	    this.carOne.setPosition(138.7*fix, 163*fix);
	    this.carOne.setScale(0.305*fix);
	    this.addChild(this.carOne, 2);
	    
	    var sum=Math.floor(Math.random()*this.pos.length);
	    this.setOne = cc.Sprite.create(this.sprArr[0].setOne);
	    this.setOne.setAnchorPoint(0, 0);
	    this.setOne.id=this.sprArr[0].id;
	    this.setOne.setPosition(this.pos[sum].x*fix, this.pos[sum].y*fix);
	    this.pos.splice(sum,1);
	    this.setOne.setScale(0.305*fix);
	    this.addChild(this.setOne, 0);
			
		this.carTwo = cc.Sprite.create(this.sprArr[1].carTwo);
	    this.carTwo.setAnchorPoint(0, 0);
	    this.carTwo.id=this.sprArr[1].id;
	    this.carTwo.setPosition(409*fix, 163*fix);
	    this.carTwo.setScale(0.305*fix);
	    this.addChild(this.carTwo, 2);
			
		sum=Math.floor(Math.random()*this.pos.length);
		this.setTwo = cc.Sprite.create(this.sprArr[1].setTwo);
	    this.setTwo.setAnchorPoint(0, 0);
	    this.setTwo.id=this.sprArr[1].id;
	    this.setTwo.setPosition(this.pos[sum].x*fix, this.pos[sum].y*fix);
	    this.pos.splice(sum,1);
	    this.setTwo.setScale(0.305*fix);
	    this.addChild(this.setTwo, 0);
	    
	    this.dragArr=[this.setOne,this.setTwo];
	    this.carArr=[this.carOne,this.carTwo];
		},
	hintAction : function(){
	  	var handX = this.setTwo.x+40;
	  	var handY = this.setTwo.y;
	    //手提示
	    this.hand = new cc.Sprite(res.Hand);
	    this.hand.setAnchorPoint(0.5, 0.5);
	    this.hand.setPosition(handX,handY);
	    this.hand.setScale(0.3*fix);
	    this.hand.opacity=255;
	    this.addChild(this.hand, 800);
	  
	    var shoucb = cc.callFunc(function(){
	      this.hand.setPosition(handX,handY);
	    }.bind(this));
	    var shouaction = cc.sequence(cc.moveTo(1,cc.p(449*fix,163*fix)),cc.delayTime(0.5),shoucb).repeatForever();
	   
	    this.hand.runAction(shouaction);
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
                    this.unschedule(this.updas);
                    if(target.id == 1){
                        sound.bigAudio();
                    }
                    if(target.id == 2){
                        sound.smallAudio();
                    }
                    //隐藏手势
                    var action = cc.moveTo(1,cc.p(this.setTwo.x+40,this.setTwo.y));
                    this.hand.runAction(action);
                    this.scheduleOnce(function(){
                        this.hand.setOpacity(0);
                    },0.8);
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
		for(var i=0;i<this.carArr.length;i++){
			var s = this.carArr[i].getBoundingBox();
			var rect = cc.rect(s.x, s.y , s.width, s.height);
			var drag = target.getBoundingBox();
		    			
			// 碰撞检测
			if (cc.rectIntersectsRect(drag, rect)) {
				/*如果匹配成功*/
				if(target.id == this.carArr[i].id){
					sound.rightAudio();
					//移除监听
					cc.eventManager.removeAllListeners();
					var _this = cc.director.getRunningScene().getChildByTag(2);
					_this.onTouchBegan();
					/*提示声音*/
					//sound.rightAudio();
					//添加到数组
					this.openArr.push(target);
					//第一关
					if(this.count==0){
						//更换图片
						if(this.carArr[i].width==548){
							this.carArr[i].initWithFile(res.CarBig);
						}else if(this.carArr[i].width==390){
							this.carArr[i].initWithFile(res.CarSmall);
						}
						target.runAction(cc.fadeOut(0.1));
					}
					//第二关
					if(this.count==1){
						/*设置层级*/
						target.setLocalZOrder(1);
						if(this.carArr[i].width==548){
							target.setPosition(175*fix,192*fix);
						}else if(this.carArr[i].width==390){
							target.setPosition(435*fix,185*fix);
						}
					}
					//第三关
					if(this.count==2){
						/*设置层级*/
						target.setLocalZOrder(0);
						//更换图片
						if(this.carArr[i].width==548){
							target.setPosition(141*fix,181*fix);
							target.initWithFile(res.LionLaugh);
							sound.lionAudio();
						}else if(this.carArr[i].width==390){
							target.setPosition(405*fix,181*fix);
							target.initWithFile(res.MouseLaugh);
							sound.mouseAudio();
						}
					}
					//第四关
					if(this.count==3){
						/*设置层级*/
						target.setLocalZOrder(1);
						if(this.carArr[i].width==548){
							target.setPosition(96*fix,222*fix);
						}else if(this.carArr[i].width==390){
							target.setPosition(375*fix,215*fix);
						}
					}
					this.moveFlag = false;
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
					sound.wrongAudio();
					}
				}
			}
			if(this.openArr.length==2){
				this.scheduleOnce(function(){
					/*重新渲染画布*/
					this.review();
				},2.3)
				/*出现飞星*/
				this.scheduleOnce(function(){
					var _this = cc.director.getRunningScene().getChildByTag(2);
					_this.rightStar(this.count);
					sound.starAudio();
				},0.8)
			}
  },
  review : function(){
	var len = this.dragArr.length;
    for(var i = 0 ; i < len ; i++){
      this.dragArr[i].removeFromParent();
    } 
    this.dragArr = [];
    for(var i=0;i<this.carArr.length;i++){
    	this.carArr[i].removeFromParent();
    }
	this.carArr = [];
	updata.finish_star++;
	this.count ++;
	
	for(var i = 0; i < this.openArr.length; i++){
    this.openArr[i].removeFromParent();
  	}
	this.openArr = [];
	if(this.count==2){
		this.fixThree();
	}
	if(this.count==3){
		this.fixFour();
 		}
    if(this.count < 4){
      this.init()  
      /*添加监听*/
      var len = this.dragArr.length;
      for(var i = 0 ; i < len ; i++){
        cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
      }        
    }else{
	  this.fixEnd();
	  updata.finish_star = this.count;
	  updata.is_finish = 1;
      var _this = cc.director.getRunningScene().getChildByTag(2);
      this.scheduleOnce(_this.gameEnd.bind(this,this.count),1);
    }               
  },
  fixThree:function(){
  		this.sixOne = cc.Sprite.create(res.SeatBig);
	    this.sixOne.setAnchorPoint(1, 0);
	    this.sixOne.setPosition(234.7*fix, 192*fix);
	    this.sixOne.setScale(0.305*fix);
	    this.addChild(this.sixOne, 1);
	    
	    this.sixTwo = cc.Sprite.create(res.SeatSmall);
	    this.sixTwo.setAnchorPoint(0, 0);
	    this.sixTwo.setPosition(435*fix, 185*fix);
	    this.sixTwo.setScale(0.305*fix);
	    this.addChild(this.sixTwo, 1);
  },
  fixFour:function(){
  		this.sixThree = cc.Sprite.create(res.LionLaugh);
	    this.sixThree.setAnchorPoint(1, 0);
	    this.sixThree.setPosition(248*fix, 181*fix);
	    this.sixThree.setScale(0.305*fix);
	    this.addChild(this.sixThree, 0);
	    
	    this.sixFour = cc.Sprite.create(res.MouseLaugh);
	    this.sixFour.setAnchorPoint(0, 0);
	    this.sixFour.setPosition(405*fix, 181*fix);
	    this.sixFour.setScale(0.305*fix);
	    this.addChild(this.sixFour, 0);
  },
  fixEnd:function(){
  		this.carOne = cc.Sprite.create(res.CarBig);
	    this.carOne.setAnchorPoint(1, 0);
	    this.carOne.setPosition(207.7*fix, 163*fix);
	    this.carOne.setScale(0.305*fix);
	    this.addChild(this.carOne, 2);
	    
	    this.carTwo = cc.Sprite.create(res.CarSmall);
	    this.carTwo.setAnchorPoint(0, 0);
	    this.carTwo.setPosition(409*fix, 163*fix);
	    this.carTwo.setScale(0.305*fix);
	    this.addChild(this.carTwo, 2);
	    
  		this.sixFive = cc.Sprite.create(res.RedFlag);
	    this.sixFive.setAnchorPoint(1, 0);
	    this.sixFive.setPosition(96*fix, 222*fix);
	    this.sixFive.setScale(0.305*fix);
	    this.addChild(this.sixFive, 0);
	    
	    this.sixSix = cc.Sprite.create(res.BlueFlag);
	    this.sixSix.setAnchorPoint(0, 0);
	    this.sixSix.setPosition(375*fix, 215*fix);
	    this.sixSix.setScale(0.305*fix);
	    this.addChild(this.sixSix, 0);
	    
	    this.footOne = cc.Sprite.create(res.ProjeBig);
	    this.footOne.setAnchorPoint(0, 0);
	    this.footOne.setPosition(207*fix, 160*fix);
	    this.footOne.setScale(0.305*fix);
	    this.addChild(this.footOne, 0);
	    
	    this.footTwo = cc.Sprite.create(res.ProjeSmall);
	    this.footTwo.setAnchorPoint(0, 0);
	    this.footTwo.setPosition(382*fix, 160*fix);
	    this.footTwo.setScale(0.305*fix);
	    this.addChild(this.footTwo, 0);

		this.footOne.setOpacity(0);
      	this.footTwo.setOpacity(0);
	    //动画
	    function get(x,y,c,e){
			var action_1 = cc.moveBy(0.1,cc.p(x,y));
			var action_2 = cc.rotateBy(0.1,e)
			c.runAction(cc.sequence(action_1.clone(),cc.delayTime(0.01),action_2.clone()));
	    }
	    
	    this.endArr=[this.carOne,this.sixOne,this.sixThree,this.sixFive];
		get(155*fix,0,this.endArr[0],15*fix);
		get(67*fix,15*fix,this.endArr[1],15*fix);
		get(62*fix,13*fix,this.endArr[2],15*fix);
		get(150*fix,35*fix,this.endArr[3],13*fix);

		this.scheduleOnce(function(){
            this.footOne.setOpacity(255);
		},0.1)

	    this.endedArr=[this.carTwo,this.sixTwo,this.sixFour,this.sixSix];
        get(-30*fix,0,this.endedArr[0],-15*fix);
        get(-35*fix,4*fix,this.endedArr[1],-15*fix);
        get(-30*fix,0,this.endedArr[2],-15*fix);
        get(-45*fix,0,this.endedArr[3],-15*fix);
	     /*设置层级*/
        this.sixSix.setLocalZOrder(3);
      	this.footTwo.setOpacity(255);
      	sound.kindsAudio();
  }
})
