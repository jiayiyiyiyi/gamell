//每个场景创建一个文件
var Layer3 = cc.Layer.extend({
    ctor: function() {
		this._super();
		this.layerightStar= new StarLayer(common_data[1]);
        this.addChild(this.layerightStar, 10, 10);
        this.back = new backLayer();
        this.addChild(this.back, 11, 4);

        this.cont = 1;
        this.dealArr = [];
        this.dragArr = [];
        this.cardArr = [];
        this.conCom();
        this.init();
        this.onOff = true;
        this.dragAction();
    },
    conCom:function(){
		this.threeLis = arrsubject[2];
		this.com = this.threeLis[4];
    	for(var i =0;i<this.com.length;i++){
			var sprite = new cc.Sprite(this.com[i].url);
            sprite.setAnchorPoint(0, 0);
            this.dealArr.push(sprite);
            sprite.setPosition((this.com[i].sX)*fix, this.com[i].sY*fix);
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 1);
	    }
    },
    init:function(){
        //卡片
        this.card = this.threeLis[0];
        for(var i =0;i<this.card.length;i++){
            var sprite = new cc.Sprite(this.card[i].url);
            sprite.setAnchorPoint(0, 0);
            this.dealArr.push(sprite);
            this.cardArr.push(sprite);
            sprite.setPosition((this.card[i].sX-590)*fix, this.card[i].sY*fix);
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 1);
        }
    	//动物虚线
		this.animal = this.threeLis[this.cont];
		this.dotted = cc.Sprite.create(this.animal[0].url);
		this.dealArr.push(this.dotted);
	    this.dotted.setAnchorPoint(0, 0);
	    this.dotted.setPosition(this.animal[0].sX*fix, this.animal[0].sY*fix);
	    this.dotted.name = this.animal[0].name;
	    this.dotted.setScale(0.333*fix);
	    this.addChild(this.dotted, 2);

	//卡片上图片位置
		this.cardPos = [{x:127,y:55},{x:352,y:55},{x:577,y:55}];
	//卡片上图片
	    for(var i =1;i<this.animal.length;i++){
			this.cos = this.random(this.cardPos);
			var sprite = new cc.Sprite(this.animal[i].url);
            sprite.setAnchorPoint(0.5, 0.5);
            this.dealArr.push(sprite);
            this.dragArr.push(sprite);
            sprite.setPosition((this.cos.x+40-590)*fix, this.cos.y-50/fix+70);
            sprite.name = this.animal[i].name;
            sprite.id = this.animal[i].id;
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 2);
            this.index = this.cardPos.indexOf(this.cos);
			this.cardPos.splice(this.index,1);
	    }
	    	    	    //移动进入
	    for(var i=0;i<this.dragArr.length;i++){
	    	this.get(this.dragArr[i],590*fix,0);
	    	this.get(this.cardArr[i],590*fix,0);
	    }
        if (common_data[1].obtain == 1){
	    	for(var i = 0;i<this.dragArr.length;i++){
                this.dragArr[i].removeFromParent();
                this.cardArr[i].removeFromParent();
			}
	    	this.dotted.removeFromParent();
		}
   },
    dragAction: function () {
		/*设置 初始坐标 */
		var dragX, dragY;
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
                        /*保存原始坐标*/
                        dragX = target.getPosition().x;
                        dragY = target.getPosition().y;
                        return true;
                    }
                    return false ;
                }

			}.bind(this),
            onTouchMoved: function (touch, event) {            //实现onTouchMoved事件处理回调函数, 触摸移动时触发
                var size = cc.director.getWinSize();
                // 移动当前按钮精灵的坐标位置
                var target = event.getCurrentTarget();

                target.initWithFile(this.animal[target.id].urly);

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
                this.onOff = true;
                var target = event.getCurrentTarget();
                updata.finish_steps++;
                this.judgeEach(target);
                if(this.moveFlag){
                    //回到原位
                    target.setPosition(dragX,dragY);
                    target.initWithFile(this.animal[target.id].url);
                }
            }.bind(this)
        });
		// 添加监听器到管理器
		var len = this.dragArr.length;
		for (var i = 0; i < len; i++) {
			cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
		}
	},
    judgeEach : function(target){
            /*挑选相同 ID*/
            var s = this.dotted.getBoundingBox();
            var rect = cc.rect(s.x, s.y, s.width, s.height);
            var drag = target.getBoundingBox();
            // 碰撞检测
            if (cc.rectIntersectsRect(drag, rect)) {
                /*如果匹配成功*/
                if (target.name === this.dotted.name) {
                    /*提示声音*/
                    sound.rightAudio();
                    target.setOpacity(0);
                    //第一关
                    if(this.cont == 1){
                        sound.honeyAudio();
                        //移除所有监听
                        cc.eventManager.removeAllListeners();
                        this.dotted.initWithFile(res.HoneyNormal);
                        this.scheduleOnce(function(){
                            this.flay(this.dotted,res.HoneyFlayTwo,res.HoneyFlayOne,0.2,0.2)
                        },0.3)
                        this.scheduleOnce(function(){
                            this.dotted.runAction(cc.moveBy(3,cc.p(700*fix,200/fix)));
                        },0.4)
						this.scheduleOnce(function(){
                            for(var i=0;i<this.dragArr.length;i++){
                                this.get(this.dragArr[i],890*fix,0);
                                this.get(this.cardArr[i],890*fix,0);
                            }
                        },0.8)
                        this.scheduleOnce(function(){
                            /*重新渲染画布*/
                            this.review();
                        },3.2)
					}
					//第二关
					if(this.cont == 2){
                        sound.antAudio();
                        //移除所有监听
                        cc.eventManager.removeAllListeners();
                        this.dotted.initWithFile(res.AntComplete);
                        this.scheduleOnce(function(){
                            this.flay(this.dotted,res.AntComplete,res.AntGo,0.2,0.2)
                        },0.3)
                        this.scheduleOnce(function(){
                            this.dotted.runAction(cc.moveBy(3,cc.p(700*fix,0*fix)));
                        },0.4)
                        this.scheduleOnce(function(){
                            for(var i=0;i<this.dragArr.length;i++){
                                this.get(this.dragArr[i],890*fix,0);
                                this.get(this.cardArr[i],890*fix,0);
                            }
                        },0.8)
                        this.scheduleOnce(function(){
                            /*重新渲染画布*/
                            this.review();
                        },3.4)
					}
					//第三关
					if(this.cont == 3){
                        sound.butterAudio();
                        //移除所有监听
                        cc.eventManager.removeAllListeners();
                        this.dotted.initWithFile(res.BigButter);
                        this.scheduleOnce(function(){
                            this.flay(this.dotted,res.BigButter,res.BigButterFly,0.2,0.2)
                        },0.3)
                        this.scheduleOnce(function(){
                            this.dotted.runAction(cc.moveBy(3,cc.p(700*fix,200*fix)));
                        },0.4)
                        this.scheduleOnce(function(){
                            for(var i=0;i<this.dragArr.length;i++){
                                this.get(this.dragArr[i],890*fix,0);
                                this.get(this.cardArr[i],890*fix,0);
                            }
                        },0.8)
                        this.scheduleOnce(function(){
                            /*重新渲染画布*/
                            this.review();
                        },3.4)
                        //出现飞星
                        this.scheduleOnce(function () {
                            if (common_data[1].obtain != 1) {
                                updata.finish_star++;
                                this.layerightStar.rightStar(1)
                                common_data[1].obtain = 1;
                                common_data[0].obtain++;
                                sound.starAudio();
                                this.scheduleOnce(function () {
                                    var bglayer = cc.director.getRunningScene().getChildByTag(30);
                                    this.dealArr.forEach(function(v){
                                        v.runAction(cc.fadeTo(1,100));
                                        bglayer._children[0].runAction(cc.fadeTo(1,150));
                                        v.removeFromParent();

                                    })
                                    this.scheduleOnce(function(){
                                        bglayer._children[0].initWithFile(res.Bg);
                                        bglayer._children[0].runAction(cc.fadeTo(1,250));
                                        this.layerightStar.removeFromParent();
                                        var layer = new Layer23();
                                        this.addChild(layer, 0, 1);
                                    },1)

                                }, 5)
                            }
                        }, 2.3)
					}
					this.moveFlag = false;

                    //给手动返回添加监听
                    var back = this.back.dragArr;
                    var len = back.length;
                    for (var i = 0; i < len; i++) {
                        cc.eventManager.addListener(this.back.listener1.clone(), back[i]);
                    }
                }else{
                	sound.wrongAudio();
				}
            }
    },
   	random: function (arr) {
		index = Math.floor((Math.random() * arr.length));
		return arr[index];
	},
	ardTurnOver: function (sprite) {
        var action1 = cc.scaleTo(0.2, 0.001 * fix, 0.333 * fix);
        var scale_ease1 = action1.easing(cc.easeOut(2));

        var action2 = cc.scaleTo(0.2, 0.333 * fix, 0.333 * fix);
        var scale_ease2 = action2.easing(cc.easeIn(2));

        var cb1 = cc.callFunc(function () {
            /* 换图 */
            sprite.setTexture(res.BrandTwo);
        }.bind(this))

        var action = cc.sequence(scale_ease1, cb1, cc.delayTime(0.2), scale_ease2);

        sprite.runAction(action);
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
   	get : function (v,x,y) {
	        var action = cc.moveBy(0.4,cc.p(x,y))
	        v.runAction(action)
	},
   review : function(){
	    this.cont ++;
	    sound.stopEff();
	    /*清楚*/
	    var len = this.dragArr.length;
	    for(var i = 0 ; i < len ; i++){
	      this.dragArr[i].removeFromParent();
	    } 
	    this.dragArr = [];
	    var len = this.cardArr.length;
	    for(var i = 0 ; i < len ; i++){
	      this.cardArr[i].removeFromParent();
	    }
	    this.cardArr = [];
	    if(this.cont < 4){
	      this.init() ; 
	      /*添加监听*/
	      var len = this.dragArr.length;
	      for(var i = 0 ; i < len ; i++){
	        cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
	      }        
	    }else{

	    }               
  },
    rotateAction : function(a){ //抖动
        var action1 = cc.rotateTo(0.1,25);
        var action2 = cc.rotateTo(0.1,0);
        var action3 = cc.rotateTo(0.1,-25);
        var action4 = cc.rotateTo(0.1,0);
        var action = cc.sequence(action1,action2,action3,action4);

        a.runAction(action);
    }
})