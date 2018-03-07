//每个场景创建一个文件
var Layer1 = cc.Layer.extend({
    ctor: function() {
		this._super();
		this.conCom();
		this.openArr = [];
		this.clicks = 0;
		this.eat = 0;
		this.num = 0;
		this.song = 0;
		this.onOff = true;
		this.initOne();
		this.hintAction();
		this.dragAction();
    },
    conCom:function(){
    	this.tree = cc.Sprite.create(arrsubject[0].url);
	    this.tree.setAnchorPoint(0, 0);
	    this.tree.setPosition(arrsubject[0].sX*fix, arrsubject[0].sY*fix);
	    this.tree.setScale(2/3*fix);
	    this.addChild(this.tree, 1);
	    //云
	    this.cloudTwo = cc.Sprite.create(arrsubject[1].url);
	    this.cloudTwo.setAnchorPoint(0, 0);
	    this.cloudTwo.setPosition(arrsubject[1].sX*fix, arrsubject[1].sY*fix);
	    this.cloudTwo.setScale(0.333*fix);
	    this.addChild(this.cloudTwo, 0);
	    //鸟巢
	    this.nest = cc.Sprite.create(arrsubject[2].url);
	    this.nest.setAnchorPoint(0, 0);
	    this.nest.setPosition(arrsubject[2].sX*fix, arrsubject[2].sY*fix);
	    this.nest.setScale(0.333*fix);
	    this.addChild(this.nest, 2);
	    //云
		this.cloudOne = cc.Sprite.create(arrsubject[3].url);
	    this.cloudOne.setAnchorPoint(0, 0);
	    this.cloudOne.setPosition(arrsubject[3].sX*fix, arrsubject[3].sY+70/fix-70);
	    this.cloudOne.setScale(0.333*fix);
	    this.addChild(this.cloudOne, 0);
	    //云做运动
	    var action_1 = cc.moveBy(15,cc.p(-300*fix,0));
	    var action_2 = action_1.reverse();
	    var action = cc.sequence(action_1,cc.delayTime(0.01),action_2);
	    action.repeatForever();
	    this.cloudOne.runAction(action);
    },
    initOne:function(){
	    //鸟妈妈
	    this.cloudOne = cc.Sprite.create(arrsubject[4].url);
	    this.openArr.push(this.cloudOne);
	    this.cloudOne.setAnchorPoint(0, 0);
	    this.cloudOne.setPosition(arrsubject[4].sX*fix, arrsubject[4].sY*fix);
	    this.cloudOne.id = arrsubject[4].id;
	    this.cloudOne.setScale(0.333*fix);
	    this.addChild(this.cloudOne, 3);

	    this.egg = cc.Sprite.create(arrsubject[6].url);
	    this.openArr.push(this.egg);
	    this.egg.setAnchorPoint(0, 0);
	    this.egg.setPosition(arrsubject[6].sX*fix, arrsubject[6].sY*fix);
	    this.egg.id = arrsubject[6].id;
	    this.egg.setScale(0.333*fix);
	    this.addChild(this.egg, 2);
	    this.egg.setOpacity(0);
	    
	    this.dragArr = [this.cloudOne];
    },
    hintAction : function(){
    //手提示
    this.hand = cc.Sprite.create(res.Hand);
    this.hand.setAnchorPoint(0, 0);
    this.hand.setPosition(332*fix,127*fix);
    this.hand.setScale(0.333*fix);
    this.addChild(this.hand, 6);

    this.flay(this.hand,res.HandClick,res.Hand,0.3,0.3);
  },
    initTwo:function(){
		//孵蛋
	this.egg = cc.Sprite.create(arrsubject[6].url);
	this.openArr.push(this.egg);
	this.egg.setAnchorPoint(0, 0);
	this.egg.setPosition(arrsubject[6].sX*fix, arrsubject[6].sY*fix);
	this.egg.id = arrsubject[6].id;
	this.egg.setScale(0.333*fix);
	this.addChild(this.egg, 2);
	    
	this.kid = cc.Sprite.create(arrsubject[7].url);
	this.openArr.push(this.kid);
	this.kid.setAnchorPoint(0.5, 0.5);
	this.kid.setPosition(arrsubject[7].sX*fix, arrsubject[7].sY*fix);
	this.kid.id = arrsubject[7].id;
	this.kid.setScale(0.333*fix);
	this.addChild(this.kid, 2);

	this.broke = cc.Sprite.create(arrsubject[8].url);
	this.openArr.push(this.broke);
	this.broke.setAnchorPoint(0, 0);
	this.broke.setPosition(arrsubject[8].sX*fix, arrsubject[8].sY*fix);
	this.broke.setScale(0.333*fix);
	this.addChild(this.broke, 2);
	//隐藏
	this.kid.setOpacity(0);
	this.broke.setOpacity(0);
	//虫
	this.box = cc.Sprite.create(arrsubject[9].url);
	this.openArr.push(this.box);
	this.box.setAnchorPoint(0, 0);
	this.box.setPosition(arrsubject[9].sX*fix, arrsubject[9].sY*fix);
	this.box.setScale(0.333*fix);
	this.addChild(this.box, 2);
	    
	this.boxTwo = cc.Sprite.create(arrsubject[9].url);
	this.openArr.push(this.boxTwo);
	this.boxTwo.setAnchorPoint(0, 0);
	this.boxTwo.setPosition(arrsubject[9].nX*fix, arrsubject[9].nY*fix);
	this.boxTwo.setScale(0.333*fix);
	this.addChild(this.boxTwo, 2);
	this.box.setOpacity(0);
	this.boxTwo.setOpacity(0);

	this.foodOne1 = cc.Sprite.create(arrsubject[10].url);
	this.openArr.push(this.foodOne1);
	this.foodOne1.setAnchorPoint(0, 0);
	this.foodOne1.setPosition(arrsubject[10].sX*fix, arrsubject[10].sY*fix);
	this.foodOne1.id = arrsubject[10].id;
	this.foodOne1.setScale(0.333*fix);
	this.addChild(this.foodOne1, 3);

	this.foodOne2 = cc.Sprite.create(arrsubject[10].url);
	this.openArr.push(this.foodOne2);
	this.foodOne2.setAnchorPoint(0, 0);
	this.foodOne2.setPosition(arrsubject[10].nX*fix, arrsubject[10].nY*fix);
	this.foodOne2.id = arrsubject[11].id;
	this.foodOne2.setScale(0.333*fix);
	this.addChild(this.foodOne2, 3);

	this.foodOne3 = cc.Sprite.create(arrsubject[10].url);
	this.openArr.push(this.foodOne3);
	this.foodOne3.setAnchorPoint(0, 0);
	this.foodOne3.setPosition(arrsubject[10].oX*fix, arrsubject[10].oY*fix);
	this.foodOne3.id = arrsubject[11].id;
	this.foodOne3.setScale(0.333*fix);
	this.addChild(this.foodOne3, 3);

	this.foodOne4 = cc.Sprite.create(arrsubject[10].url);
	this.openArr.push(this.foodOne4);
	this.foodOne4.setAnchorPoint(0, 0);
	this.foodOne4.setPosition(arrsubject[10].tX*fix, arrsubject[10].tY*fix);
	this.foodOne4.id = arrsubject[11].id;
	this.foodOne4.setScale(0.333*fix);
	this.addChild(this.foodOne4, 3);

	this.foodTwo1 = cc.Sprite.create(arrsubject[11].url);
	this.openArr.push(this.foodTwo1);
	this.foodTwo1.setAnchorPoint(0, 0);
	this.foodTwo1.setPosition(arrsubject[11].sX*fix, arrsubject[11].sY*fix);
	this.foodTwo1.id = arrsubject[11].id;
	this.foodTwo1.setScale(0.333*fix);
	this.addChild(this.foodTwo1, 3);
	    
	this.foodTwo2 = cc.Sprite.create(arrsubject[11].url);
	this.openArr.push(this.foodTwo2);
	this.foodTwo2.setAnchorPoint(0, 0);
	this.foodTwo2.setPosition(arrsubject[11].nX*fix, arrsubject[11].nY*fix);
	this.foodTwo2.id = arrsubject[11].id;
	this.foodTwo2.setScale(0.333*fix);
	this.addChild(this.foodTwo2, 3);

	this.foodTwo3 = cc.Sprite.create(arrsubject[11].url);
	this.openArr.push(this.foodTwo3);
	this.foodTwo3.setAnchorPoint(0, 0);
	this.foodTwo3.setPosition(arrsubject[11].oX*fix, arrsubject[11].oY*fix);
	this.foodTwo3.id = arrsubject[11].id;
	this.foodTwo3.setScale(0.333*fix);
	this.addChild(this.foodTwo3, 3);
	    
	this.apple = cc.Sprite.create(arrsubject[12].url);
	this.openArr.push(this.apple);
	this.apple.setAnchorPoint(0, 0);
	this.apple.setPosition(arrsubject[12].sX*fix, arrsubject[12].sY*fix);
	this.apple.id = arrsubject[12].id;
	this.apple.setScale(0.333*fix);
	this.addChild(this.apple, 3);

	this.lollopop = cc.Sprite.create(arrsubject[13].url);
	this.openArr.push(this.lollopop);
	this.lollopop.setAnchorPoint(0, 0);
	this.lollopop.setPosition(arrsubject[13].sX*fix, arrsubject[13].sY*fix);
	this.lollopop.id = arrsubject[13].id;
	this.lollopop.setScale(0.333*fix);
	this.addChild(this.lollopop, 3);
	    
	this.carrot = cc.Sprite.create(arrsubject[14].url);
	this.openArr.push(this.carrot);
	this.carrot.setAnchorPoint(0, 0);
	this.carrot.setPosition(arrsubject[14].sX*fix, arrsubject[14].sY*fix);
	this.carrot.id = arrsubject[14].id;
	this.carrot.setScale(0.333*fix);
	this.addChild(this.carrot, 3);

	this.fish = cc.Sprite.create(arrsubject[15].url);
	this.openArr.push(this.fish);
	this.fish.setAnchorPoint(0, 0);
	this.fish.setPosition(arrsubject[15].sX*fix, arrsubject[15].sY*fix);
	this.fish.id = arrsubject[15].id;
	this.fish.setScale(0.333*fix);
	this.addChild(this.fish, 3);
	    
	this.foodArr = [this.foodOne1,this.foodOne2,this.foodOne3,this.foodOne4,this.foodTwo1,this.foodTwo2,this.foodTwo3,this.apple,this.lollopop,this.carrot,this.fish];
	for(var i=0;i<this.foodArr.length;i++){
		this.foodArr[i].setOpacity(0);
	}
	this.dragArr = [this.egg];
    },
	initThree:function(){
		this.newBird = cc.Sprite.create(arrsubject[16].url);
		this.openArr.push(this.newBird);
	    this.newBird.setAnchorPoint(0, 0);
	    this.newBird.setPosition(arrsubject[16].sX*fix, arrsubject[16].sY*fix);
	    this.newBird.setScale(0.333*fix);
	    this.addChild(this.newBird, 3);
	    this.scheduleOnce(function(){
	    	sound.birdAudio();
        	this.flays(this.newBird,arrsubject[16].error,arrsubject[16].url,0.2,0.2);
        },0.2)
	    this.scheduleOnce(function(){
	    	this.flay(this.newBird,res.NewOne,res.NewTwo,0.2,0.2);
        },0.8)
	    this.scheduleOnce(function(){
	    	sound.stopEff();
	    	this.newBird.runAction(cc.moveBy(2,cc.p(500*fix,450*fix)));
	    	sound.fourAudio();
        },1)
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
                updata.finish_steps++;
                /*按键声*/
                sound.buttonAudio();
                if(target.id == 1){
                	this.song ++;
                	if(this.song == 1){
                        this.hand.setOpacity(0);
                        target.initWithFile(arrsubject[4].error);
                        this.egg.setOpacity(255);
                        this.scheduleOnce(function(){
                            sound.oneAudio();
                            this.flay(target,res.BigBirdFlyOne,res.BigBirdFlyTwo,0.16,0.15);
                            this.scheduleOnce(function(){
                                target.runAction(cc.moveBy(1.5,cc.p(-140*fix,50*fix)));
                            },0.1)
                            this.scheduleOnce(function(){
                                target.runAction(cc.moveBy(1.5,cc.p(-400*fix,250*fix)));
                            },0.1)
                        },0.2)
					}
				    this.scheduleOnce(function(){
				    	var len = this.dragArr.length;
					    for(var i = 0 ; i < len ; i++){
					      this.dragArr[i].removeFromParent();
					    } 
					    this.dragArr = [];
					    //删除
						var len = this.openArr.length;
					    for(var i = 0 ; i < len ; i++){
					      this.openArr[i].removeFromParent();
					    } 
					    this.openArr = [];  
					    this.initTwo();
						var len = this.dragArr.length;
						for(var i = 0 ; i < len ; i++){
							cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
						  }
			      	},2)
                }
                if(target.id == 2){
                		this.clicks ++;
                		if(this.clicks == 1){
                			sound.stopEff();
                            sound.twoAudio();
                			target.initWithFile(arrsubject[6].errorOne);
                		}
                		if(this.clicks == 2){
                			target.initWithFile(arrsubject[6].errorTwo);
                		}
                		if(this.clicks == 3){
                			target.initWithFile(arrsubject[6].errorThree);
                		}
                		if(this.clicks == 4){
                			target.initWithFile(arrsubject[6].errorFour);
							target.setOpacity(0);
							this.kid.runAction(cc.fadeIn(0.2,255));
							this.broke.setOpacity(255);
							sound.eggAudio();
                		}
                		if(this.clicks == 5){
                			this.box.setOpacity(255);
                			this.boxTwo.setOpacity(255);
                			this.broke.setOpacity(0);
                			for(var i=0;i<this.foodArr.length;i++){
                				this.foodArr[i].setOpacity(255);
                			}
                			this.foodAction();
                            sound.stopEff();
                            sound.threeAudio();
                		}
                }
                /*保存原始坐标*/
                dragX = target.getPosition().x;
                dragY = target.getPosition().y;
                return true;
            }
            return false;
        }.bind(this),
 	  })
        // 添加监听器到管理器
	    var len = this.dragArr.length;
	    for(var i = 0 ; i < len ; i++){
	      cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
	    } 
   	},
   	groundAction:function(){
   		/*设置 初始坐标 */
    var dragX,dragY;
    // 创建一个事件监听器 OneByOne 为单点触摸
    this.listener3 = cc.EventListener.create({
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
                updata.finish_steps++;
                /*按键声*/
                sound.buttonAudio();
                if(target.id == 10){
                    var len = this.foodArr.length-4;
				    for(var i = 0 ; i < len ; i++){
				      this.foodArr[i].removeFromParent();
				    }
				    this.foodArr = [];
				    this.kid.removeFromParent();
				    	var len = this.dragArr.length;
				    for(var i = 0 ; i < len ; i++){
				      this.dragArr[i].removeFromParent();
				    } 
				    this.dragArr = [];
				    //删除
				    	var len = this.openArr.length;
				    for(var i = 0 ; i < len ; i++){
				      this.openArr[i].removeFromParent();
				    } 
				    this.openArr = [];
				    this.initThree();
				    /*出现飞星*/
			        this.scheduleOnce(function(){
			          var _this = cc.director.getRunningScene().getChildByTag(10);
			          _this.rightStar(0);
			          sound.starAudio();
			        },3)
			        this.scheduleOnce(function(){
                        updata.finish_star = 1;
                        updata.is_finish = 1;
			         var _this = cc.director.getRunningScene().getChildByTag(10);
				      _this.gameEnd(1);
				      sound.winAudio();
			        },4)
                }
                /*保存原始坐标*/
                dragX = target.getPosition().x;
                dragY = target.getPosition().y;
                return true;
            }
            return false;
        }.bind(this),
      })
       cc.eventManager.addListener(this.listener3.clone(), this.kid);
   	},
   	foodAction : function(){
    /*设置 初始坐标 */
    var dragX,dragY;
    // 创建一个事件监听器 OneByOne 为单点触摸
    this.listener2 = cc.EventListener.create({
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
                    sound.stopEff();
                    this.onOff = false;
                    if(target.id === 3){
                        if(this.eat<=2){
                            this.kid.initWithFile(res.KidCrowOne);
                        }
                        if(this.eat>2&&this.eat<=4){
                            this.kid.initWithFile(res.ChickThree);
                        }
                        if(this.eat>4&&this.eat<=7){
                            this.kid.initWithFile(res.ChickSix);
                        }
                    }else{
                        if(target.x > 400){
                            if(this.eat<=2){
                                this.kid.initWithFile(res.NoOne);
                            }
                            if(this.eat>2&&this.eat<=4){
                                this.kid.initWithFile(res.NoTwo);
                            }
                            if(this.eat>4&&this.eat<=7){
                                this.kid.initWithFile(res.NoThree);
                            }
                        }else if(target.x < 400){
                            if(this.eat<=2){
                                this.kid.initWithFile(res.NoFour);
                            }
                            if(this.eat>2&&this.eat<=4){
                                this.kid.initWithFile(res.NoFive);
                            }
                            if(this.eat>4&&this.eat<=7){
                                this.kid.initWithFile(res.NoSix);
                            }
                        }
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
              if(this.eat<=2){
              	this.kid.initWithFile(res.Kid);
              }
              if(this.eat>2&&this.eat<=4){
              	this.kid.initWithFile(res.ChickFive);
              }
              if(this.eat>4&&this.eat<=7){
              	this.kid.initWithFile(res.ChickEight);
              }
            }
        }.bind(this)
    });
    // 添加监听器到管理器
    var len = this.foodArr.length;
    for(var i = 0 ; i < len ; i++){
      cc.eventManager.addListener(this.listener2.clone(), this.foodArr[i]);
    } 
 },
 judgeEach : function(target){
    /*挑选相同 ID*/             
    var s = this.kid.getBoundingBox(); 
    var rect = cc.rect(s.x, s.y , s.width, s.height);
    var drag = target.getBoundingBox();
    // 碰撞检测
    if (cc.rectIntersectsRect(drag, rect)) {  
      /*如果匹配成功*/
      if(target.id == 3){
      	/*提示声音*/
      	sound.eatAudio();
      	target.setOpacity(0);
      	this.eat ++;
      	if(this.eat <=2){
      		this.kid.initWithFile(res.KidCrowOne);
			this.scheduleOnce(function(){
				this.kid.initWithFile(res.KidCrowTwo);
			},0.2)
			this.scheduleOnce(function(){
				this.kid.initWithFile(res.Kid);
			},0.6)
      	}
      	if(this.eat >2&&this.eat <=4){
      		this.kid.initWithFile(res.ChickThree);
			this.scheduleOnce(function(){
				this.kid.initWithFile(res.ChickFour);
			},0.2)
			this.scheduleOnce(function(){
				this.kid.initWithFile(res.ChickFive);
			},0.6)
      	}
      	if(this.eat >4&&this.eat <=7){
      		this.kid.initWithFile(res.ChickSix);
			this.scheduleOnce(function(){
				this.kid.initWithFile(res.ChickSeven);
			},0.2)
			this.scheduleOnce(function(){
				this.kid.initWithFile(res.ChickEight);
			},0.6)
      	}
        /*移除所以监听事件*/
        cc.eventManager.removeAllListeners();
        var _this = cc.director.getRunningScene().getChildByTag(10);
        _this.onTouchBegan();

        this.moveFlag = false;
        //添加监听
       var len = this.foodArr.length;
        for(var i = 0 ; i < len ; i++){
          cc.eventManager.addListener(this.listener2.clone(), this.foodArr[i]);
        }
        if(this.eat == 7){
            var len = this.foodArr.length-4;
            for(var i = 0 ; i < len ; i++){
              this.foodArr[i].removeFromParent();
            }
            this.groundAction();
        }
      }else{
        sound.wrongAudio();
      }
      return true;
    }
  },
   flay:function(spr,one,two,time1,time2){
		var cb1 = cc.callFunc(function(){
			spr.setTexture(one);
		})
		var cb2 = cc.callFunc(function(){
			spr.setTexture(two);
		})
		var actions = cc.sequence(cc.delayTime(time1),cb1,cc.delayTime(time2),cb2);
		actions.repeatForever();
		spr.runAction(actions);
   },
   flays:function(spr,one,two,time1,time2){
		var cb1 = cc.callFunc(function(){
			spr.setTexture(one);
		})
		var cb2 = cc.callFunc(function(){
			spr.setTexture(two);
		})
		var actions = cc.sequence(cc.delayTime(time1),cb1,cc.delayTime(time2),cb2);
		actions.repeat(2);
		spr.runAction(actions);
   }
})