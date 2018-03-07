//每个场景创建一个文件
var Layer3 = cc.Layer.extend({
	ctor: function () {
		this._super();
		this.layer = new StarLayer(common_data[3]);
		this.addChild(this.layer, 10, 10);
		//back
		this.back = new backLayer();
		this.addChild(this.back, 11, 4);
		this.dealThreeArr = [];
		this.init();
		this.count = 0;
        if (common_data[3].obtain != 1){
            this.dragAction();
            sound.butterOneAudio();
        }
	},
	init: function () {
		this.butter = arrsubject[2];
		this.butterEgg = cc.Sprite.create(this.butter[0].url);
		this.dealThreeArr.push(this.butterEgg);
		this.butterEgg.setAnchorPoint(0.5, 0.5);
		this.butterEgg.setPosition(this.butter[0].sX * fix, this.butter[0].sY * fix);
		this.butterEgg.id = this.butter[0].id;
		this.butterEgg.setScale(0.333 * fix);
		this.addChild(this.butterEgg, 9);
		//运动
		var action_1 = cc.scaleBy(1, 0.8);
		var action_2 = action_1.reverse();
		var action = cc.sequence(action_1, cc.delayTime(0.2), action_2);
		action.repeatForever();
		this.butterEgg.runAction(action);

		this.butterLarva = cc.Sprite.create(this.butter[1].url);
		this.dealThreeArr.push(this.butterLarva);
		this.butterLarva.setAnchorPoint(0, 0);
		this.butterLarva.setPosition(this.butter[1].sX * fix, this.butter[1].sY * fix);
		this.butterLarva.id = this.butter[1].id;
		this.butterLarva.setScale(0.333 * fix);
		this.addChild(this.butterLarva, 8);
        this.butterLarva.setOpacity(0);
		//树叶
		this.butterTree = cc.Sprite.create(this.butter[4].url);
		this.dealThreeArr.push(this.butterTree);
		this.butterTree.setAnchorPoint(0, 0);
		this.butterTree.setPosition(this.butter[4].sX * fix, this.butter[4].sY * fix);
		this.butterTree.setScale(0.333 * fix);
		this.addChild(this.butterTree, 1);
		
		this.dragArr = [this.butterEgg, this.butterLarva];
        if (common_data[3].obtain == 1){
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
					this.count ++;
                    //移除所有监听
                    cc.eventManager.removeAllListeners();
                    target.runAction(cc.fadeOut(1,0));
					if(this.count === 1){
                        this.scheduleOnce(function(){
                            target.removeFromParent();
                            this.butterLarva.runAction(cc.fadeIn(1,255));
                        },1)
					}
					if(this.count === 2){
                        this.scheduleOnce(function(){
                            target.initWithFile(res.EggThree);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
					}
                    if(this.count === 3){
                        this.scheduleOnce(function(){
                        	target.setPosition(300*fix,49*fix);
                            target.initWithFile(res.EggFour);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 4){
                        this.scheduleOnce(function(){
                            sound.stopEff();
                            sound.butterThreeAudio();
                            target.setPosition(322*fix,89*fix);
                            target.initWithFile(res.LarveOne);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 5){
                        this.scheduleOnce(function(){
                            target.initWithFile(res.LarveTwo);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 6){
                        this.scheduleOnce(function(){
                            target.initWithFile(res.LarveThree);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 7){
                        this.scheduleOnce(function(){
                            target.initWithFile(res.LarveFour);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 8){
					    sound.stopEff();
					    sound.butterFourAudio();
                        this.scheduleOnce(function(){
                            target.initWithFile(res.LarveFive);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 9){
                        this.scheduleOnce(function(){
                            target.setPosition(300*fix,49*fix);
                            target.initWithFile(res.LarveSix);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 10){
                        this.scheduleOnce(function(){
                            target.initWithFile(res.LarveSeven);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 11){
                        this.scheduleOnce(function(){
                            sound.stopEff();
                            sound.butterFiveAudio();
                            target.initWithFile(res.LarveEight);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 12){
                        this.scheduleOnce(function(){
                            target.initWithFile(res.LarveNine);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }if(this.count === 13){
                        this.scheduleOnce(function(){
                            target.initWithFile(res.ButterFly);
                            target.runAction(cc.fadeIn(1,255));
                        },1)
                    }
                    if(this.count === 14){
                        this.flay(target,res.ButterFlyOne,res.ButterFlyTwo,0.2,0.2);
                        this.scheduleOnce(function () {
                            target.runAction(cc.moveBy(1.5,cc.p(-700*fix,250*fix)));
                        },0.5)
						/*出现飞星*/
                        this.scheduleOnce(function () {
                            if (common_data[3].obtain != 1) {
                                updata.finish_star++;
                                this.layer.rightStar(1)
                                common_data[3].obtain = 1;
                                common_data[0].obtain++;
                                sound.starAudio();
                                var bglayer = cc.director.getRunningScene().getChildByTag(30);
                                this.scheduleOnce(function(){
                                    this.dealThreeArr.forEach(function(v){
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
                    //添加监听
                    this.scheduleOnce(function () {
                        cc.eventManager.addListener(this.listener1.clone(), this.butterLarva)
                    },2.3)
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