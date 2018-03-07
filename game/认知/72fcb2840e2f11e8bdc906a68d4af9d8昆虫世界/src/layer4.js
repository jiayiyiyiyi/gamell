//每个场景创建一个文件
var Layer4 = cc.Layer.extend({
	ctor: function () {
		this._super();
		this.layer = new StarLayer(common_data[4]);
		this.addChild(this.layer, 10, 10);
		//back
		this.back = new backLayer();
		this.addChild(this.back, 11, 4);
		this.dealFourArr = [];
		this.init();
		this.num = 0;
		this.sum = 0;
		this.eatSum = 0;
		this.count = 0;
        if (common_data[4].obtain != 1){
            this.dragAction();
            this.hintAction();
            this.scheduleUpdate();
		}
	},
	init: function () {
		this.honey = arrsubject[3];
		//树
		this.honeyTree = cc.Sprite.create(this.honey[12].url);
		this.dealFourArr.push(this.honeyTree);
		this.honeyTree.setAnchorPoint(0, 0);
		this.honeyTree.setPosition(this.honey[12].sX * fix, this.honey[12].sY * fix);
		this.honeyTree.setScale(0.333 * fix);
		this.addChild(this.honeyTree, 1);
		//云
		this.cloudOne = cc.Sprite.create(this.honey[9].url);
		this.dealFourArr.push(this.cloudOne);
		this.cloudOne.setAnchorPoint(0, 0);
		this.cloudOne.setPosition(this.honey[9].sX, this.honey[9].sY);
		this.cloudOne.setScale(0.333 * fix);
		this.addChild(this.cloudOne, 0);

		this.cloudTwo = cc.Sprite.create(this.honey[10].url);
		this.dealFourArr.push(this.cloudTwo);
		this.cloudTwo.setAnchorPoint(0, 0);
		this.cloudTwo.setPosition(this.honey[10].sX, this.honey[10].sY);
		this.cloudTwo.setScale(0.333 * fix);
		this.addChild(this.cloudTwo, 0);

		this.cloudThree = cc.Sprite.create(this.honey[11].url);
		this.dealFourArr.push(this.cloudThree);
		this.cloudThree.setAnchorPoint(0, 0);
		this.cloudThree.setPosition(this.honey[11].sX * fix, this.honey[11].sY);
		this.cloudThree.setScale(0.333 * fix);
		this.addChild(this.cloudThree, 0);
		//运动
		this.actions(200, 0, this.cloudOne);
		this.actions(200, 0, this.cloudTwo);
		this.actions(130, 0, this.cloudThree);
		//蜂巢
		this.honeyHive = cc.Sprite.create(this.honey[3].url);
		this.dealFourArr.push(this.honeyHive);
		this.honeyHive.setAnchorPoint(0, 0);
		this.honeyHive.setPosition(this.honey[3].sX * fix, this.honey[3].sY * fix);
		this.honeyHive.id = this.honey[3].id;
		this.honeyHive.setScale(0.333 * fix);
		this.addChild(this.honeyHive, 2);
		//蜂眼
		this.LayerOne = cc.Sprite.create(this.honey[8].url);
		this.dealFourArr.push(this.LayerOne);
		this.LayerOne.setAnchorPoint(0, 0);
		this.LayerOne.setPosition(this.honey[8].sX * fix, this.honey[8].sY * fix);
		this.LayerOne.setScale(0.333 * fix);
		this.addChild(this.LayerOne, 3);

		this.LayerTwo = cc.Sprite.create(this.honey[8].url);
		this.dealFourArr.push(this.LayerTwo);
		this.LayerTwo.setAnchorPoint(0, 0);
		this.LayerTwo.setPosition(this.honey[8].nX * fix, this.honey[8].nY * fix);
		this.LayerTwo.setScale(0.333 * fix);
		this.addChild(this.LayerTwo, 3);

		this.LayerThree = cc.Sprite.create(this.honey[8].url);
		this.dealFourArr.push(this.LayerThree);
		this.LayerThree.setAnchorPoint(0, 0);
		this.LayerThree.setPosition(this.honey[8].oX * fix, this.honey[8].oY * fix);
		this.LayerThree.setScale(0.333 * fix);
		this.addChild(this.LayerThree, 3);

		this.honeyLayerOne = cc.Sprite.create(this.honey[8].url);
		this.dealFourArr.push(this.honeyLayerOne);
		this.honeyLayerOne.setAnchorPoint(0, 0);
		this.honeyLayerOne.setPosition(this.honey[8].sX * fix, this.honey[8].sY * fix);
		this.honeyLayerOne.setScale(0.333 * fix);
		this.addChild(this.honeyLayerOne, 4);

		this.honeyLayerTwo = cc.Sprite.create(this.honey[8].url);
		this.dealFourArr.push(this.honeyLayerTwo);
		this.honeyLayerTwo.setAnchorPoint(0, 0);
		this.honeyLayerTwo.setPosition(this.honey[8].nX * fix, this.honey[8].nY * fix);
		this.honeyLayerTwo.setScale(0.333 * fix);
		this.addChild(this.honeyLayerTwo, 4);

		this.honeyLayerThree = cc.Sprite.create(this.honey[8].url);
		this.dealFourArr.push(this.honeyLayerThree);
		this.honeyLayerThree.setAnchorPoint(0, 0);
		this.honeyLayerThree.setPosition(this.honey[8].oX * fix, this.honey[8].oY * fix);
		this.honeyLayerThree.setScale(0.333 * fix);
		this.addChild(this.honeyLayerThree, 4);
		//花丛
		this.flower = cc.Sprite.create(this.honey[13].url);
		this.dealFourArr.push(this.flower);
		this.flower.setAnchorPoint(0, 0);
		this.flower.setPosition(this.honey[13].sX * fix, this.honey[13].sY * fix);
		this.flower.setScale(0.333 * fix);
		this.addChild(this.flower, 1);
		//花
		this.flowerOne = cc.Sprite.create(this.honey[0].url);
		this.dealFourArr.push(this.flowerOne);
		this.flowerOne.setAnchorPoint(0, 0);
		this.flowerOne.setPosition(this.honey[0].sX * fix, this.honey[0].sY * fix);
		this.flowerOne.id = this.honey[0].id;
		this.flowerOne.name = "flower";
		this.flowerOne.setScale(0.333 * fix);
		this.addChild(this.flowerOne, 3);

		this.flowerTwo = cc.Sprite.create(this.honey[1].url);
		this.dealFourArr.push(this.flowerTwo);
		this.flowerTwo.setAnchorPoint(0, 0);
		this.flowerTwo.setPosition(this.honey[1].sX * fix, this.honey[1].sY * fix);
		this.flowerTwo.id = this.honey[1].id;
        this.flowerTwo.name = "flower";
		this.flowerTwo.setScale(0.333 * fix);
		this.addChild(this.flowerTwo, 3);

		this.flowerThree = cc.Sprite.create(this.honey[2].url);
		this.dealFourArr.push(this.flowerThree);
		this.flowerThree.setAnchorPoint(0, 0);
		this.flowerThree.setPosition(this.honey[2].sX * fix, this.honey[2].sY * fix);
		this.flowerThree.id = this.honey[2].id;
        this.flowerThree.name = "flower";
		this.flowerThree.setScale(0.333 * fix);
		this.addChild(this.flowerThree, 3);
		//采花蜜蜂
		this.honeybee = cc.Sprite.create(this.honey[4].url);
		this.dealFourArr.push(this.honeybee);
		this.honeybee.setAnchorPoint(0.5, 0.5);
		this.honeybee.setPosition(this.honey[4].sX * fix, this.honey[4].sY * fix);
		this.honeybee.id = this.honey[4].id;
        this.honeybee.name = "honey";
		this.honeybee.setScale(0.333 * fix);
		this.addChild(this.honeybee, 4);
		//蜂袋
		this.honeyOne = cc.Sprite.create(this.honey[5].url);
		this.dealFourArr.push(this.honeyOne);
		this.honeyOne.setAnchorPoint(0, 0);
		this.honeyOne.setPosition(this.honey[5].sX, this.honey[5].sY);
		this.honeybee.addChild(this.honeyOne, 4);

		//蜜蜂飞
		this.flay(this.honeybee, this.honey[4].url, this.honey[4].error, 0.2, 0.2);

		this.dragArr = [this.flowerOne, this.flowerTwo, this.flowerThree];
		this.honeyArr = [this.honeybee];
		this.hiveArr = [this.honeyHive];
		this.lastArr = [this.flowerOne, this.flowerTwo, this.flowerThree];
		this.layerArr = [{ name: this.honeyLayerOne, x: 224, y: 271 }, { name: this.honeyLayerTwo, x: 224, y: 238 }, { name: this.honeyLayerThree, x: 248, y: 257 }];
        if (common_data[4].obtain === 1){
            for(var i = 0;i<this.layerArr.length;i++){
                this.layerArr[i].name.initWithFile(this.honey[8].errorTwo);
            }
            this.lastAction();
        }
	},
	hintAction : function(){
    //手提示
    //花
    this.handOne = cc.Sprite.create(res.Hand);
    this.dealFourArr.push(this.handOne);
    this.handOne.setAnchorPoint(0, 0);
    this.handOne.setPosition(621*fix,34*fix);
    this.handOne.setScale(0.333*fix);
    this.addChild(this.handOne, 6);
    this.flay(this.handOne,res.HandClick,res.Hand,0.3,0.3);
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
					this.handOne.setOpacity(0);
					/*按键声*/
					sound.buttonAudio();
					if(this.num === 0){
                        this.honeybee.stopAllActions();
                        this.flay(this.honeybee, this.honey[4].url, this.honey[4].error, 0.2, 0.2);
                        this.scheduleOnce(function () {
                            this.honeyOne.setPosition(73, 50);
                        }, 0.2)
                        if (target.id === 1) {
                            this.handOne.setOpacity(0);
                            var self = this;
                            var handAction = function() {
                                self.handOne.runAction(cc.moveTo(0.0001, cc.p(270 * fix, 45 * fix)));
                                self.scheduleOnce(function(){
                                    self.handOne.setOpacity(255);
                                },0.1)
                            }
                            var action = cc.moveTo(2, cc.p(300 * fix, 85 * fix));
                            var foodAction = function(){
                                self.honeyAction();
                            }
                            this.honeybee.runAction(cc.sequence(action,cc.callFunc(handAction),cc.callFunc(foodAction)));

                        }
                        if (target.id === 2) {
                            this.handOne.setOpacity(0);
                            var self = this;
                            var handAction = function() {
                                self.handOne.runAction(cc.moveTo(0.0001, cc.p(362 * fix, 51 * fix)));
                                self.scheduleOnce(function(){
                                    self.handOne.setOpacity(255);
                                },0.1)
                            }
                            var action = cc.moveTo(2, cc.p(392 * fix, 91 * fix));
                            this.honeybee.runAction(cc.sequence(action,cc.callFunc(handAction)));
                        }
                        if (target.id === 3) {
                            this.handOne.setOpacity(0);
                            var self = this;
                            var handAction = function() {
                                self.handOne.runAction(cc.moveTo(0.0001, cc.p(531 * fix, 84 * fix)));
                                self.scheduleOnce(function(){
                                    self.handOne.setOpacity(255);
                                },0.1)
                            }
                            var action = cc.moveTo(2, cc.p(551 * fix, 124 * fix));
                            this.honeybee.runAction(cc.sequence(action,cc.callFunc(handAction)));
                        }
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
	update:function(){
        var targetArr = this._children.filter(function (v) {
			return v.name === "flower";
        });
        for (var i=0;i<targetArr.length;i++) {
        	var rectObj = targetArr[i].getBoundingBox();
        	var mifengObj = this.honeybee.getBoundingBox();
        	var status = cc.rectIntersectsRect(cc.rect(rectObj.x, rectObj.y , rectObj.width, rectObj.height), cc.rect(mifengObj.x, mifengObj.y , mifengObj.width, mifengObj.height))
			if(status) {
                this.honeyAction();
			}
		}
	},
	honeyAction: function () {
		this.eatSum = 0;
		this.sum = 0;
		/*设置 初始坐标 */
		var dragX, dragY;
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
                    updata.finish_steps++;
					/*按键声*/
					//sound.buttonAudio();
					this.handOne.setOpacity(0);
					if(this.honeybee.y<170*fix){
						if(target.id === 5){
							this.num ++;
							if(this.num === 1){
								this.honeyOne.initWithFile(this.honey[5].errorOne);
								sound.gatherHoneyAudio();
							}
							if(this.num === 2){
								this.honeyOne.initWithFile(this.honey[5].errorTwo);
                                sound.gatherHoneyAudio();
							}
							if(this.num === 3){
								this.honeyOne.initWithFile(this.honey[5].errorThree);
								this.hiveAction();
								sound.gatherHoneyAudio();
								this.handOne.runAction(cc.moveTo(0.0001,cc.p(220*fix,220*fix)));
                                this.scheduleOnce(function(){
                                    this.handOne.setOpacity(255);
                                },0.1)
							}
							if(this.num>3){
								sound.stopEff();
								this.num = 3;
                                this.handOne.runAction(cc.moveTo(0.0001,cc.p(220*fix,220*fix)));
                                this.scheduleOnce(function(){
                                    this.handOne.setOpacity(255);
                                },0.1)
							}
						}
					}
	                
	                if(this.honeybee.y>240*fix){
						if(target.id === 5){
                            /*移除监听事件*/
                            cc.eventManager.removeListener(this.listener1);
							this.num --;
							this.sum ++;
							if(this.num === 2){
								this.honeyOne.initWithFile(this.honey[5].errorTwo);
								this.cos.name.initWithFile(this.honey[8].error);
                                sound.gatherHoneyAudio();
							}
							if(this.num === 1){
								this.honeyOne.initWithFile(this.honey[5].errorOne);
								this.cos.name.initWithFile(this.honey[8].errorOne);
                                sound.gatherHoneyAudio();
							}
							if(this.num <= 0){
								this.honeyOne.initWithFile(this.honey[5].url);
								this.cos.name.initWithFile(this.honey[8].errorTwo);
								this.num = 0;
							}
							if(this.sum === 3){
								this.layerArr.splice(this.index,1);
								sound.gatherHoneyAudio();
							}
						}
	                }
	                if(this.layerArr.length === 3){
                        if(this.honeybee.y<170*fix) {
                            if (this.num === 1) {
                                sound.honeyeeAudio();
                            }
                        }
					}
	                if(this.layerArr.length <3){
	                	this.handOne.removeFromParent();
	                }
					if (this.layerArr.length === 0) {
						//移除所有监听
                        cc.eventManager.removeAllListeners();
                        //给手动返回添加监听
						var back = this.back.dragArr;
                        var len = back.length;
                        for (var i = 0; i < len; i++) {
                            cc.eventManager.addListener(this.back.listener1.clone(), back[i]);
                        }
						/*出现飞星*/
						this.scheduleOnce(function () {
							if (common_data[4].obtain != 1) {
                                updata.finish_star++;
								this.layer.rightStar(1)
								common_data[4].obtain = 1;
								common_data[0].obtain++;
								sound.starAudio();
								var bglayer = cc.director.getRunningScene().getChildByTag(30);
								this.scheduleOnce(function(){
						               this.dealFourArr.forEach(function(v){
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
					/*保存原始坐标*/
					dragX = target.getPosition().x;
					dragY = target.getPosition().y;
					return true;
				}
				return false;
			}.bind(this),
		})
		// 添加监听器到管理器
		var len = this.honeyArr.length;
		for (var i = 0; i < len; i++) {
			cc.eventManager.addListener(this.listener2.clone(), this.honeyArr[i]);
		}
	},
	hiveAction: function () {
		this.count = 0;
		/*设置 初始坐标 */
		var dragX, dragY;
		// 创建一个事件监听器 OneByOne 为单点触摸
		this.listener3 = cc.EventListener.create({
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
					this.count ++;
					this.handOne.setOpacity(0);
					if (target.id === 4 && this.num === 3 && this.count === 1) {
						this.honeybee.stopAllActions();
						this.flay(this.honeybee, this.honey[6].url, this.honey[6].error, 0.2, 0.2);
						this.scheduleOnce(function () {
							this.honeyOne.setPosition(123, 50);
						}, 0.2)
						this.scheduleOnce(function () {
							this.cos = this.random(this.layerArr);
							this.index = this.layerArr.indexOf(this.cos);
                            var self = this;
                            var handAction = function() {
                                self.handOne.runAction(cc.moveTo(0.0001, cc.p((self.cos.x + 50) * fix, (self.cos.y - 20) * fix)));
                                self.scheduleOnce(function(){
                                    self.handOne.setOpacity(255);
                                },0.1)
                            }
                            var action = cc.moveTo(2, cc.p((this.cos.x + 90) * fix, (this.cos.y + 20) * fix));
                            this.honeybee.runAction(cc.sequence(action,cc.callFunc(handAction)));
						}, 0.2)
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
		var len = this.hiveArr.length;
		for (var i = 0; i < len; i++) {
			cc.eventManager.addListener(this.listener3.clone(), this.hiveArr[i]);
		}
	},
	actions: function (v, p, m) {
		var action_1 = cc.moveBy(15, cc.p(v * fix, p * fix));
		var action_2 = action_1.reverse();
		var action = cc.sequence(action_1, cc.delayTime(0.1), action_2);
		action.repeatForever();
		m.runAction(action);
	},
	flay: function (spr, one, two, time1, time2) {
		var cb1 = cc.callFunc(function () {
			spr.setTexture(one);
		})
		var cb2 = cc.callFunc(function () {
			spr.setTexture(two);
		})
		var actions = cc.sequence(cc.delayTime(time1), cb1, cc.delayTime(time2), cb2);
		actions.repeatForever();
		spr.runAction(actions);
	},
	random: function (arr) {
		index = Math.floor((Math.random() * arr.length));
		return arr[index];
	},
    lastAction: function () {
        /*设置 初始坐标 */
        var dragX, dragY;
        // 创建一个事件监听器 OneByOne 为单点触摸
        this.listener10 = cc.EventListener.create({
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
                if (cc.rectContainsPoint(rect, locationInNode)) {     // 判断触摸点是否在按钮范围
                    /*按键声*/
                    sound.buttonAudio();
                        if (target.id === 1) {
                            var action = cc.moveTo(2, cc.p(300 * fix, 85 * fix));
                            this.honeybee.runAction(action);
                        }
                        if (target.id === 2) {
                            var action = cc.moveTo(2, cc.p(392 * fix, 91 * fix));
                            this.honeybee.runAction(action);
                        }
                        if (target.id === 3) {
                            var action = cc.moveTo(2, cc.p(551 * fix, 124 * fix));
                            this.honeybee.runAction(action);
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
        var len = this.lastArr.length;
        for (var i = 0; i < len; i++) {
            cc.eventManager.addListener(this.listener10.clone(), this.lastArr[i]);
        }
    }

})