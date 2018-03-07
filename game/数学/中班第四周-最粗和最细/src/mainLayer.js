/*主层*/
var MainLayer = cc.Layer.extend({
  ctor:function () {
    this._super();

    this.count = 0;
    this.conCom();
    this.init();
    this.dragAction();
  },
  conCom:function(){
    this.desk = cc.Sprite.create(res.Desk);
    this.desk.setAnchorPoint(0, 0);
    this.desk.setPosition(56*fix, 0*fix);
    this.desk.setScale(0.6*fix);
    this.addChild(this.desk, 0);
  },
  init:function(){
    this.posi =[
        {
            x:185,
            y:198.3
        },
        {
            x:322,
            y:193.3
        },
        {
            x:449.3,
            y:198.3
        }
    ]
    this.spr = data.sprites[this.count];
    var sum=Math.floor(Math.random()*this.posi.length);
    this.one = cc.Sprite.create(this.spr[0].one);
    this.one.setAnchorPoint(0.5 , 0.5);
    this.one.setPosition(this.posi[sum].x*fix, this.posi[sum].y*fix);
    this.one.id = this.spr[0].id;
    this.one.setScale(0.29*fix);
    this.addChild(this.one, 0);
    this.posi.splice(sum,1);
    
    sum=Math.floor(Math.random()*this.posi.length);
    this.two = cc.Sprite.create(this.spr[1].two);
    this.two.setAnchorPoint(0.5 , 0.5);
    this.two.setPosition(this.posi[sum].x*fix, this.posi[sum].y*fix);
    this.two.id = this.spr[1].id;
    this.two.setScale(0.29*fix);
    this.addChild(this.two, 0);
    this.posi.splice(sum,1);
    
    sum=Math.floor(Math.random()*this.posi.length);
    this.three = cc.Sprite.create(this.spr[2].three);
    this.three.setAnchorPoint(0.5 , 0.5);
    this.three.setPosition(this.posi[sum].x*fix, this.posi[sum].y*fix);
    this.three.id = this.spr[2].id;
    this.three.setScale(0.29*fix);
    this.addChild(this.three, 0);
    this.posi.splice(sum,1);
    
    this.dragArr=[this.one,this.two,this.three];
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
                 if(target.id == 6){
                     sound.rightAudio();
                     var action_1 = cc.rotateBy(0.1,30);
                     var action_2 = cc.rotateBy(0.1,-30);
                     target.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
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
                 }
          	 }
          	 //第二关
             if(this.count == 1){
                 if(target.id == 3){
                     sound.rightAudio();
                     target.runAction(cc.jumpBy(1,cc.p(0,0), 20, 3));
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
                 }
          	 }
          	 //第三关
             if(this.count == 2){
                 if(target.id == 7){
                     sound.rightAudio();
                     var action_1 = cc.rotateBy(0.1,30);
                     var action_2 = cc.rotateBy(0.1,-30);
                     target.runAction(cc.sequence(action_1,cc.delayTime(0.1),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.1),action_2.reverse()));
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
          		 }
          	 }
          	 //第四关
             if(this.count == 3){
                 if(target.id == 10){
                     sound.rightAudio();
                     target.runAction(cc.jumpBy(1,cc.p(0,0), 20, 3));
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
    updata.finish_star++;
    this.count ++;
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
