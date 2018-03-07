/*主层*/
var MainLayer = cc.Layer.extend({
  ctor:function () {
    this._super();
    this.count = 0;
    this.conCom();
    this.init();
    this.onOff = true;
    this.updas = function(){
        sound.startTipAudio();
    }
    this.schedule(this.updas,8,cc.REPEAT_FOREVER,1);
    this.dragAction();
    this.openArr = [];
  },
  conCom:function(){
    this.table = cc.Sprite.create(res.Table);
    this.table.setAnchorPoint(0, 0);
    this.table.setPosition(114*fix, -70*fix);
    this.table.setScale(0.3*fix);
    this.addChild(this.table, 0);
  },
 init:function(){
    this.point = [
        {
            x:155,
            y:19
        },
        {
            x:298.3,
            y:19
        },
        {
            x:451.7,
            y:19
        }
    ]
    this.sprArr = data.sprites[this.count];
    this.coneOne = cc.Sprite.create(this.sprArr[0].iceOne);
    this.coneOne.setAnchorPoint(0, 0);
    this.coneOne.id=this.sprArr[0].id;
    this.coneOne.setPosition(169.3*fix, 19+113*fix);
    this.coneOne.setScale(0.3*fix);
    this.addChild(this.coneOne, 0);
    
    var sum=Math.floor(Math.random()*this.point.length);
    this.setOne = cc.Sprite.create(this.sprArr[0].setOne);
    this.setOne.setAnchorPoint(0, 0);
    this.setOne.id=this.sprArr[0].id;
    this.setOne.setPosition(this.point[sum].x*fix, this.point[sum].y);
    this.point.splice(sum,1);
    this.setOne.setScale(0.3*fix);
    this.addChild(this.setOne, 1);
    
    this.coneTwo = cc.Sprite.create(this.sprArr[1].iceTwo);
    this.coneTwo.setAnchorPoint(0, 0);
    this.coneTwo.id=this.sprArr[1].id;
    this.coneTwo.setPosition(311.7*fix, 19+113*fix);
    this.coneTwo.setScale(0.3*fix);
    this.addChild(this.coneTwo, 0);
    
    sum=Math.floor(Math.random()*this.point.length);
    this.setTwo = cc.Sprite.create(this.sprArr[1].setTwo);
    this.setTwo.setAnchorPoint(0, 0);
    this.setTwo.id=this.sprArr[1].id;
    this.setTwo.setPosition(this.point[sum].x*fix, this.point[sum].y);
    this.point.splice(sum,1);
    this.setTwo.setScale(0.3*fix);
    this.addChild(this.setTwo, 1);
    
    this.coneThree = cc.Sprite.create(this.sprArr[2].iceThree);
    this.coneThree.setAnchorPoint(0, 0);
    this.coneThree.id=this.sprArr[2].id;
    this.coneThree.setPosition(464.7*fix, 19+113*fix);
    this.coneThree.setScale(0.3*fix);
    this.addChild(this.coneThree, 0);
    
    sum=Math.floor(Math.random()*this.point.length);
    this.setThree = cc.Sprite.create(this.sprArr[2].setThree);
    this.setThree.setAnchorPoint(0, 0);
    this.setThree.id=this.sprArr[2].id;
    this.setThree.setPosition(this.point[sum].x*fix, this.point[sum].y);
    this.point.splice(sum,1);
    this.setThree.setScale(0.3*fix);
    this.addChild(this.setThree, 1);
    
    this.dragArr=[this.setOne,this.setTwo,this.setThree];
    this.coneArr=[this.coneOne,this.coneTwo,this.coneThree];
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
                    this.onOff = false;
                    /*按键声*/
                    sound.buttonAudio();
                    this.unschedule(this.updas);
                    if(target.id == 1){
                        sound.greenAudio();
                    }
                    if(target.id == 2){
                        sound.purpleAudio();
                    }
                    if(target.id == 3){
                        sound.blueAudio();
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
            this.onOff = true;
            updata.finish_steps++;
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
      for(var i=0;i<this.coneArr.length;i++){
          var s = this.coneArr[i].getBoundingBox();
          var rect = cc.rect(s.x, s.y , s.width, s.height+100);
          var drag = target.getBoundingBox();
          // 碰撞检测
          if (cc.rectIntersectsRect(drag, rect)) {
              /*如果匹配成功*/
              if(target.id == this.coneArr[i].id){
                  sound.rightAudio();
                  this.moveFlag = false;
                  //移除监听
                  cc.eventManager.removeAllListeners();
                  var _this = cc.director.getRunningScene().getChildByTag(2);
                  _this.onTouchBegan();
                  //添加到数组
                  this.openArr.push(target);
                  //第一关
                  if(this.count == 0){
                      if(this.coneArr[i].id == 1){
                          target.setPosition(155*fix,19+172*fix);
                      }
                      if(this.coneArr[i].id == 2){
                          target.setPosition(298.3*fix,19+172*fix);
					  }
					  if(this.coneArr[i].id == 3){
                          target.setPosition(451.7*fix,19+172*fix);
                      }
                  }
                  //第二关
				  if(this.count == 1){
                      if(this.coneArr[i].id == 1){
                          target.setPosition(155*fix,19+202.3*fix);
                      }
                      if(this.coneArr[i].id == 2){
                          target.setPosition(298.3*fix,19+202.3*fix);
                      }
                      if(this.coneArr[i].id == 3){
                          target.setPosition(451.7*fix,19+202.3*fix);
                      }
				  }
				  //第三关
                  if(this.count == 2){
                      if(this.coneArr[i].id == 1){
                          target.setPosition(155*fix,19+164*fix);
                      }
                      if(this.coneArr[i].id == 2){
                          target.setPosition(298.3*fix,19+164*fix);
					  }
					  if(this.coneArr[i].id == 3){
                          target.setPosition(451.7*fix,19+164*fix);
                      }
                  }
                  //第四关
                  if(this.count == 3){
                      if(this.coneArr[i].id == 1){
                          target.initWithFile(res.MackGreenLean);
                          target.setPosition(168*fix,19+241*fix);
                      }
                      if(this.coneArr[i].id == 2){
                          target.initWithFile(res.MackPinkLean);
                          target.setPosition(319.3*fix,19+241*fix);
                      }
                      if(this.coneArr[i].id == 3){
                          target.initWithFile(res.MackBlueLean);
                          target.setPosition(473.7*fix,19+241*fix);
                      }
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
                  sound.wrongAudio();
                  }
              }
			}
		if(this.openArr.length==3){
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
    for(var i=0;i<this.coneArr.length;i++){
    	this.coneArr[i].removeFromParent();
    }
    this.coneArr = [];
    updata.finish_star++;
    this.count ++;
    for(var i = 0; i < this.openArr.length; i++){
        this.openArr[i].removeFromParent();
    }
    this.openArr = [];
    if(this.count==1){
        this.fixTwo();
   	}
   	if(this.count==2){
   		this.fixThree();
   	}
   	if(this.count == 3){
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
      updata.is_finish = 1;
      updata.finish_star = this.count;
      var _this = cc.director.getRunningScene().getChildByTag(2);
      //this.scheduleOnce(_this.gameEnd.bind(this,this.count),1);
      _this.gameEnd(this.count);
      sound.winAudio();
    }               
  },
  fixTwo:function(){
    this.coneBlue = cc.Sprite.create(res.IceGreen);
    this.coneBlue.setAnchorPoint(0, 0);
    this.coneBlue.setPosition(155*fix, 19+172*fix);
    this.coneBlue.setScale(0.3*fix);
    this.addChild(this.coneBlue, 1);
    
    this.coneGreen = cc.Sprite.create(res.IcePink);
    this.coneGreen.setAnchorPoint(0, 0);
    this.coneGreen.setPosition(298.3*fix, 19+172*fix);
    this.coneGreen.setScale(0.3*fix);
    this.addChild(this.coneGreen, 1);
    
    this.conePink = cc.Sprite.create(res.IceBlue);
    this.conePink.setAnchorPoint(0, 0);
    this.conePink.setPosition(451.7*fix, 19+172*fix);
    this.conePink.setScale(0.3*fix);
    this.addChild(this.conePink, 1);
  },
  fixThree:function(){
    this.cruGreen = cc.Sprite.create(res.CrumbGreen);
    this.cruGreen.setAnchorPoint(0, 0);
    this.cruGreen.setPosition(155*fix, 19+202.3*fix);
    this.cruGreen.setScale(0.3*fix);
    this.addChild(this.cruGreen, 1);
    
    this.cruPink = cc.Sprite.create(res.CrumbPink);
    this.cruPink.setAnchorPoint(0, 0);
    this.cruPink.setPosition(298.3*fix, 19+202.3*fix);
    this.cruPink.setScale(0.3*fix);
    this.addChild(this.cruPink, 1);
    
    this.cruBlue = cc.Sprite.create(res.CrumbBlue);
    this.cruBlue.setAnchorPoint(0, 0);
    this.cruBlue.setPosition(451.7*fix, 19+202.3*fix);
    this.cruBlue.setScale(0.3*fix);
    this.addChild(this.cruBlue, 1);
  },
  fixFour:function(){
    this.heartGreen = cc.Sprite.create(res.HeartGreen);
    this.heartGreen.setAnchorPoint(0, 0);
    this.heartGreen.setPosition(155*fix, 19+164*fix);
    this.heartGreen.setScale(0.3*fix);
    this.addChild(this.heartGreen, 1);
    
    this.heartPink = cc.Sprite.create(res.HeartPink);
    this.heartPink.setAnchorPoint(0, 0);
    this.heartPink.setPosition(298.3*fix, 19+164*fix);
    this.heartPink.setScale(0.3*fix);
    this.addChild(this.heartPink, 1);
    
    this.heartBlue = cc.Sprite.create(res.HeartBlue);
    this.heartBlue.setAnchorPoint(0, 0);
    this.heartBlue.setPosition(451.7*fix, 19+164*fix);
    this.heartBlue.setScale(0.3*fix);
    this.addChild(this.heartBlue, 1);
  },
  fixEnd:function(){
    this.coGreen = cc.Sprite.create(res.ConeGreen);
    this.coGreen.setAnchorPoint(0, 0);
    this.coGreen.setPosition(169.3*fix, 19+113*fix);
    this.coGreen.setScale(0.3*fix);
    this.addChild(this.coGreen, 1);
    
    this.coPink = cc.Sprite.create(res.ConePink);
    this.coPink.setAnchorPoint(0, 0);
    this.coPink.setPosition(311.7*fix, 19+113*fix);
    this.coPink.setScale(0.3*fix);
    this.addChild(this.coPink, 1);
    
    this.coBlue = cc.Sprite.create(res.ConeBlue);
    this.coBlue.setAnchorPoint(0, 0);
    this.coBlue.setPosition(464.7*fix, 19+113*fix);
    this.coBlue.setScale(0.3*fix);
    this.addChild(this.coBlue, 1);
    
    this.macGreen = cc.Sprite.create(res.MackGreenLean);
    this.macGreen.setAnchorPoint(0, 0);
    this.macGreen.setPosition(168*fix, 19+241*fix);
    this.macGreen.setScale(0.3*fix);
    this.addChild(this.macGreen, 1);
    
    this.macPink = cc.Sprite.create(res.MackPinkLean);
    this.macPink.setAnchorPoint(0, 0);
    this.macPink.setPosition(319.3*fix, 19+241*fix);
    this.macPink.setScale(0.3*fix);
    this.addChild(this.macPink, 1);
    
    this.macBlue = cc.Sprite.create(res.MackBlueLean);
    this.macBlue.setAnchorPoint(0, 0);
    this.macBlue.setPosition(473.7*fix, 19+241*fix);
    this.macBlue.setScale(0.3*fix);
    this.addChild(this.macBlue, 1);
  }
})