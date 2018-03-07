var MainLayer=cc.Layer.extend({
	ctor:function(){
		this._super();
		var size = cc.director.getWinSize();
	    this.count = 0;
	    this.comCon();
	    this.init();
	    this.updas = function(){
	    		sound.startTipAudio();
	    }
	    this.schedule(this.updas,8,cc.REPEAT_FOREVER,1);
	    this.dragAction();
	},
	comCon:function(){
		this.tray = cc.Sprite.create(res.Tray);
	    this.tray.setAnchorPoint(0, 0);
	    this.tray.setPosition(100*fix, 145);
	    this.tray.setScale(0.29*fix);
	    this.addChild(this.tray, 0);
	    
	    this.slot = cc.Sprite.create(res.CardSlot);
	    this.slot.setAnchorPoint(0, 0);
	    this.slot.setPosition(285.7*fix, 166.7);
	    this.slot.setScale(0.3*fix);
	    this.addChild(this.slot, 1);
	    
//	    this.ext = cc.Sprite.create(res.ExtBox);
//	    this.ext.setAnchorPoint(0, 0);
//	    this.ext.setPosition(255.3*fix, 320.7*fix);
//	    this.ext.setScale(0.3*fix);
//	    this.addChild(this.ext, 2);
	},
	init:function(){
			this.oldpos=[
			{
				x:-296,
				y:15
			},
			{
				x:-185,
				y:15
			},
			{
				x:-75,
				y:15
			}
		],
		this.img=[
			{
				name:res.CardOne,
				id:0
			},
			{
				name:res.CardTwo,
				id:1
			},
			{
				name:res.CardThree,
				id:2
			},
			{
				name:res.CardFour,
				id:3
			},
			{
				name:res.CardFive,
				id:4
			},
			{
				name:res.CardSix,
				id:5
			}
		]
		//this.cards=[res.CardOne,res.CardTwo,res.CardThree,res.CardFour,res.CardFive,res.CardSix];
		//cc.log(res.CardOne.name)
		this.cardA=this.img;
		//cc.log(this.cardA[0]);
		var sum=Math.floor(Math.random()*this.oldpos.length);
		this.Card1 = cc.Sprite.create(this.cardA[this.count].name);
		this.Card1.id = this.cardA[this.count].id;
	    this.Card1.setAnchorPoint(0, 0);
	    //cc.log(this.pos);
	    this.Card1.setPosition(this.oldpos[sum].x*fix, this.oldpos[sum].y/fix+40/fix-40);
	    this.Card1.setScale(0.3*fix);
	    this.addChild(this.Card1, 2);
	    //添加阴影
	    this.shadow1=cc.Sprite.create(res.Project);
	    this.shadow1.setAnchorPoint(0, 0);
	    this.shadow1.id = this.cardA[this.count].id;
	    this.shadow1.setPosition(this.oldpos[sum].x*fix, this.oldpos[sum].y/fix+40/fix-40);
	    this.shadow1.setScale(0.3*fix);
	    this.addChild(this.shadow1, 1);
	    this.cardA.splice(this.count,1);
	    this.oldpos.splice(sum,1);
	    
	    var num=Math.floor(Math.random()*this.cardA.length);
	    sum=Math.floor(Math.random()*this.oldpos.length);
	    this.Card2 = cc.Sprite.create(this.cardA[num].name);
		this.Card2.id = this.cardA[num].id;
	    this.Card2.setAnchorPoint(0, 0);
	    this.Card2.setPosition(this.oldpos[sum].x*fix, this.oldpos[sum].y/fix+40/fix-40);
	    this.Card2.setScale(0.3*fix);
	    this.addChild(this.Card2, 2);
	      //添加阴影
	    this.shadow2=cc.Sprite.create(res.Project);
	    this.shadow2.setAnchorPoint(0, 0);
	    this.shadow2.id = this.cardA[num].id;
	    this.shadow2.setPosition(this.oldpos[sum].x*fix, this.oldpos[sum].y/fix+40/fix-40);
	    this.shadow2.setScale(0.3*fix);
	    this.addChild(this.shadow2, 1);
	    this.cardA.splice(num,1);
	     this.oldpos.splice(sum,1);
	    
	    num=Math.floor(Math.random()*this.cardA.length);
	    sum=Math.floor(Math.random()*this.oldpos.length);
	    this.Card3 = cc.Sprite.create(this.cardA[num].name);
		this.Card3.id = this.cardA[num].id;
	    this.Card3.setAnchorPoint(0, 0);
	    //cc.log(this.pos)
	    this.Card3.setPosition(this.oldpos[sum].x*fix, this.oldpos[sum].y/fix+40/fix-40);
	    this.Card3.setScale(0.3*fix);
	    this.addChild(this.Card3, 2);
	      //添加阴影
	    this.shadow3=cc.Sprite.create(res.Project);
	    this.shadow3.setAnchorPoint(0, 0);
	    this.shadow3.id = this.cardA[num].id;
	    this.shadow3.setPosition(this.oldpos[sum].x*fix, this.oldpos[sum].y/fix+40/fix-40);
	    this.shadow3.setScale(0.3*fix);
	    this.addChild(this.shadow3, 1);
	    this.cardA.splice(num,1);
	    this.oldpos.splice(sum,1);
	    
	    this.dragArr=[this.Card1,this.Card2,this.Card3];
	    this.shadows=[this.shadow1,this.shadow2,this.shadow3];
	    //console.log(this.shadows[1].id);
	    //标题
//	    this.title=[1,2,3,4,5];
//	    this.helloLabel = new cc.LabelTTF("查找"+this.title[this.count], "", 50);
//	    this.helloLabel.setColor(249,194,111);
//	    this.helloLabel.x = 262.7*fix;
//	    this.helloLabel.y = 60.3*fix;
//	    this.ext.addChild(this.helloLabel,3);
	    //移动进入
	    function get(v,x,y) {
	        var action = cc.moveBy(0.4,cc.p(x,y))
	        v.runAction(action)
	     }
	    for(var i=0;i<this.dragArr.length;i++){
	    		get(this.dragArr[i],490*fix,10/fix);
	    }
	    for(var i=0;i<this.shadows.length;i++){
	    		get(this.shadows[i],490*fix,6/fix);
	    }
	    //数字图片
	    this.numberImg=[res.One,res.Two,res.Three,res.Four,res.Five];
		this.number1 = cc.Sprite.create(this.numberImg[this.count]);
	    this.number1.setAnchorPoint(0, 0);
	    this.number1.setPosition(110, 130);
	    this.slot.addChild(this.number1, 1);
	    
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
                this.unschedule(this.updas);
                //console.log(target.id);
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
                //cc.log(target.id)
                //阴影
                var mm = 0;
                for(let i=0;i<this.shadows.length;i++){
		            		if(target.id==this.shadows[i].id){
		            			//cc.log(this.shadows[i].id);
		            			mm = i;
		            		}
		            }
                this.shadows[mm].setOpacity(0);
                
            }.bind(this),
        onTouchEnded: function (touch, event) {            // 实现onTouchEnded事件处理回调函数                        
						var target = event.getCurrentTarget();
						updata.finish_steps++;
            this.judgeEach(target);
            if(this.moveFlag){
              //回到原位
              target.setPosition(dragX,dragY);
              for(var i=0;i<this.shadows.length;i++){
	            		if(target.id==this.shadows[i].id){
	            			//cc.log(this.shadows[i].id);
	            			this.shadows[i].setOpacity(255);
	            		}
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
    /*挑选相同 ID*/             
    var s = this.slot.getBoundingBox(); 
    var rect = cc.rect(s.x, s.y , s.width, s.height);
    var drag = target.getBoundingBox();
    // 碰撞检测
    if (cc.rectIntersectsRect(drag, rect)) {     
      /*如果匹配成功*/
      if(target.id == this.count){
        /*提示声音*/
        sound.rightAudio();
		target.setPosition(303.7*fix, 169.7);
		var len = this.dragArr.length;
	    for(var i = 1 ; i < len ; i++){
	      this.dragArr[i].removeFromParent();
	    } 
	    this.dragArr = [];
	    
	    var len = this.shadows.length;
	    for(var i = 0 ; i < len ; i++){
	      this.shadows[i].removeFromParent();
	    } 
	    this.shadows = [];
	    //延迟删除唯一正确的
	    this.scheduleOnce(function(){
             target.removeFromParent();                   
        },2.3)
	   
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
        //var _this = cc.director.getRunningScene().getChildByTag(2);
      }
      return true;
    }
  },
  review : function(){
		updata.finish_star++;
    this.count ++;
    /*清楚*/
//  var len = this.dragArr.length;
//  for(var i = 0 ; i < len ; i++){
//    this.dragArr[i].removeFromParent();
//  } 
//  this.dragArr = [];
//  
//  var len = this.shadows.length;
//  for(var i = 0 ; i < len ; i++){
//    this.shadows[i].removeFromParent();
//  } 
//  this.shadows = [];
    
		this.slot.removeAllChildren();
		
    if(this.count < 5){
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
})
