/*主层*/
var MainLayer = cc.Layer.extend({
  ctor:function () {
    this._super();
    var size = cc.director.getWinSize();
    this.count = 0;
    /*公共*/
    this.comCon();
    /*初始化界面*/
    this.init();
    this.updas = function(){
		sound.subjectAudio();
    }
    this.schedule(this.updas,6,cc.REPEAT_FOREVER,1);
        /*背景音乐*/
    sound.gameBgAudio();
    this.dragAction();
  },
  comCon:function(){
		this.table = cc.Sprite.create(res.Table);
	    this.table.setAnchorPoint(0, 0);
	    this.table.setPosition(115*fix, 0*fix);
	    this.table.setScale(0.333*fix);
	    this.addChild(this.table, 0);
	    
	    this.bagBehindOne = cc.Sprite.create(res.BgBehind);
	    this.bagBehindOne.setAnchorPoint(0, 0);
	    this.bagBehindOne.setPosition(138*fix, 261*fix);
	    this.bagBehindOne.setScale(0.333*fix);
	    this.addChild(this.bagBehindOne, 0);
	    
	    this.bagBehindTwo = cc.Sprite.create(res.BgBehind);
	    this.bagBehindTwo.setAnchorPoint(0, 0);
	    this.bagBehindTwo.setPosition(305*fix, 261*fix);
	    this.bagBehindTwo.setScale(0.333*fix);
	    this.addChild(this.bagBehindTwo, 0);
	    
	    this.bagBehindThree = cc.Sprite.create(res.BgBehind);
	    this.bagBehindThree.setAnchorPoint(0, 0);
	    this.bagBehindThree.setPosition(473*fix, 261*fix);
	    this.bagBehindThree.setScale(0.333*fix);
	    this.addChild(this.bagBehindThree, 0);
  },
  init:function(){
  	//钱币数组
		this.money = [
			{
				bgOneyuan:res.BgOneyuanSmall,
				id:1,
				bgFrontOneyuan:res.BgFrontOneyuan
			},
			{
				bgFivejiao:res.BgFivejiaoSmall,
				id:2,
				bgFrontFivejiao:res.BgFrontFive
			},
			{
				bgOnejiao:res.BgOnejiaoSmall,
				id:3,
				bgFrontOnejiao:res.BgFrontOnejiao
			}
		]
		//上方钱币位置
		this.pos = [
			{
				x:138,
				y:184,
				a:167,
				b:195
			},
			{
				x:307,
				y:184,
				a:337,
				b:193
			},
			{
				x:473,
				y:185,
				a:500,
				b:194
			}
		]
		//下方钱币位置 阴影位置
		this.moneyPos = [
			{
				x:278,
				y:34,
				a:281,
				b:27
			},
			{
				x:274,
				y:34,
				a:281,
				b:27
			},
			{
				x:275,
				y:33,
				a:281,
				b:27
			}
		]
		//上方钱币
		var sum=Math.floor(Math.random()*this.pos.length);
		this.bagOneyuan = cc.Sprite.create(this.money[0].bgOneyuan);
	    this.bagOneyuan.setAnchorPoint(0, 0);
	    this.bagOneyuan.setPosition(this.pos[sum].a*fix, this.pos[sum].b*fix);
	    this.bagOneyuan.id = this.money[0].id;
	    this.bagOneyuan.setScale(0.333*fix);
	    this.addChild(this.bagOneyuan, 1);
	  		//上方卡槽
		this.bagFrontOneyuan = cc.Sprite.create(this.money[0].bgFrontOneyuan);
	    this.bagFrontOneyuan.setAnchorPoint(0, 0);
	    this.bagFrontOneyuan.setPosition(this.pos[sum].x*fix, this.pos[sum].y*fix);
	    this.bagFrontOneyuan.id = this.money[0].id;
	    this.bagFrontOneyuan.setScale(0.333*fix);
	    this.addChild(this.bagFrontOneyuan, 2);
		this.pos.splice(sum,1);
	  		//上方钱币
		sum=Math.floor(Math.random()*this.pos.length);
		this.bagFivejiao = cc.Sprite.create(this.money[1].bgFivejiao);
	    this.bagFivejiao.setAnchorPoint(0, 0);
	    this.bagFivejiao.setPosition(this.pos[sum].a*fix, this.pos[sum].b*fix);
	    this.bagFivejiao.id = this.money[1].id;
	    this.bagFivejiao.setScale(0.333*fix);
	    this.addChild(this.bagFivejiao, 1);
	  		//上方卡槽
		this.bagFrontFivejiao = cc.Sprite.create(this.money[1].bgFrontFivejiao);
	    this.bagFrontFivejiao.setAnchorPoint(0, 0);
	    this.bagFrontFivejiao.setPosition(this.pos[sum].x*fix, this.pos[sum].y*fix);
	    this.bagFrontFivejiao.id = this.money[1].id;
	    this.bagFrontFivejiao.setScale(0.333*fix);
	    this.addChild(this.bagFrontFivejiao, 2);
		this.pos.splice(sum,1);

	    	//上方钱币
		sum=Math.floor(Math.random()*this.pos.length);
		this.bagOnejiao = cc.Sprite.create(this.money[2].bgOnejiao);
	    this.bagOnejiao.setAnchorPoint(0, 0);
	    this.bagOnejiao.setPosition(this.pos[sum].a*fix, this.pos[sum].b*fix);
	    this.bagOnejiao.id = this.money[2].id;
	    this.bagOnejiao.setScale(0.333*fix);
	    this.addChild(this.bagOnejiao, 1);
	  		//上方卡槽
		this.bagFrontOnejiao = cc.Sprite.create(this.money[2].bgFrontOnejiao);
	    this.bagFrontOnejiao.setAnchorPoint(0, 0);
	    this.bagFrontOnejiao.setPosition(this.pos[sum].x*fix, this.pos[sum].y*fix);
	    this.bagFrontOnejiao.id = this.money[2].id;
	    this.bagFrontOnejiao.setScale(0.333*fix);
	    this.addChild(this.bagFrontOnejiao, 2);
	    this.pos.splice(sum,1);
	
			//下方钱币
		this.moneyArr = [res.Oneyuan,res.Fivejiao,res.Onejiao];
		this.moneyDown = cc.Sprite.create(this.moneyArr[this.count]);
	    this.moneyDown.setAnchorPoint(0, 0);
	    this.moneyDown.setPosition(this.moneyPos[this.count].x*fix, this.moneyPos[this.count].y*fix);
	    this.moneyDown.id = this.money[this.count].id;
	    this.moneyDown.setScale(0.333*fix);
	    this.addChild(this.moneyDown, 1);
	    //钱币阴影
	    this.shadow = [res.ShadowOneyuan,res.ShadowFivejiao,res.ShadowOnejiao];
	    this.moneyShadow = cc.Sprite.create(this.shadow[this.count]);
	    this.moneyShadow.setAnchorPoint(0, 0);
	    this.moneyShadow.setPosition(this.moneyPos[this.count].a*fix, this.moneyPos[this.count].b*fix);
	    this.moneyShadow.id = this.money[this.count].id;
	    this.moneyShadow.setScale(0.333*fix);
	    this.addChild(this.moneyShadow, 0);
	    
	    this.dragArr = [this.moneyDown];
	    this.shadows = [this.moneyShadow];
	    this.cards = [this.bagFrontOneyuan,this.bagFrontFivejiao,this.bagFrontOnejiao];
	    this.upMoney = [this.bagOneyuan,this.bagFivejiao,this.bagOnejiao];
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

            if (cc.rectContainsPoint(rect, locationInNode)) {// 判断触摸点是否在按钮范围内
            		this.unschedule(this.updas);
                /*按键声*/
            			if(this.count == 0){
            				sound.oneyuanAudio();
            			}
            			if(this.count == 1){
            				sound.fivejiaoAudio();
            			}
            			if(this.count == 2){
            				sound.onejiaoAudio();
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
                /*设置层级*/
                target.setLocalZOrder(2);
				//阴影
				this.shadows[0].setOpacity(0);
				if(this.count == 0){
					target.initWithFile(res.BgOneyuanSmall);
				}
				if(this.count == 1){
					target.initWithFile(res.BgFivejiaoSmall);
				}
				if(this.count == 2){
					target.initWithFile(res.BgOnejiaoSmall);
				}
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
            this.judgeEach(target);
            if(this.moveFlag){
              //回到原位
              target.setPosition(dragX,dragY);
             	this.shadows[0].setOpacity(255);
             	 if(this.count == 0){
					target.initWithFile(res.Oneyuan);
                }
                if(this.count == 1){	
					target.initWithFile(res.Fivejiao);
                }
                if(this.count == 2){	
					target.initWithFile(res.Onejiao);
                }
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
   	for(var i=0;i<this.cards.length;i++){
   			 /*挑选相同 ID*/             
		    var s = this.cards[i].getBoundingBox(); 
		    var rect = cc.rect(s.x, s.y , s.width, s.height);
		    var drag = target.getBoundingBox();
		    // 碰撞检测
		    if (cc.rectIntersectsRect(drag, rect)) {     
		      /*如果匹配成功*/
		      if(target.id == this.cards[i].id){
		        /*提示声音*/
		        sound.rightAudio();
				target.setPosition((this.cards[i].x+29*fix), (this.cards[i].y+150*fix));
				var action_0 = cc.moveBy(0.1,cc.p(0,-140*fix));
				var action_1 = cc.rotateBy(0.1,8);
				var action_2 = cc.rotateBy(0.1,-20);
				var action_3 = cc.rotateBy(0.1,5);
				target.runAction(cc.sequence(action_0,cc.delayTime(0.1),action_1,cc.delayTime(0.01),action_1.reverse(),cc.delayTime(0.01),action_2,cc.delayTime(0.01),action_2.reverse(),action_3));
		        		/*设置层级*/
                target.setLocalZOrder(1);
		        /*移除所以监听事件*/
		        cc.eventManager.removeAllListeners();
		        var _this = cc.director.getRunningScene().getChildByTag(2);
		        _this.onTouchBegan();
		        this.moveFlag = false;
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
		      return true;
		    }
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
    
    var len = this.shadows.length;
    for(var i = 0 ; i < len ; i++){
      this.shadows[i].removeFromParent();
    } 
    this.shadows = [];
    var len = this.cards.length;
    for(var i = 0 ; i < len ; i++){
      this.cards[i].removeFromParent();
    } 
    this.cards = [];
    for(var i=0;i<this.upMoney.length;i++){
		this.upMoney[i].removeFromParent();
    }
    this.upMoney = [];
    if(this.count < 3){
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
