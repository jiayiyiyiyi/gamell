/*主层*/
var MainLayer = cc.Layer.extend({
  ctor:function () {
    this._super();
    this.count = 0;
    /*公共*/
    this.comCon();
    /*初始化界面*/
    this.init();
    /*背景音乐*/
    sound.gameBgAudio();
    this.onOff = true;
    this.dragAction();
    this.hintAction();
  },
  comCon:function(){
    //背景墙
    this.ward = cc.Sprite.create(res.Ward);
    this.ward.setAnchorPoint(0, 0);
    this.ward.setPosition(18*fix, -15*fix);
    this.ward.setScale(0.33*fix,0.33);
    this.addChild(this.ward, 0);
    //架子
    this.stick = cc.Sprite.create(res.Stick);
    this.stick.setAnchorPoint(0, 0);
    this.stick.setPosition(112*fix, 305);
    this.stick.setScale(0.33*fix);
    this.addChild(this.stick, 0);
    //夹子
    for(var i=0;i<data.clip.length;i++){
        this.clip = cc.Sprite.create(res.ClipOne);
        this.clip.setAnchorPoint(0, 0);
        this.clip.setPosition(data.clip[i].x*fix, data.clip[i].y);
        this.clip.setScale(0.33*fix);
        this.addChild(this.clip, 1);
    }
  },
  init:function(){
    // 袜子
    this.pos = [{x:198,y:313},{x:300,y:313},{x:406,y:313},{x:511,y:313}]
    var num=Math.floor(Math.random()*this.pos.length);
    this.sockOne = cc.Sprite.create(res.RedSocks);
    this.sockOne.id = 0;
    this.sockOne.setAnchorPoint(0, 1);
    this.sockOne.setPosition(this.pos[num].x*fix, this.pos[num].y);
    this.sockOne.setScale(0.3*fix);
    this.addChild(this.sockOne, 0);
    this.pos.splice(num,1);

    num=Math.floor(Math.random()*this.pos.length);
    this.sockTwo = cc.Sprite.create(res.BlueSock);
    this.sockTwo.id = 1;
    this.sockTwo.setAnchorPoint(0, 1);
    this.sockTwo.setPosition(this.pos[num].x*fix, this.pos[num].y);
    this.sockTwo.setScale(0.3*fix);
    this.addChild(this.sockTwo, 0);
    this.pos.splice(num,1);

    num=Math.floor(Math.random()*this.pos.length);
    this.sockThree = cc.Sprite.create(res.GreenSock);
    this.sockThree.id = 2;
    this.sockThree.setAnchorPoint(0, 1);
    this.sockThree.setPosition(this.pos[num].x*fix, this.pos[num].y);
    this.sockThree.setScale(0.3*fix);
    this.addChild(this.sockThree, 0);
    this.pos.splice(num,1);

    num=Math.floor(Math.random()*this.pos.length);
    this.sockFour = cc.Sprite.create(res.PurpleSocks);
    this.sockFour.id = 3;
    this.sockFour.setAnchorPoint(0, 1);
    this.sockFour.setPosition(this.pos[num].x*fix, this.pos[num].y);
    this.sockFour.setScale(0.3*fix);
    this.addChild(this.sockFour, 0);
    this.pos.splice(num,1);
    //猫
    this.cat = cc.Sprite.create(res.Cat);
    this.cat.setAnchorPoint(0, 0);
    this.cat.setPosition(284*fix, -15*fix);
    this.cat.id = this.count;
    this.cat.setScale(0.3*fix);
    this.addChild(this.cat, 2);
    //右边袜子
    this.rightSock = [res.SmallRed,res.SmallBlue,res.SmallGreen,res.SmallPurple];
    this.right = cc.Sprite.create(this.rightSock[this.count]);
    this.right.setAnchorPoint(0, 1);
    this.right.setPosition(440*fix, 100*fix);
    this.right.id = this.count;
    this.right.setScale(0.3*fix);
    this.addChild(this.right, 0);
    //左边袜子
    this.leftSock = [res.SmallRedRight,res.SmallBlueRight,res.SmallGreenRight,res.SmallPurpleRight];
    this.dragArr = [this.sockOne,this.sockTwo,this.sockThree,this.sockFour];
  },
    hintAction : function(){
        var handX = this.sockOne.x+40;
        var handY = this.sockOne.y-40;
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
        var shouaction = cc.sequence(cc.moveTo(1,cc.p(349*fix,63*fix)),cc.delayTime(0.5),shoucb).repeatForever();
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
                    //隐藏手势
                    this.scheduleOnce(function(){
                        this.hand.setOpacity(0);
                    },0.8);
                    this.onOff = false;
                    /*按键声*/
                    sound.buttonAudio();
                    if(target.id === 0){
                        sound.redAudio();
                    }
                    if(target.id === 1){
                        sound.blueAudio();
                    }
                    if(target.id === 2){
                        sound.greenAudio();
                    }
                    if(target.id === 3){
                        sound.purpleAudio();
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
          updata.finish_steps++;
          this.onOff = true;
          var target = event.getCurrentTarget();
          /*设置层级*/
            target.setLocalZOrder(0);
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
    var s = this.cat.getBoundingBox(); 
    var rect = cc.rect(s.x, s.y , s.width, s.height);
    var drag = target.getBoundingBox();
    // 碰撞检测
    if (cc.rectIntersectsRect(drag, rect)) {     
      /*如果匹配成功*/
      if(target.id === this.count){
      	 /*设置层级*/
       target.setLocalZOrder(1);
        /*提示声音*/
        sound.rightAudio();
        this.cat.initWithFile(res.CatOne);
        target.initWithFile(this.leftSock[this.count]);
		target.setPosition(259*fix, 101*fix);
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
        var _this = cc.director.getRunningScene().getChildByTag(2);
        _this.wrongStar();
      }
      return true;
    }
  },
  review : function(){
    updata.finish_star ++;
    this.count ++;
    /*清楚*/
    var len = this.dragArr.length;
    for(var i = 0 ; i < len ; i++){
      this.dragArr[i].removeFromParent();
    } 
    this.dragArr = [];
    this.rightSock = [];
    this.leftSock = [];
    this.right.removeFromParent();
    this.cat.removeFromParent();

    if(this.count < 4){
      this.init()  
      /*添加监听*/
      var len = this.dragArr.length;
      for(var i = 0 ; i < len ; i++){
        cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
      }        
    }else{
      updata.finish_star = this.count;
      updata.is_finish = 1;
      sound.stopAudio();
      sound.winAudio();
      var _this = cc.director.getRunningScene().getChildByTag(2);
      _this.gameEnd(this.count);
    }               
  }
 })
   
