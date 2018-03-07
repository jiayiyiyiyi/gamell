//每个场景创建一个文件
var Layer1 = cc.Layer.extend({
	ctor: function () {
		this._super();
		//back
		this.dealArr = [];
		this.layer = new StarLayer(common_data[1]);
		this.addChild(this.layer, 10, 10);
		this.back = new backLayer();
        this.addChild(this.back, 11, 4);

		this.init();
        if (common_data[1].obtain != 1){
            this.dragAction();
            sound.dragOneAudio();
		}
	},
	init: function () {
		this.drag = arrsubject[0];
		this.dragOne = cc.Sprite.create(this.drag[0].url);
		this.dealArr.push(this.dragOne);
		this.dragOne.setAnchorPoint(0, 0);
		this.dragOne.setPosition(this.drag[0].sX + 332 * fix, this.drag[0].sY);
		this.dragOne.id = this.drag[0].id;
		this.dragOne.setScale(0.333 * fix);
		this.addChild(this.dragOne, 1);
		//运动
		var action_1 = cc.scaleBy(1, 0.8);
		var action_2 = action_1.reverse();
		var action = cc.sequence(action_1, cc.delayTime(0.2), action_2);
		action.repeatForever();
		this.dragOne.runAction(action);

		this.dragTwo = cc.Sprite.create(this.drag[1].url);
		this.dealArr.push(this.dragTwo);
		this.dragTwo.setAnchorPoint(0, 0);
		this.dragTwo.setPosition(this.drag[1].sX * fix, this.drag[1].sY);
		this.dragTwo.id = this.drag[1].id;
		this.dragTwo.setScale(0.333 * fix);
		this.addChild(this.dragTwo, 1);

		this.dragThree = cc.Sprite.create(this.drag[2].url);
		this.dealArr.push(this.dragThree);
		this.dragThree.setAnchorPoint(0, 0);
		this.dragThree.setPosition(this.drag[2].sX * fix, this.drag[2].sY);
		this.dragThree.id = this.drag[2].id;
		this.dragThree.setScale(0.333 * fix);
		this.addChild(this.dragThree, 1);

		this.dragFour = cc.Sprite.create(this.drag[3].url);
		this.dealArr.push(this.dragFour);
		this.dragFour.setAnchorPoint(0, 0);
		this.dragFour.setPosition(this.drag[3].sX * fix, this.drag[3].sY);
		this.dragFour.id = this.drag[3].id;
		this.dragFour.setScale(0.2 * fix);
		this.addChild(this.dragFour, 1);

		this.dragArr = [this.dragOne, this.dragTwo, this.dragThree, this.dragFour];
		//初始隐藏
		for (var i = 1; i < this.dragArr.length; i++) {
			this.dragArr[i].setOpacity(0);
		}
        if (common_data[1].obtain == 1){
            for(var i = 0;i<this.dragArr.length;i++){
                this.dragArr[i].removeFromParent();
            }
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
					if (target.id === 1) {
						sound.stopEff();
                        //移除所有监听
                        cc.eventManager.removeAllListeners();
						target.runAction(cc.fadeOut(1.5,0));
						sound.dragThreeAudio();
						this.dragTwo.runAction(cc.fadeIn(1.5,255));
						this.scheduleOnce(function () {
                            cc.eventManager.addListener(this.listener1.clone(), this.dragTwo);
                        },1.5)
					}
					if (target.id === 2) {
						sound.stopEff()
                        //移除所有监听
                        cc.eventManager.removeAllListeners();
						target.runAction(cc.fadeOut(1.5,0));
						sound.dragFourAudio()
						this.dragThree.runAction(cc.fadeIn(1.5,255));
                        this.scheduleOnce(function () {
                            cc.eventManager.addListener(this.listener1.clone(), this.dragThree);
                        },1.5)
					}
					if (target.id === 3) {
						sound.stopEff();
                        //移除所有监听
                        cc.eventManager.removeAllListeners();
						target.runAction(cc.fadeOut(1.5,0));
						sound.dragFiveAudio();
						this.dragFour.runAction(cc.fadeIn(1.5,255));
                        this.scheduleOnce(function () {
                            cc.eventManager.addListener(this.listener1.clone(), this.dragFour);
                        },1.5)
					}
					if (target.id === 4) {
                        //移除所有监听
                        cc.eventManager.removeAllListeners();
						this.flay(target,res.DragFour,res.DragFourFlay,0.2,0.2);
						this.scheduleOnce(function () {
                            target.runAction(cc.moveBy(1.8,cc.p(-400*fix,250*fix)));
                        },0.5)
						/*出现飞星*/
						this.scheduleOnce(function () {
							if (common_data[1].obtain != 1) {
                                updata.finish_star++;
								this.layer.rightStar(1)
								common_data[1].obtain = 1;
								common_data[0].obtain++;
								sound.starAudio();
								var bglayer = cc.director.getRunningScene().getChildByTag(30);
								this.scheduleOnce(function(){
									sound.stopEff();
								   this.dealArr.forEach(function(v){
										v.runAction(cc.fadeTo(1,100));
										bglayer._children[0].runAction(cc.fadeTo(1,100));
										v.removeFromParent();
									})
								},4)
								this.scheduleOnce(function(){
									bglayer._children[0].initWithFile(res.bright);
									bglayer._children[0].runAction(cc.fadeTo(1,250));
								   this.layer.removeFromParent();
								   var layer3 = new Layer23();
								   this.addChild(layer3, 3, 3);
								},5)
							}
						}, 1)
					}
                    //给手动返回添加监听
                    var back = this.back.dragArr;
                    var len = back.length;
                    for (var i = 0; i < len; i++) {
                        cc.eventManager.addListener(this.back.listener1.clone(), back[i]);
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
})