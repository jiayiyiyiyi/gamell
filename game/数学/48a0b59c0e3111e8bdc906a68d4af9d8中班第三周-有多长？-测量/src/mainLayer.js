/*主层*/
var MainLayer = cc.Layer.extend({
  ctor:function () {
    this._super();
    var size = cc.director.getWinSize();
    this.count = 0;
    this.num = 1;
    this.conCom();
     this.leveEndDel = [];
    this.init();
    this.dragAction();
    this.addArr = [];
    this.openArr=[];
    this.sum = 1;
    this.cum = 1;
  },
  conCom:function(){
  	this.shelf = cc.Sprite.create(res.Shelf);
    this.shelf.setAnchorPoint(0, 0);
    this.shelf.setPosition(148*fix, 201);
    this.shelf.setScale(0.29*fix);
    this.addChild(this.shelf, 0);
  },
   init:function(){
    this.flag = false;
   	this.thing = cc.Sprite.create(data[this.count].OutLine);
    this.thing.setAnchorPoint(0, 0);
    this.thing.setPosition(150*fix, 201+24*fix);
    this.thing.id = data[this.count].id;
    this.thing.setScale(0.29*fix);
    this.addChild(this.thing, 0);
    
    this.question = cc.Sprite.create(data[this.count].Ques);
    this.question.setAnchorPoint(0, 0);
    this.question.setPosition(180*fix, 38.7*fix);
    this.question.id = data[this.count].id;
    this.question.setScale(0.29*fix);
    this.addChild(this.question, 0);
    
    
    this.setOne = cc.Sprite.create(data[this.count].Set);
    this.setOne.setAnchorPoint(0, 0);
    this.setOne.setPosition(312*fix, 76.3);
    this.setOne.id = data[this.count].id;
    this.setOne.setScale(0.29*fix);
    this.addChild(this.setOne, 7);
    
    
    this.setTwo = cc.Sprite.create(data[this.count].Set);
    this.setTwo.setAnchorPoint(0, 0);
    this.setTwo.setPosition(312*fix, 76.3);
    this.setTwo.id = data[this.count].id;
    this.setTwo.setScale(0.29*fix);
    this.setTwo.setOpacity(0);
    this.addChild(this.setTwo, 6);
    
    
    this.setThree = cc.Sprite.create(data[this.count].Set);
    this.setThree.setAnchorPoint(0, 0);
    this.setThree.setPosition(312*fix, 76.3);
    this.setThree.id = data[this.count].id;
    this.setThree.setScale(0.29*fix);
    this.setThree.setOpacity(0);
    this.addChild(this.setThree, 5);
    
    this.setFour = cc.Sprite.create(data[this.count].Set);
    this.setFour.setAnchorPoint(0, 0);
    this.setFour.setPosition(312*fix, 76.3);
    this.setFour.id = data[this.count].id;
    this.setFour.setScale(0.29*fix);
    this.setFour.setOpacity(0);
    this.addChild(this.setFour, 4);
    
    this.setFive = cc.Sprite.create(data[this.count].Set);
    this.setFive.setAnchorPoint(0, 0);
    this.setFive.setPosition(312*fix, 76.3);
    this.setFive.id = data[this.count].id;
    this.setFive.setScale(0.29*fix);
    this.setFive.setOpacity(0);
    this.addChild(this.setFive, 3);
    
    this.setSix = cc.Sprite.create(data[this.count].Set);
    this.setSix.setAnchorPoint(0, 0);
    this.setSix.setPosition(312*fix, 76.3);
    this.setSix.id = data[this.count].id;
    this.setSix.setScale(0.29*fix);
    this.setSix.setOpacity(0);
    this.addChild(this.setSix, 2);
    
    this.setSeven = cc.Sprite.create(data[this.count].Set);
    this.setSeven.setAnchorPoint(0, 0);
    this.setSeven.setPosition(312*fix, 76.3);
    this.setSeven.id = data[this.count].id;
    this.setSeven.setScale(0.29*fix);
    this.setSeven.setOpacity(0);
    this.addChild(this.setSeven, 1);
    
    this.smalls = [
     res.ZeroSmall,
     res.OneSmall,
     res.TwoSmall,
     res.ThreeSmall,
     res.FourSmall,
     res.FiveSmall,
     res.SixSmall,
     res.SevenSmall,
     res.EightSmall,
     res.NineSmall
  	]
    
       //键盘
    this.one = cc.Sprite.create(res.One);
    this.leveEndDel.push(this.one);
    this.one.setAnchorPoint(0, 0);
    this.one.setPosition(262*fix, 144*fix);
    this.one.id = 1;
    this.one.setScale(0.29*fix);
    this.addChild(this.one, 0);
    
    this.two = cc.Sprite.create(res.Two);
    this.leveEndDel.push(this.two);
    this.two.setAnchorPoint(0, 0);
    this.two.setPosition(313*fix, 144*fix);
    this.two.id = 2;
    this.two.setScale(0.29*fix);
    this.addChild(this.two, 0);
    
    this.three = cc.Sprite.create(res.Three);
    this.leveEndDel.push(this.three);
    this.three.setAnchorPoint(0, 0);
    this.three.setPosition(363*fix, 144*fix);
    this.three.id = 3;
    this.three.setScale(0.29*fix);
    this.addChild(this.three, 0);
    
    this.four = cc.Sprite.create(res.Four);
    this.leveEndDel.push(this.four);
    this.four.setAnchorPoint(0, 0);
    this.four.setPosition(413*fix, 144*fix);
    this.four.id = 4;
    this.four.setScale(0.29*fix);
    this.addChild(this.four, 0);
    
    this.five = cc.Sprite.create(res.Five);
    this.leveEndDel.push(this.five);
    this.five.setAnchorPoint(0, 0);
    this.five.setPosition(212*fix, 94*fix);
    this.five.id = 5;
    this.five.setScale(0.29*fix);
    this.addChild(this.five, 0);
    
    this.six = cc.Sprite.create(res.Six);
    this.leveEndDel.push(this.six);
    this.six.setAnchorPoint(0, 0);
    this.six.setPosition(262*fix, 94*fix);
    this.six.id = 6;
    this.six.setScale(0.29*fix);
    this.addChild(this.six, 0);
    
    this.seven = cc.Sprite.create(res.Seven);
    this.leveEndDel.push(this.seven);
    this.seven.setAnchorPoint(0, 0);
    this.seven.setPosition(313*fix, 94*fix);
    this.seven.id = 7;
    this.seven.setScale(0.29*fix);
    this.addChild(this.seven, 0);
    
    this.eight = cc.Sprite.create(res.Eight);
    this.leveEndDel.push(this.eight);
    this.eight.setAnchorPoint(0, 0);
    this.eight.setPosition(363*fix, 94*fix);
    this.eight.id = 8;
    this.eight.setScale(0.29*fix);
    this.addChild(this.eight, 0);
    
    this.nine = cc.Sprite.create(res.Nine);
    this.leveEndDel.push(this.nine);
    this.nine.setAnchorPoint(0, 0);
    this.nine.setPosition(413*fix, 94*fix);
    this.nine.id = 9;
    this.nine.setScale(0.29*fix);
    this.addChild(this.nine, 0);
    
    this.zero = cc.Sprite.create(res.Zero);
    this.leveEndDel.push(this.zero);
    this.zero.setAnchorPoint(0, 0);
    this.zero.setPosition(212*fix, 144*fix);
    this.zero.id = 0;
    this.zero.setScale(0.29*fix);
    this.addChild(this.zero, 0);
    
    this.backk = cc.Sprite.create(res.Backk);
    this.leveEndDel.push(this.backk);
    this.backk.setAnchorPoint(0, 0);
    this.backk.setPosition(162*fix, 94*fix);
    this.backk.id = 10;
    this.backk.setScale(0.29*fix);
    this.addChild(this.backk, 0);
    
    this.right = cc.Sprite.create(res.Right);
    this.leveEndDel.push(this.right);
    this.right.setAnchorPoint(0, 0);
    this.right.setPosition(464*fix, 94*fix);
    this.right.id = 11;
    this.right.setScale(0.29*fix);
    this.addChild(this.right, 0);

   //空白回答
    this.answerSpace = cc.Sprite.create(res.AnswerSpace);
    this.leveEndDel.push(this.answerSpace);
    this.answerSpace.setAnchorPoint(0.5, 0.5);
    this.answerSpace.setPosition(340.7*fix, 50.3*fix);
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

    this.answer = cc.Sprite.create(res.Answer);
    this.leveEndDel.push(this.answer);
    this.answer.setAnchorPoint(0.5, 0.5);
    this.answer.setPosition(340.7*fix, 50.3*fix);
    this.answer.id = 30;
    this.answer.setScale(0.29*fix);
    this.answer.setOpacity(0);
    this.addChild(this.answer, 0);
    
    this.numberArr=[this.zero,this.one,this.two,this.three,this.four,this.five,this.six,this.seven,this.eight,this.nine,this.backk,this.right];
    for(var i=0;i<this.numberArr.length;i++){
        this.numberArr[i].setOpacity(0);
    }
    this.smallArr = [this.smallOne,this.smallTwo,this.smallThree,this.smallFour,this.smallFive,this.smallSix,this.smallSeven,this.smallEight,this.smallNine];
    this.dragArr=[this.setOne,this.setTwo,this.setThree,this.setFour,this.setFive,this.setSix,this.setSeven];
    this.question.setOpacity(0);
    this.answer.setOpacity(0);
    
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
                		
                /*保存原始坐标*/
                //dragX = target.getPosition().x;
                //dragY = target.getPosition().y;
                return true;
            }
            return false;
        }.bind(this),
         onTouchEnded: function (touch, event) {            // 实现onTouchEnded事件处理回调函数                        
            var target = event.getCurrentTarget();
            	if(target.id>=0 && target.id <=9){
            		this.addArr.push(target.id);
            	}
                for(var i=0;i<this.addArr.length;i++){
                    if(this.addArr.length == 1){
                        this.smallOne.setOpacity(255);
                        this.sun.setOpacity(0);
                        this.nums = this.addArr[0];
                        this.smallOne.initWithFile(this.smalls[this.nums]);

                    }
                    if(this.addArr.length == 2){
                        this.smallOne.setOpacity(0);
                        this.smallTwo.setOpacity(255);
                        this.smallThree.setOpacity(255);
                        this.sun.setOpacity(0);
                        this.ers = this.addArr[0];
                        this.strees = this.addArr[1];
                        this.smallTwo.initWithFile(this.smalls[this.ers]);
                        this.smallThree.initWithFile(this.smalls[this.strees]);
                    }
                }
                if(target.id == 10){
                        this.addArr = [];
                        this.smallOne.setOpacity(0);
                        this.smallTwo.setOpacity(0);
                        this.smallThree.setOpacity(0);
                        this.sun.setOpacity(255);

                }
                if(target.id == 11){
                        //第一关
                    if(this.count == 0){
                        if(this.addArr.length == 1){
                            if(this.addArr[0] == 7){
                          
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
                                    this.addArr = [];
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
                                    this.addArr = [];
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
                            if(this.addArr.length == 1){
                                if(this.addArr[0] == 6){
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
                                        this.addArr = [];
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
                                    this.addArr = [];
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
                            if(this.addArr.length == 1){
                                if(this.addArr[0] == 5){
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
                                        this.addArr = [];
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
                                    this.addArr = [];
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
                   if(this.count == 0){
					         		this.unschedule(this.upOne);
					         }
					         if(this.count == 1){
					         		this.unschedule(this.upTwo);
					         }
					         if(this.count == 2){
					         		this.unschedule(this.upThree);
					         }
                                 //出现键盘
                if(target.id == 30){
                		if(this.flag == false){
                		for(var i=0;i<this.numberArr.length;i++){
                			sound.keyShowAudio();
                			this.numberArr[i].runAction(cc.fadeIn(0.1));
                			this.answerSpace.setOpacity(255);
            			    this.answer.setOpacity(0);
            			    this.sun.setOpacity(255);
                			this.numAction();
                			this.flag = true;
                			if(this.addArr.length == 1){
                				this.smallOne.setOpacity(255);
                				this.sun.setOpacity(0);
                			}
                			if(this.addArr.length == 2){
                				this.smallTwo.setOpacity(255);
                				this.smallThree.setOpacity(255);
                				this.sun.setOpacity(0);
                			}
                			}
                		}else{
                		for(var i=0;i<this.numberArr.length;i++){
                			this.numberArr[i].runAction(cc.fadeOut(0.1));
                			this.answerSpace.setOpacity(0);;
            			    this.answer.setOpacity(255);;
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
        onTouchMoved: function (touch, event) {            //实现onTouchMoved事件处理回调函数, 触摸移动时触发
               
                var size = cc.director.getWinSize();
                // 移动当前按钮精灵的坐标位置
                var target = event.getCurrentTarget();
                
                var delta = touch.getDelta();              //获取事件数据: delta
                target.setLocalZOrder(8);
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
    /*挑选相同 ID*/             
    var s = this.thing.getBoundingBox(); 
    var rect = cc.rect(s.x, s.y , s.width, s.height);
    var drag = target.getBoundingBox();
    // 碰撞检测
    if (cc.rectIntersectsRect(drag, rect)) {   
        updata.finish_steps++;
      /*如果匹配成功*/
      if(target.id == this.thing.id){
        /*提示声音*/
        sound.rightAudio();
          /*移除所以监听事件*/
        cc.eventManager.removeAllListeners();
        var _this = cc.director.getRunningScene().getChildByTag(2);
        _this.onTouchBegan();

        this.openArr.push(target);
        for(var i=0;i<this.dragArr.length;i++){
            if(target==this.dragArr[i]){
                this.dragArr.splice(i,1);
            }
        }
        this.fade();
		    //第一关
		    if(this.count == 0){
		    		if(this.num == 7){
		    			target.setPosition(463.8*fix, 201+24*fix);
		    			this.question.runAction(cc.fadeIn(0.01));
    					this.answer.runAction(cc.fadeIn(0.01));
                        this.dragArr.push(this.answer);
                    }
		    		if(this.num == 6){
		    			target.setPosition(410.5*fix, 201+24*fix);
		    			this.thing.setPosition(463.8*fix,201+24*fix);
		    			this.dragArr[0].runAction(cc.fadeIn(0.1));
		    			this.num ++;
		    		}
		    		if(this.num == 5){
		    			target.setPosition(357.2*fix, 201+24*fix);
		    			this.thing.setPosition(410.5*fix,201+24*fix);
		    			this.dragArr[0].runAction(cc.fadeIn(0.1));
		    			this.num ++;
		    		}
		    		if(this.num == 4){
		    			target.setPosition(305.9*fix, 201+24*fix);
		    			this.thing.setPosition(357.2*fix,201+24*fix);
		    			this.dragArr[0].runAction(cc.fadeIn(0.1));
		    			this.num ++;
		    		}
		    		if(this.num == 3){
		    			target.setPosition(253.6*fix, 201+24*fix);
		    			this.thing.setPosition(305.9*fix,201+24*fix);
		    			this.dragArr[0].runAction(cc.fadeIn(0.1));
		    			this.num ++;
		    		}
		    		if(this.num == 2){
		    			target.setPosition(201.3*fix, 201+24*fix);
		    			this.thing.setPosition(253.6*fix,201+24*fix);
		    			this.dragArr[0].runAction(cc.fadeIn(0.1));
		    			this.num ++;
		    		}
		    		if(this.num == 1){
		    			target.setPosition(150*fix, 201+24*fix);
		    			this.thing.setPosition(201.3*fix,201+24*fix);
		    			this.dragArr[0].runAction(cc.fadeIn(0.1));
		    			this.num ++;
		    		}
		    }
		    //第二关
		    if(this.count == 1){
			    		this.shelf.setScale(0.3*fix);
			    		if(this.sum == 6){
			    			target.setPosition(465.5*fix,201+24*fix);
			    			this.question.runAction(cc.fadeIn(0.01));
    						this.answer.runAction(cc.fadeIn(0.01));
                            this.dragArr.push(this.answer);
			    		}
			    		if(this.sum == 5){
			    			target.setPosition(402.2*fix, 201+24*fix);
			    			this.thing.setPosition(465.5*fix,201+24*fix);
			    			this.dragArr[0].runAction(cc.fadeIn(0.1));
			    			this.sum ++;
			    		}if(this.sum == 4){
			    			target.setPosition(338.9*fix, 201+24*fix);
			    			this.thing.setPosition(402.2*fix,201+24*fix);
			    			this.dragArr[0].runAction(cc.fadeIn(0.1));
			    			this.sum ++;
			    		}if(this.sum == 3){
			    			target.setPosition(275.6*fix, 201+24*fix);
			    			this.thing.setPosition(338.9*fix,201+24*fix);
			    			this.dragArr[0].runAction(cc.fadeIn(0.1));
			    			this.sum ++;
			    		}
			    		if(this.sum == 2){
			    			target.setPosition(212.3*fix, 201+24*fix);
			    			this.thing.setPosition(275.6*fix,201+24*fix);
			    			this.dragArr[0].runAction(cc.fadeIn(0.1));
			    			this.sum ++;
			    		}
			    		if(this.sum == 1){
			    			this.dragArr.splice(1,1);
			    			target.setPosition(150*fix, 201+24*fix);
			    			this.thing.setPosition(212.3*fix,201+24*fix);
			    			this.dragArr[0].runAction(cc.fadeIn(0.1));
			    			this.sum ++;
			    		}
		    }
		    //第三关
		    if(this.count == 2){
			    		if(this.cum == 5){
			    			target.setPosition(454.8*fix,201+24*fix);
			    			this.thing.runAction(cc.fadeOut(0.01));
			    			this.question.runAction(cc.fadeIn(0.01));
    						this.answer.runAction(cc.fadeIn(0.01));
                            this.dragArr.push(this.answer);
			    		}
			    		if(this.cum == 4){
			    			target.setPosition(378.1*fix, 201+24*fix);
			    			this.thing.setPosition(454.8*fix,201+24*fix);
			    			this.dragArr[0].runAction(cc.fadeIn(0.1));
			    			this.cum ++;
			    		}
			    		if(this.cum == 3){
			    			target.setPosition(303.4*fix, 201+24*fix);
			    			this.thing.setPosition(378.1*fix,201+24*fix);
			    			this.dragArr[0].runAction(cc.fadeIn(0.1));
			    			this.cum ++;
			    		}
			    		if(this.cum == 2){
			    			target.setPosition(225.7*fix, 201+24*fix);
			    			this.thing.setPosition(303.4*fix,201+24*fix);
			    			this.dragArr[0].runAction(cc.fadeIn(0.1));
			    			this.cum ++;
			    		}
			    		if(this.cum == 1){
			    			this.dragArr.splice(1,2);
			    			target.setPosition(150*fix, 201+24*fix);
			    			this.thing.setPosition(225.7*fix,201+24*fix);
			    			this.dragArr[0].runAction(cc.fadeIn(0.1));
			    			this.cum ++;
			    		}
		    }
				/*添加监听*/
	      var len = this.dragArr.length;
	      for(var j = 0 ; j < len ; j++){
	        cc.eventManager.addListener(this.listener1.clone(), this.dragArr[j]);
          }
        this.moveFlag = false;
      }else{
        sound.wrongAudio();
      }
      return true;
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
	    
	    for(var i=0;i<this.openArr.length;i++){
	    		this.openArr[i].removeFromParent();
	    }
	    this.openArr = [];
	    
	    var len = this.numberArr.length;
	    for(var i = 0 ; i < len ; i++){
	      this.numberArr[i].removeFromParent();
	    } 
	    this.numberArr = [];
	    this.thing.removeFromParent();
	    this.question.removeFromParent();
 //隐藏
		this.addArr = [];
		this.smallOne.setOpacity(0);
		this.smallTwo.setOpacity(0);
		this.smallThree.setOpacity(0);
		
    if(this.count < 3){
    	 this.leveEndDel.forEach(function(v){
		  	v.removeFromParent();
		  })
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
  },
  fade:function(){
  	cc.log(this.dragArr);
	  	for(var i=1;i<this.dragArr.length;i++){
	    		this.dragArr[i].runAction(cc.fadeOut(0.01));
	    }
  }
})
