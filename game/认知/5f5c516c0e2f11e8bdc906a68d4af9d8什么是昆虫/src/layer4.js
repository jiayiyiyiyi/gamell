//每个场景创建一个文件
var Layer4 = cc.Layer.extend({
    ctor: function() {
		this._super();
		this.layerightStar= new StarLayer(common_data[2]);
        this.addChild(this.layerightStar, 10, 10);
        this.back = new backLayer();
        this.addChild(this.back, 11, 4);
        
        this.dealArr = [];
        this.dragArr = [];
        this.init();
        if (common_data[2].obtain != 1){
            this.dragAction();
		}

    },
    init:function(){
    	//蜜蜂
		this.fourLis = arrsubject[3];
		this.bee = cc.Sprite.create(this.fourLis[0].url);
		this.dealArr.push(this.bee);
	    this.bee.setAnchorPoint(0, 0);
	    this.bee.setPosition(this.fourLis[0].sX*fix, this.fourLis[0].sY*fix);
	    this.bee.setScale(0.333*fix);
	    this.addChild(this.bee, 1);
	//卡片位置
		this.cardPos = [{x:185,y:62},{x:473,y:62}];
	//卡片
	    for(var i =1;i<this.fourLis.length;i++){
			this.cos = this.random(this.cardPos);
			var sprite = new cc.Sprite(this.fourLis[i].url);
            sprite.setAnchorPoint(0.5, 0.5);
            this.dealArr.push(sprite);
            this.dragArr.push(sprite);
            sprite.setPosition((this.cos.x+40-490)*fix, this.cos.y-50/fix+80);
            sprite.id = this.fourLis[i].id;
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 2);
            this.index = this.cardPos.indexOf(this.cos);
			this.cardPos.splice(this.index,1);
	    }
	    //对号
	    this.correct = cc.Sprite.create(res.Correct);
        this.dealArr.push(this.correct);
        this.correct.setAnchorPoint(0, 0);
        this.correct.setPosition(150,60);
        this.dragArr[1].addChild(this.correct, 2);
        this.correct.setOpacity(0);

	    	    //移动进入
	    function get(v,x,y) {
	        var action = cc.moveBy(0.4,cc.p(x,y))
	        v.runAction(action)
	     }
	    for(var i=0;i<this.dragArr.length;i++){
			get(this.dragArr[i],490*fix,0);
	    }
        if (common_data[2].obtain == 1){
            this.dragArr[0].initWithFile(res.NormalFlop);
            this.correct.setOpacity(255);
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
					if(target.id == 2){
						sound.rightAudio();
                        //移除所有监听
                        cc.eventManager.removeAllListeners();
                        //给手动返回添加监听
                        var back = this.back.dragArr;
                        var len = back.length;
                        for (var i = 0; i < len; i++) {
                            cc.eventManager.addListener(this.back.listener1.clone(), back[i]);
                        }
						var index = this.dragArr.indexOf(target);
						this.dragArr.splice(index,1);
						if(this.dragArr.length == 1){
							this.ardTurnOver(this.dragArr[0]);
							this.correct.setOpacity(255);
							this.scheduleOnce(function () {
								if (common_data[2].obtain != 1) {
                                    updata.finish_star++;
									this.layerightStar.rightStar(1)
									common_data[2].obtain = 1;
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
							}, 1.6)
						}
					}
					if(target.id == 1){
						sound.wrongAudio();
						this.rotateAction(target);
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
		for (var i = 0; i < len; i++) {
			cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
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
            sprite.setTexture(res.NormalFlop);
        }.bind(this))

        var action = cc.sequence(scale_ease1, cb1, cc.delayTime(0.2), scale_ease2);

        sprite.runAction(action);
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