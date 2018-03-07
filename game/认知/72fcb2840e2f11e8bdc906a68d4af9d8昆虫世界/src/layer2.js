var Layer2 = cc.Layer.extend({
	ctor: function () {
		this._super();
		this.layer = new StarLayer(common_data[2]);
		this.addChild(this.layer, 10, 10);
		//back
		var back = new backLayer();
		this.addChild(back, 11, 4);

		this.dealTwoArr = [];
		this.init();
		this.num = 0;
		this.countArr = [];
        this.newArr = [];
        if (common_data[2].obtain != 1){
            this.dragAction();
		}
        this.hintAction();
	},
	init: function () {
		//遮罩层
		var size = cc.director.getWinSize();
		this.model = cc.Sprite.create(res.Black);
		this.model.setPosition(size.width / 2, size.height / 2);
		this.model.setScale(size.height / this.model.height); //全屏显示
		this.addChild(this.model, 1);

		this.fire = arrsubject[1];
		this.fireOne = cc.Sprite.create(this.fire[0].url);
		this.dealTwoArr.push(this.fireOne);
		this.fireOne.setAnchorPoint(0, 0);
		this.fireOne.setPosition(this.fire[0].sX * fix + 250 * fix - 250, this.fire[0].sY + 30 / fix - 30);
		this.fireOne.id = this.fire[0].id;
		this.fireOne.setScale(0.333 * fix);
		this.addChild(this.fireOne, 1);

		this.fireTwo = cc.Sprite.create(this.fire[1].url);
		this.dealTwoArr.push(this.fireTwo);
		this.fireTwo.setAnchorPoint(0, 0);
		this.fireTwo.setPosition(this.fire[1].sX * fix + 220 * fix - 220, this.fire[1].sY + 30 / fix - 30);
		this.fireTwo.id = this.fire[1].id;
		this.fireTwo.setScale(0.333 * fix);
		this.addChild(this.fireTwo, 1);

		this.fireThree = cc.Sprite.create(this.fire[2].url);
		this.dealTwoArr.push(this.fireThree);
		this.fireThree.setAnchorPoint(0, 0);
		this.fireThree.setPosition(this.fire[2].sX * fix + 100 * fix - 100, this.fire[2].sY + 30 / fix - 30);
		this.fireThree.id = this.fire[2].id;
		this.fireThree.setScale(0.333 * fix);
		this.addChild(this.fireThree, 1);

		this.fireFour = cc.Sprite.create(this.fire[3].url);
		this.dealTwoArr.push(this.fireFour);
		this.fireFour.setAnchorPoint(0, 0);
		this.fireFour.setPosition(this.fire[3].sX * fix + 100 * fix - 100, this.fire[3].sY + 30 / fix - 30);
		this.fireFour.id = this.fire[3].id;
		this.fireFour.setScale(0.333 * fix);
		this.addChild(this.fireFour, 1);

		this.fireFive = cc.Sprite.create(this.fire[4].url);
		this.dealTwoArr.push(this.fireFive);
		this.fireFive.setAnchorPoint(0, 0);
		this.fireFive.setPosition(this.fire[4].sX * fix, this.fire[4].sY);
		this.fireFive.id = this.fire[4].id;
		this.fireFive.setScale(0.333 * fix);
		this.addChild(this.fireFive, 1);

		this.fireSix = cc.Sprite.create(this.fire[5].url);
		this.dealTwoArr.push(this.fireSix);
		this.fireSix.setAnchorPoint(0, 0);
		this.fireSix.setPosition(this.fire[5].sX * fix, this.fire[5].sY);
		this.fireSix.id = this.fire[5].id;
		this.fireSix.setScale(0.333 * fix);
		this.addChild(this.fireSix, 1);

		this.fireSeven = cc.Sprite.create(this.fire[6].url);
		this.dealTwoArr.push(this.fireSeven);
		this.fireSeven.setAnchorPoint(0, 0);
		this.fireSeven.setPosition(this.fire[6].sX * fix, this.fire[6].sY);
		this.fireSeven.id = this.fire[6].id;
		this.fireSeven.setScale(0.333 * fix);
		this.addChild(this.fireSeven, 1);

		this.fireEight = cc.Sprite.create(this.fire[7].url);
		this.dealTwoArr.push(this.fireEight);
		this.fireEight.setAnchorPoint(0, 0);
		this.fireEight.setPosition(this.fire[7].sX * fix, this.fire[7].sY);
		this.fireEight.id = this.fire[7].id;
		this.fireEight.setScale(0.333 * fix);
		this.addChild(this.fireEight, 1);

		this.fireNine = cc.Sprite.create(this.fire[8].url);
		this.dealTwoArr.push(this.fireNine);
		this.fireNine.setAnchorPoint(0, 0);
		this.fireNine.setPosition(this.fire[8].sX * fix, this.fire[8].sY);
		this.fireNine.id = this.fire[8].id;
		this.fireNine.setScale(0.333 * fix);
		this.addChild(this.fireNine, 1);

		this.fireTen = cc.Sprite.create(this.fire[9].url);
		this.dealTwoArr.push(this.fireTen);
		this.fireTen.setAnchorPoint(0, 0);
		this.fireTen.setPosition(this.fire[9].sX * fix, this.fire[9].sY);
		this.fireTen.id = this.fire[9].id;
		this.fireTen.setScale(0.333 * fix);
		this.addChild(this.fireTen, 1);

		this.dragArr = [this.fireOne, this.fireTwo, this.fireThree, this.fireFour, this.fireFive, this.fireSix, this.fireSeven, this.fireEight, this.fireNine, this.fireTen];

	},
	hintAction : function(){
		//手提示
		this.handOne = cc.Sprite.create(res.Hand);
		this.dealTwoArr.push(this.handOne);
		this.handOne.setAnchorPoint(0, 0);
		this.handOne.setPosition((this.fire[5].sX+30)*fix, this.fire[5].sY);
		this.handOne.setScale(0.333*fix);
		this.addChild(this.handOne, 6);
		this.flay(this.handOne,res.HandClick,res.Hand,0.3,0.3);
        if (common_data[2].obtain === 1){
            for(var i = 0;i<this.dragArr.length;i++){
                this.dragArr[i].initWithFile(this.fire[this.dragArr[i].id].error);
            }
            this.model.removeFromParent();
            this.handOne.removeFromParent();
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
					this.handOne.setOpacity(0);
					target.initWithFile(this.fire[target.id].error);
					this.countArr.push(target.id);
					for(var i = 0;i<this.countArr.length;i++){
						if(this.newArr.indexOf(this.countArr[i]) == -1){
							this.newArr.push(this.countArr[i]);
							this.num++;
						}
					}
					//随机音乐
					this.adio = [res.Do_audio,res.Fa_audio,res.La_audio,res.Mi_audio,res.Ruai_audio,res.Xi_audio,res.Do_audio,res.Fa_audio,res.La_audio,res.Mi_audio];
					this.cos = this.random(this.adio);
                    this.index = this.adio.indexOf(this.cos);
					if (this.num === 1) {
						sound.fireglowAudio();
						this.model.setOpacity(225);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
					}
					if (this.num === 2) {
						this.model.setOpacity(200);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
					}
					if (this.num === 3) {
						this.model.setOpacity(175);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
					}
					if (this.num === 4) {
						this.model.setOpacity(150);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
					}
					if (this.num === 5) {
						this.model.setOpacity(125);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
					}
					if (this.num === 6) {
						this.model.setOpacity(100);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
					}
					if (this.num === 7) {
						this.model.setOpacity(75);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
					}
					if (this.num === 8) {
						this.model.setOpacity(50);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
					}
					if (this.num === 9) {
						this.model.setOpacity(25);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
					}
					if (this.num === 10) {
						this.model.setOpacity(0);
                        cc.audioEngine.playEffect(this.cos);
                        this.adio.splice(this.index,1);
						/*出现飞星*/
						this.scheduleOnce(function () {
							if (common_data[2].obtain != 1) {
                                updata.finish_star++;
								this.layer.rightStar(1)
								common_data[2].obtain = 1;
								common_data[0].obtain++;
								sound.starAudio();
								var bglayer = cc.director.getRunningScene().getChildByTag(30);
								this.scheduleOnce(function(){
						               this.dealTwoArr.forEach(function(v){
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
    random: function (arr) {
        index = Math.floor((Math.random() * arr.length));
        return arr[index];
    }
})