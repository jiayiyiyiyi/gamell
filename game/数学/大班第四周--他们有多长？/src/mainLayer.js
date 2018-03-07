/*主层*/
var MainLayer = cc.Layer.extend({
  ctor:function () {
    this._super();
    var size = cc.director.getWinSize();
    this.count = 0;
    this.conCom();
    this.leveEndDel = [];
    this.init();
    this.updas = function(){
		sound.problemAudio();
    }
    this.schedule(this.updas,8,cc.REPEAT_FOREVER,1);
    this.dragAction();
    this.openArr = [];
  },
  conCom:function(){
  		//尺子
	this.ruler = cc.Sprite.create(res.Ruler);
    this.ruler.setAnchorPoint(0, 0);
    this.ruler.setPosition(102.3*fix, 23*fix);
    this.ruler.setScale(0.29*fix);
    this.addChild(this.ruler, 0);
    
    //底线
	this.lineOne = cc.Sprite.create(res.Line);
    this.lineOne.setAnchorPoint(0, 0);
    this.lineOne.setPosition(133.3*fix, 25.7*fix);
    this.lineOne.setScale(0.29*fix);
    this.addChild(this.lineOne, 0);
  },
  init : function(){
  		//上线
    this.lineTwo = cc.Sprite.create(res.Line);
    this.lineTwo.setAnchorPoint(0, 0);
    this.lineTwo.setPosition(data.lines[this.count].x*fix, data.lines[this.count].y*fix);
    this.lineTwo.setScale(0.29*fix);
    this.addChild(this.lineTwo, 5);

    //瓶子
    this.bottleArr = [res.BottleOne,res.BottleTwo,res.BottleThree,res.Wood];
    this.bottle = cc.Sprite.create(this.bottleArr[this.count]);
    this.bottle.setAnchorPoint(0, 0);
    this.bottle.setPosition(data.bottlePos[this.count].x*fix, data.bottlePos[this.count].y*fix);
    this.bottle.setScale(0.29*fix);
    this.addChild(this.bottle, 0);
    
     //键盘
    this.one = cc.Sprite.create(res.One);
    this.leveEndDel.push(this.one);
    this.one.setAnchorPoint(0, 0);
    this.one.setPosition(412*fix, 184*fix);
    this.one.id = 1;
    this.one.setScale(0.29*fix);
    this.addChild(this.one, 0);
    
    this.two = cc.Sprite.create(res.Two);
	this.leveEndDel.push(this.two);
    this.two.setAnchorPoint(0, 0);
    this.two.setPosition(463*fix, 184*fix);
    this.two.id = 2;
    this.two.setScale(0.29*fix);
    this.addChild(this.two, 0);
    
    this.three = cc.Sprite.create(res.Three);
    this.leveEndDel.push(this.three);
    this.three.setAnchorPoint(0, 0);
    this.three.setPosition(513*fix, 184*fix);
    this.three.id = 3;
    this.three.setScale(0.29*fix);
    this.addChild(this.three, 0);
    
    this.four = cc.Sprite.create(res.Four);
    this.leveEndDel.push(this.four);
    this.four.setAnchorPoint(0, 0);
    this.four.setPosition(563*fix, 184*fix);
    this.four.id = 4;
    this.four.setScale(0.29*fix);
    this.addChild(this.four, 0);
    
    this.five = cc.Sprite.create(res.Five);
    this.leveEndDel.push(this.five);
    this.five.setAnchorPoint(0, 0);
    this.five.setPosition(362*fix, 134*fix);
    this.five.id = 5;
    this.five.setScale(0.29*fix);
    this.addChild(this.five, 0);
    
    this.six = cc.Sprite.create(res.Six);
    this.leveEndDel.push(this.six);
    this.six.setAnchorPoint(0, 0);
    this.six.setPosition(412*fix, 134*fix);
    this.six.id = 6;
    this.six.setScale(0.29*fix);
    this.addChild(this.six, 0);
    
    this.seven = cc.Sprite.create(res.Seven);
    this.leveEndDel.push(this.seven);
    this.seven.setAnchorPoint(0, 0);
    this.seven.setPosition(463*fix, 134*fix);
    this.seven.id = 7;
    this.seven.setScale(0.29*fix);
    this.addChild(this.seven, 0);
    
    this.eight = cc.Sprite.create(res.Eight);
    this.leveEndDel.push(this.eight);
    this.eight.setAnchorPoint(0, 0);
    this.eight.setPosition(513*fix, 134*fix);
    this.eight.id = 8;
    this.eight.setScale(0.29*fix);
    this.addChild(this.eight, 0);
    
    this.nine = cc.Sprite.create(res.Nine);
    this.leveEndDel.push(this.nine);
    this.nine.setAnchorPoint(0, 0);
    this.nine.setPosition(563*fix, 134*fix);
    this.nine.id = 9;
    this.nine.setScale(0.29*fix);
    this.addChild(this.nine, 0);
    
    this.zero = cc.Sprite.create(res.Zero);
    this.leveEndDel.push(this.zero);
    this.zero.setAnchorPoint(0, 0);
    this.zero.setPosition(362*fix, 184*fix);
    this.zero.id = 0;
    this.zero.setScale(0.29*fix);
    this.addChild(this.zero, 0);
    
    this.backk = cc.Sprite.create(res.Backk);
    this.leveEndDel.push(this.backk);
    this.backk.setAnchorPoint(0, 0);
    this.backk.setPosition(312*fix, 134*fix);
    this.backk.id = 10;
    this.backk.setScale(0.29*fix);
    this.addChild(this.backk, 0);
    
    this.right = cc.Sprite.create(res.Right);
    this.leveEndDel.push(this.right);
    this.right.setAnchorPoint(0, 0);
    this.right.setPosition(614*fix, 134*fix);
    this.right.id = 11;
    this.right.setScale(0.29*fix);
    this.addChild(this.right, 0);
    
   //空白回答
	this.answerSpace = cc.Sprite.create(res.AnswerSpace);
	this.leveEndDel.push(this.answerSpace);
	this.answerSpace.setAnchorPoint(0.5, 0.5);
	this.answerSpace.setPosition(475*fix, 97*fix);
	this.answerSpace.setScale(0.29*fix);
	this.addChild(this.answerSpace, 1);
	    	      //光标
    this.sun = cc.Sprite.create(res.Sun);
    this.leveEndDel.push(this.sun);
    this.sun.setAnchorPoint(0, 0);
    this.sun.setPosition(100, 25);
    this.answerSpace.addChild(this.sun, 3);
	  
    var action = cc.blink(2,4);
    action.repeatForever();
    this.sun.runAction(action);
	    
  //小1
	this.smallOne = cc.Sprite.create(res.SevenSmall);
	this.leveEndDel.push(this.smallOne);
	this.smallOne.setAnchorPoint(0, 0);
	this.smallOne.setPosition(83, 30);
	this.answerSpace.addChild(this.smallOne, 3);
  //小2
	this.smallTwo = cc.Sprite.create(res.SevenSmall);
	this.leveEndDel.push(this.smallTwo);
	this.smallTwo.setAnchorPoint(0, 0);
	this.smallTwo.setPosition(58, 30);
	this.answerSpace.addChild(this.smallTwo, 3);
  //小3
	this.smallThree = cc.Sprite.create(res.SevenSmall);
	this.leveEndDel.push(this.smallThree);
	this.smallThree.setAnchorPoint(0, 0);
	this.smallThree.setPosition(98, 30);
	this.answerSpace.addChild(this.smallThree, 3);

	this.answerSpace.setOpacity(0);
	this.smallOne.setOpacity(0);
	this.smallTwo.setOpacity(0);
	this.smallThree.setOpacity(0);
	this.sun.setOpacity(0);

	this.question = cc.Sprite.create(res.Ques);
	this.question.setAnchorPoint(0, 0);
	this.question.setPosition(515*fix, 87*fix);
	this.question.setScale(0.29*fix);
	this.addChild(this.question, 0);
    
    
	this.answer = cc.Sprite.create(res.Answer);
	this.leveEndDel.push(this.answer);
	this.answer.setAnchorPoint(0.5, 0.5);
	this.answer.setPosition(475*fix, 97*fix);
	this.answer.id = 30;
	this.answer.setScale(0.29*fix);
	this.addChild(this.answer, 0);

	this.numberArr = [this.zero,this.one,this.two,this.three,this.four,this.five,this.six,this.seven,this.eight,this.nine,this.backk,this.right];
	for(var i=0;i<this.numberArr.length;i++){
		this.numberArr[i].runAction(cc.fadeOut(0.01));
    }
	this.smallArr = [this.smallOne,this.smallTwo,this.smallThree,this.smallFour,this.smallFive,this.smallSix,this.smallSeven,this.smallEight,this.smallNine];
	this.dragArr = [this.answer];
	this.clea = [this.lineTwo,this.bottle];
			//标题
	this.title=["瓶子","果汁瓶","奶瓶","木块"];
	this.helloLabel = new cc.LabelTTF(this.title[this.count]+"多长?", "", 16);
	this.helloLabel.setColor(249,194,111);
	this.helloLabel.x = 479*fix;
	this.helloLabel.y = 293*fix;
	this.addChild(this.helloLabel,3);
	    
	this.dragAction();
  },
    numAction : function(){
   	// 创建一个事件监听器 OneByOne 为单点触摸
    this.listener2 = cc.EventListener.create({
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
                return true;
            }
            return false;
        }.bind(this),
         onTouchEnded: function (touch, event) {            // 实现onTouchEnded事件处理回调函数                        
            var target = event.getCurrentTarget();
            updata.finish_steps++;
            	if(target.id>=0 && target.id <=9){
            		this.openArr.push(target.id);
            	}
				for(var i=0;i<this.openArr.length;i++){
					if(this.openArr.length == 1){
						this.smallOne.setOpacity(255);
						this.sun.setOpacity(0);
						this.nums = this.openArr[0];
						this.smallOne.initWithFile(data.small[this.nums]);
					}
					if(this.openArr.length == 2){
						this.smallOne.setOpacity(0);
						this.smallTwo.setOpacity(255);
						this.smallThree.setOpacity(255);
						this.sun.setOpacity(0);
						this.ers = this.openArr[0];
						this.strees = this.openArr[1];
						this.smallTwo.initWithFile(data.small[this.ers]);
						this.smallThree.initWithFile(data.small[this.strees]);
					}
				}
            		if(target.id == 10){
	            			this.openArr = [];
	            			this.smallOne.setOpacity(0);
            				this.smallTwo.setOpacity(0);
            				this.smallThree.setOpacity(0);
            				this.sun.setOpacity(255);
	            			
            		}
            		if(target.id == 11){
            				//第一关
						if(this.count == 0){
							if(this.openArr.length == 1){
								if(this.openArr[0] == 8){
									sound.rightAudio();
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
		            			}else{
									sound.wrongAudio();
									var action_1 = cc.rotateBy(0.1,30);
								    var action_2 = cc.rotateBy(0.1,-30);
								    this.answerSpace.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
								    /*移除所以监听事件*/
								    cc.eventManager.removeAllListeners();
								    this.scheduleOnce(function(){
								    	this.openArr = [];
								    	this.smallOne.setOpacity(0);
								    	this.smallTwo.setOpacity(0);
								    	this.smallThree.setOpacity(0);
								    	this.sun.setOpacity(255);
								    	/*添加监听*/
								    	var len = this.numberArr.length;
								    	for(var i = 0 ; i < len ; i++){
								    		cc.eventManager.addListener(this.listener2.clone(), this.numberArr[i]);
                                        }
                                    },1)
		            					
								  }
	            				}else{
	            					sound.wrongAudio();
	            					var action_1 = cc.rotateBy(0.1,30);
               						var action_2 = cc.rotateBy(0.1,-30);
               						this.answerSpace.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
               						/*移除所以监听事件*/
               						cc.eventManager.removeAllListeners();
               						this.scheduleOnce(function(){
               							this.openArr = [];
               							this.smallOne.setOpacity(0);
               							this.smallTwo.setOpacity(0);
               							this.smallThree.setOpacity(0);
               							this.sun.setOpacity(255);
               							/*添加监听*/
               							var len = this.numberArr.length;
               							for(var i = 0 ; i < len ; i++){
               								cc.eventManager.addListener(this.listener2.clone(), this.numberArr[i]);
                                        }
                                     },1)
	            				}
							}
            				//第二关
            				if(this.count == 1){
            					if(this.openArr.length >= 2){
	            					if(this.openArr[0]*10 + this.openArr[1] == 10){
	            						sound.rightAudio();
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
		            				}else{
		            					sound.wrongAudio();
		            					var action_1 = cc.rotateBy(0.1,30);
               							var action_2 = cc.rotateBy(0.1,-30);
										this.answerSpace.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
                                        /*移除所以监听事件*/
                                        cc.eventManager.removeAllListeners();
		            					this.scheduleOnce(function(){
		            						this.openArr = [];
		            						this.smallOne.setOpacity(0);
		            						this.smallTwo.setOpacity(0);
		            						this.smallThree.setOpacity(0);
		            						this.sun.setOpacity(255);
                                            /*添加监听*/
                                            var len = this.numberArr.length;
                                            for(var i = 0 ; i < len ; i++){
                                                cc.eventManager.addListener(this.listener2.clone(), this.numberArr[i]);
                                            }
                                        },1)
		            				}
            					}else{
	            					sound.wrongAudio();
	            					var action_1 = cc.rotateBy(0.1,30);
               						var action_2 = cc.rotateBy(0.1,-30);
               						this.answerSpace.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
                                    /*移除所以监听事件*/
                                    cc.eventManager.removeAllListeners();
                                    this.scheduleOnce(function(){
                                    	this.openArr = [];
                                    	this.smallOne.setOpacity(0);
                                    	this.smallTwo.setOpacity(0);
                                    	this.smallThree.setOpacity(0);
                                    	this.sun.setOpacity(255);
                                    	/*添加监听*/
                                    	var len = this.numberArr.length;
                                    	for(var i = 0 ; i < len ; i++){
                                    		cc.eventManager.addListener(this.listener2.clone(), this.numberArr[i]);
                                        }
                                    },1)
	            				}
            				}
            				//第三关
            				if(this.count == 2){
            					if(this.openArr.length == 1){
	            					if(this.openArr[0] == 7){
	            						sound.rightAudio();
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
		            				}else{
		            					sound.wrongAudio();
		            					var action_1 = cc.rotateBy(0.1,30);
               							var action_2 = cc.rotateBy(0.1,-30);
										this.answerSpace.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
                                        /*移除所以监听事件*/
                                        cc.eventManager.removeAllListeners();
		            					this.scheduleOnce(function(){
		            						this.openArr = [];
		            						this.smallOne.setOpacity(0);
		            						this.smallTwo.setOpacity(0);
		            						this.smallThree.setOpacity(0);
		            						this.sun.setOpacity(255);
                                            /*添加监听*/
                                            var len = this.numberArr.length;
                                            for(var i = 0 ; i < len ; i++){
                                                cc.eventManager.addListener(this.listener2.clone(), this.numberArr[i]);
                                            }
                                        },1)
		            				}
            					}else{
	            					sound.wrongAudio();
	            					var action_1 = cc.rotateBy(0.1,30);
               						var action_2 = cc.rotateBy(0.1,-30);
               						this.answerSpace.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
                                    /*移除所以监听事件*/
                                    cc.eventManager.removeAllListeners();
                                    this.scheduleOnce(function(){
                                    	this.openArr = [];
                                    	this.smallOne.setOpacity(0);
                                    	this.smallTwo.setOpacity(0);
                                    	this.smallThree.setOpacity(0);
                                    	this.sun.setOpacity(255);
                                    	/*添加监听*/
                                    	var len = this.numberArr.length;
                                    	for(var i = 0 ; i < len ; i++){
                                    		cc.eventManager.addListener(this.listener2.clone(), this.numberArr[i]);
                                        }
                                    },1)
	            				}
            				}
            				//第四关
            				if(this.count == 3){
            					if(this.openArr.length == 1){
	            					if(this.openArr[0] == 6){
	            						sound.rightAudio();
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
		            				}else{
		            					sound.wrongAudio();
		            					var action_1 = cc.rotateBy(0.1,30);
               							var action_2 = cc.rotateBy(0.1,-30);
               							this.answerSpace.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
                                        /*移除所以监听事件*/
                                        cc.eventManager.removeAllListeners();
		            					this.scheduleOnce(function(){
		            						this.openArr = [];
		            						this.smallOne.setOpacity(0);
		            						this.smallTwo.setOpacity(0);
		            						this.smallThree.setOpacity(0);
		            						this.sun.setOpacity(255);
                                            /*添加监听*/
                                            var len = this.numberArr.length;
                                            for(var i = 0 ; i < len ; i++){
                                                cc.eventManager.addListener(this.listener2.clone(), this.numberArr[i]);
                                            }
                                        },1)
		            				}
            					}else{
	            					sound.wrongAudio();
	            					var action_1 = cc.rotateBy(0.1,30);
               						var action_2 = cc.rotateBy(0.1,-30);
               						this.answerSpace.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
                                    /*移除所以监听事件*/
                                    cc.eventManager.removeAllListeners();
                                    this.scheduleOnce(function(){
                                    	this.openArr = [];
                                    	this.smallOne.setOpacity(0);
                                    	this.smallTwo.setOpacity(0);
                                    	this.smallThree.setOpacity(0);
                                    	this.sun.setOpacity(255);
                                    	/*添加监听*/
                                    	var len = this.numberArr.length;
                                    	for(var i = 0 ; i < len ; i++){
                                    		cc.eventManager.addListener(this.listener2.clone(), this.numberArr[i]);
                                        }
                                    },1)
	            				}
            				}
            		}
        }.bind(this)
        })
		 /*添加监听*/
	  var len = this.numberArr.length;
	  for(var i = 0 ; i < len ; i++){
		cc.eventManager.addListener(this.listener2.clone(), this.numberArr[i]);
	  }
   },
   dragAction : function(){
   	this.flag = false;
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
                updata.finish_steps++;
                this.unschedule(this.updas);
                  //出现键盘
                if(target.id == 30){
                	if(this.flag == false){
                		sound.keyShowAudio();
                		for(var i=0;i<this.numberArr.length;i++){
                			this.numberArr[i].runAction(cc.fadeIn(0.1));
                			this.answerSpace.setOpacity(255);
            			    this.answer.setOpacity(0);
            			    this.sun.setOpacity(255);
                			this.numAction();
                			this.flag = true;
                			if(this.openArr.length == 1){
                				this.smallOne.setOpacity(255);
                				this.sun.setOpacity(0);
                			}
                			if(this.openArr.length == 2){
                				this.smallTwo.setOpacity(255);
                				this.smallThree.setOpacity(255);
                				this.sun.setOpacity(0);
                			}
                		}
                	}else{
                		for(var i=0;i<this.numberArr.length;i++){
                			this.numberArr[i].runAction(cc.fadeOut(0.1));
                			this.answerSpace.setOpacity(0);;
            			    this.answer.setOpacity(255);
            			    this.sun.setOpacity(0);
            			    this.smallOne.setOpacity(0);
            			    this.smallTwo.setOpacity(0);
            			    this.smallThree.setOpacity(0);
                			this.flag = false;
                		}
                	}
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
          	
        }.bind(this)
       }) 
       // 添加监听器到管理器
        var len = this.dragArr.length;
        for(var i = 0 ; i < len ; i++){
          cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
        }
   },
   review : function(){
  	updata.finish_star++
    this.count ++;
    /*清楚*/
    var len = this.dragArr.length;
    for(var i = 0 ; i < len ; i++){
      this.dragArr[i].removeFromParent();
    } 
    this.dragArr = [];
    var len = this.clea.length;
    for(var i = 0 ; i < len ; i++){
      this.clea[i].removeFromParent();
    } 
    this.clea = [];
      var len = this.numberArr.length;
    for(var i = 0 ; i < len ; i++){
      this.numberArr[i].removeFromParent();
    } 
    this.numberArr = [];
    //删除标题
    this.removeChild(this.helloLabel);
    //隐藏
	this.openArr = [];
	this.smallOne.setOpacity(0);
	this.smallTwo.setOpacity(0);
	this.smallThree.setOpacity(0);

    if(this.count < 4){
	  this.leveEndDel.forEach(function(v){
		v.removeFromParent();
	  })
      this.init();
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
