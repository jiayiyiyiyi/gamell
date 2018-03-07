//每个场景创建一个文件
var Layer2 = cc.Layer.extend({
    ctor: function() {
		this._super();
		
		this.layerightStar= new StarLayer(common_data[0]);
        this.addChild(this.layerightStar, 10, 10);
		//背景

        
        this.dealArr = [];
        this.dragArr = [];
        this.succArr = [];
        this.init();
        this.countArr = [];
		this.newArr = [];
		this.newdragArr = this.dragArr.slice(0);
		this.scheduleOnce(function() {
			this.dragAction();
		},2.5)
    },
    init:function(){
    	//蜜蜂
		this.twoLis = arrsubject[1][0];
		this.normalHoney = cc.Sprite.create(this.twoLis[0].url);
		this.dealArr.push(this.normalHoney);
	    this.normalHoney.setAnchorPoint(0, 0);
	    this.normalHoney.setPosition(this.twoLis[0].sX*fix, this.twoLis[0].sY*fix);
	    this.normalHoney.setScale(0.333*fix);
	    this.addChild(this.normalHoney, 1);
	//蜜蜂组件
	    for(var i =1;i<this.twoLis.length;i++){
	    	var sprite = new cc.Sprite(this.twoLis[i].url);
            sprite.setAnchorPoint(0, 0);
            this.dealArr.push(sprite);
            this.dragArr.push(sprite);
            sprite.setPosition(this.twoLis[i].sX*fix, this.twoLis[i].sY*fix);
            sprite.id = this.twoLis[i].id;
            sprite.setScale(0.333*fix);
            this.addChild(sprite, this.twoLis[i].id);
	    }
	    //介绍组件
		this.succ = arrsubject[1][1];
        for(var i =0;i<this.succ.length;i++){
            var sprite = new cc.Sprite(this.succ[i].url);
            sprite.setAnchorPoint(0, 0);
            this.dealArr.push(sprite);
            this.succArr.push(sprite);
            sprite.setPosition(this.succ[i].sX*fix, this.succ[i].sY*fix);
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 10);
            sprite.setOpacity(0);
        }
	  
	    for(var i =0;i<this.dragArr.length;i++){
	    	this.dragArr[i].setOpacity(0);
	    }
	    this.schedule(function(){
	    	this.cos = this.random(this.dragArr);
		    this.cos.setOpacity(255);
		    this.scheduleOnce(function(){
		    	this.cos.setOpacity(0);
		    },0.2)
			this.index = this.dragArr.indexOf(this.cos);
			this.dragArr.splice(this.index,1);
	    },0.3,4,0)
	//光圈
		this.clickOne = cc.Sprite.create(res.Click);
		this.dealArr.push(this.clickOne);
	    this.clickOne.setAnchorPoint(0.5, 0.5);
	    this.clickOne.setPosition(-254*fix, -298*fix);
	    this.clickOne.id = 10;
	    this.clickOne.setScale(0.5*fix);
	    this.addChild(this.clickOne, 10);
	    
		this.clickTwo = cc.Sprite.create(res.Click);
		this.dealArr.push(this.clickTwo);
	    this.clickTwo.setAnchorPoint(0.5, 0.5);
	    this.clickTwo.setPosition(-472*fix, -222*fix);
	    this.clickTwo.id = 11;
	    this.clickTwo.setScale(0.5*fix);
	    this.addChild(this.clickTwo, 10);
	    
	    this.circle = [this.clickOne,this.clickTwo];
	    for(var i = 0;i<this.circle.length; i++){
            var cirleAction1 = cc.scaleBy(0.8,1.2);
            var cirleAction2 = cc.fadeOut(0.8);
            cirleAction = cc.spawn(cirleAction1,cirleAction2);
            this.circle[i].runAction(cc.sequence(cirleAction,cirleAction.reverse()).repeatForever());
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
                if(target.id == 6){
                    var rect = cc.rect(50, 0, s.width, s.height); //元素范围
                }else{
                    rect = cc.rect(0, 0, s.width, s.height);
				}

				if (cc.rectContainsPoint(rect, locationInNode)) {     // 判断触摸点是否在按钮范围内 
					/*按键声*/
					sound.buttonAudio();
					target.setOpacity(255);
					this.succArr[target.id-2].setOpacity(255);
					sound.stopEff();
                    cc.audioEngine.playEffect(this.succ[target.id-2].sing);
					this.countArr.push(target.id);
					for(var i = 0;i<this.countArr.length;i++){
						if(this.newArr.indexOf(this.countArr[i]) == -1){
							this.newArr.push(this.countArr[i]);
						}
					}
					if(this.newArr.length == 5){
						this.scheduleOnce(function(){
							if (common_data[0].obtain != 1) {
								this.layerightStar.rightStar(1)
								common_data[0].obtain++;
							}
							sound.starAudio();
						},1)
						
						this.clickOne.setPosition(254*fix,298*fix);
						this.clickTwo.setPosition(472*fix,222*fix);
						this.clickAction();
					}
					//返回App
                    this.layerightStar.onTouchBegan();
					/*保存原始坐标*/
					dragX = target.getPosition().x;
					dragY = target.getPosition().y;
					return true;
				}
				return false;
			}.bind(this),
		})
		// 添加监听器到管理器
	  var len = this.newdragArr.length;
		for (var i = 0; i < len; i++) {
			cc.eventManager.addListener(this.listener1.clone(), this.newdragArr[i]);
		}
	},
  	clickAction: function () {
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
					/*按键声*/
					sound.buttonAudio();

					if(target.id == 10){
						sound.stopEff();
						this.stopActionByTag(55);
                        this.unschedule(this.sch);
						var bglayer = cc.director.getRunningScene().getChildByTag(30);
						this.dealArr.forEach(function(v){
							v.runAction(cc.fadeTo(1,150));
							bglayer._children[0].runAction(cc.fadeTo(1,100));
							v.removeFromParent();
						})
						this.scheduleOnce(function(){
							bglayer._children[0].initWithFile(res.BgOne);
							bglayer._children[0].runAction(cc.fadeTo(1,250));
							this.layerightStar.removeFromParent();
							var layer = new Layer3();
							this.addChild(layer, 0, 1);
						},1)
					}
					if(target.id == 11){
                        //移除所有监听
                        cc.eventManager.removeAllListeners();
                        this.circle = [this.clickOne];
                        var len = this.circle.length;
                        for (var i = 0; i < len; i++) {
                            cc.eventManager.addListener(this.listener2.clone(), this.circle[i]);
                        }
						this.succArr[5].setOpacity(255);
						sound.stopEff();
                        sound.ommaAudio();
						this.sch = function () {
                            var bglayer = cc.director.getRunningScene().getChildByTag(30);
                            this.dealArr.forEach(function(v){
                                v.runAction(cc.fadeTo(1,150));
                                bglayer._children[0].runAction(cc.fadeTo(1,100));
                                v.removeFromParent();
                            })
                            this.scheduleOnce(function(){
                                bglayer._children[0].initWithFile(res.Bg);
                                bglayer._children[0].runAction(cc.fadeTo(1,250));
                                this.layerightStar.removeFromParent();
                                var layer = new Layer4();
                                this.addChild(layer, 0, 1);
                            },1)
                        }
						this.scheduleOnce(this.sch,6)
					}
                    //返回App
                    this.layerightStar.onTouchBegan();
					/*保存原始坐标*/
					dragX = target.getPosition().x;
					dragY = target.getPosition().y;
					return true;
				}
				return false;
			}.bind(this),
		})
		// 添加监听器到管理器
		var len = this.circle.length;
		for (var i = 0; i < len; i++) {
			cc.eventManager.addListener(this.listener2.clone(), this.circle[i]);
		}
	},
	random: function (arr) {
		index = Math.floor((Math.random() * arr.length));
		return arr[index];
	}
})