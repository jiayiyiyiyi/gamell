var Layer23 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.dragArr = [];
        this.leveArr = [];
        this.flag = false;
        this.delArr = [];
        this.oneOff = true;
        this.twoOff = true;
        this.threeOff = true;
        this.fourOff = true;
        
        this.layerightStar= new StarLayer(common_data[0]);
        this.addChild(this.layerightStar, 10, 10);

        if(common_data[0].obtain == 4){
            this.scheduleOnce(function(){
                this.layerightStar.gameEnd(4);
                sound.winAudio();
            },0.6)
        }
        var size = cc.director.getWinSize();
        var sprArr = data.LoneScene;
        var len = sprArr.length;
        for (var i = 0; i < len; i++) {
            var sprite = new cc.Sprite(sprArr[i].url);
            sprite.setAnchorPoint(0.5, 0.5);
            this.delArr.push(sprite);
            this.leveArr.push(sprite);
            sprite.name = sprArr[i].name;
            sprite.setPosition(sprArr[i].sx*fix, sprArr[i].sy*fix);
            sprite.setScale(1 / 3 * fix);
            this.addChild(sprite, sprArr[i].indent);
        }
        //遮罩
        var clip = new cc.Sprite(res.modal);
        this.delArr.push(clip);
        clip.setScale(0.5 * fix);
        clip.setAnchorPoint(0.5, 0.5);
        this.lableSp = new cc.ClippingNode(clip);
        this.delArr.push(this.lableSp);
        this.lableSp.setInverted(true);
        this.lableSp.setAnchorPoint(0, 0);
        this.lableSp.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.dragArr.push(this.lableSp);

        this.addChild(this.lableSp, 2);

        var lable = new cc.Sprite(res.Black);
		this.delArr.push(lable);
        this.lableSp.addChild(lable);

        //跟随移动
        this.follow = new cc.Sprite(res.aperture);
        this.delArr.push(this.follow);
        this.follow.setScale(0.5* fix);
        this.follow.setAnchorPoint(0.5, 0.5);
        this.follow.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(this.follow, 3);


        this.dragAction();
    },
    dragAction: function () {
        //创建一个事件监听器 OneByOne 为单点触摸
        this.listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,      // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
            onTouchBegan: function (touch, event) {       //实现 onTouchBegan 事件处理回调函数
          
                var target = event.getCurrentTarget();
                // 获取事件所绑定的 target, 通常是cc.Node及其子类
                // 获取当前触摸点相对于按钮所在的坐标
                this.flag = false;
                this.unschedule(this.scaleOn);
                var locationInNode = target.convertToNodeSpace(touch.getLocation());  //转换为本地坐标系的坐标
                var s = target.getContentSize();   //获取 touch 元素的数据(宽高
                var rect = target._rect
                //if (cc.rectContainsPoint(rect, locationInNode)) {     // 判断触摸点是否在按钮范围内
                return true;
                // sound.buttonAudio();
                // }
                
            }.bind(this),
            onTouchMoved: function (touch, event) {            //实现onTouchMoved事件处理回调函数, 触摸移动时触发
                var size = cc.director.getWinSize();
                // 移动当前按钮精灵的坐标位置
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();           //获取事件数据: delta
                /*设置层级*/
                target.setLocalZOrder(2);

			
                /*判断边界*/
                var moveX = target.x += delta.x;
                var moveY = target.y += delta.y;
               
                this.follow.setPosition(moveX, moveY);
                var wid = target.getBoundingBox().width;
                var heg = target.getBoundingBox().height;
                if (moveX + wid > size.width) {
                    target.x = size.width - wid;

                }
                if (moveY + heg > size.height) {
                    target.y = size.height - heg;

                }
                if (target.x < 0) {
                    target.x = 0
                }
                if (target.y < 0) {
                    target.y = 0
                }
            }.bind(this),
            onTouchEnded: function (touch, event) {            // 实现onTouchEnded事件处理回调函数
                var target = event.getCurrentTarget();

                var targetObj = target.getBoundingBox();
                var len = this.leveArr.length;
                var _this = this;
                for (var i = 0; i < len; i++) {
                    var leveObj = this.leveArr[i].getBoundingBox();
                    var status1 = cc.rectIntersectsRect(cc.rect(leveObj.x, leveObj.y, leveObj.width, leveObj.height), cc.rect(targetObj.x, targetObj.y, targetObj.width, targetObj.height))

                    if (status1 && Math.abs(this.follow.x-target.x) < 5 && Math.abs(this.follow.y-target.y) < 5 ) {
                        var action = cc.moveTo(0.5,cc.p(this.leveArr[i].x, this.leveArr[i].y))
                        this.lableSp.runAction(action.clone());
                        this.follow.runAction(action.clone());
                        var currentObj = _this.leveArr[i]
                        this.currentObj = currentObj;
                        if(currentObj.name == "butter"){
                            sound.butterAudio();
                        }
                        if(currentObj.name == "dragon"){
                            sound.dragAudio();
                        }
                        if(currentObj.name == "firglow"){
                            sound.fireAudio();
                        }
                        if(currentObj.name == "honeybee"){
                            sound.honeyAudio();
                        }
                        this.scaleOn = function() {
                            currentObj.setScale(0.4)
                            this.scheduleOnce(function () {
                                currentObj.setScale(0.33)
                            }, 0.5)
                        }
                        this.schedule(this.scaleOn, 1, 2, 0)
                        this.flagOn = function () {
                            this.flag = true;
                        }
                        this.scheduleOnce(this.flagOn, 3)
                       this.scheduleUpdate();
                    }
                }
                //返回App
                this.layerightStar.onTouchBegan();

            }.bind(this),

        });
        // 添加监听器到管理器

        var len = this.dragArr.length;
        for (var i = 0; i < len; i++) {
            cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
        }
    },
    update: function() {
        this.unschedule(this.tike);
        this.tike = this.scheduleOnce(function () {
            if (this.flag && (this.oneOff || this.oneOff || this.twoOff || this.threeOff || this.fourOff)) {
                this.flag = false;
                this.layerightStar.removeFromParent();
                //进入指定游戏界面
                //cc.removeAllEventListeners();

                if (this.currentObj.name == "butter" && this.oneOff) {
                    this.oneOff = false;
                    var bglayer = cc.director.getRunningScene().getChildByTag(30);
                    this.delArr.forEach(function (v) {
                        v.runAction(cc.fadeTo(1, 100));
                        bglayer._children[0].runAction(cc.fadeTo(1, 100));
                        v.removeFromParent();

                    })
                    this.scheduleOnce(function () {

                        bglayer._children[0].initWithFile(res.ButterBg);
                        bglayer._children[0].runAction(cc.fadeTo(1, 255));
                        this.layerightStar.removeFromParent();
                        var layer1 = new Layer3();
                        this.addChild(layer1, 0, 1);
                    }, 1)
                    this.scheduleOnce(function () {
                        this.oneOff = true;
                    }, 4)

                }
                if (this.currentObj.name == "dragon" && this.twoOff) {
                    this.twoOff = false;
                    var bglayer = cc.director.getRunningScene().getChildByTag(30);
                    this.delArr.forEach(function (v) {
                        v.runAction(cc.fadeTo(1, 100));
                        bglayer._children[0].runAction(cc.fadeTo(1, 100));
                        v.removeFromParent();

                    })
                    this.scheduleOnce(function () {

                        bglayer._children[0].initWithFile(res.DragBg);
                        bglayer._children[0].runAction(cc.fadeTo(1, 255));
                        this.layerightStar.removeFromParent();
                        var layer1 = new Layer1();
                        this.addChild(layer1, 0, 1);
                    }, 1)
                    this.scheduleOnce(function () {
                        this.twoOff = true;
                    }, 4)
                }
                if (this.currentObj.name == "firglow" && this.threeOff) {
                    this.threeOff = false;
                    var bglayer = cc.director.getRunningScene().getChildByTag(30);
                    this.delArr.forEach(function (v) {
                        v.runAction(cc.fadeTo(1, 100));
                        bglayer._children[0].runAction(cc.fadeTo(1, 100));
                        v.removeFromParent();

                    })
                    this.scheduleOnce(function () {

                        bglayer._children[0].initWithFile(res.FireBg);
                        bglayer._children[0].runAction(cc.fadeTo(1, 255));
                        this.layerightStar.removeFromParent();
                        var layer1 = new Layer2();
                        this.addChild(layer1, 0, 1);
                    }, 1)
                    this.scheduleOnce(function () {
                        this.threeOff = true;
                    }, 4)
                }
                if (this.currentObj.name == "honeybee" && this.fourOff) {
                    this.fourOff = false;
                    var bglayer = cc.director.getRunningScene().getChildByTag(30);
                    this.delArr.forEach(function (v) {
                        v.runAction(cc.fadeTo(1, 100));
                        bglayer._children[0].runAction(cc.fadeTo(1, 100));
                        v.removeFromParent();
                    })
                    this.scheduleOnce(function () {
                        bglayer._children[0].initWithFile(res.HoneyBg);
                        bglayer._children[0].runAction(cc.fadeTo(1, 255));
                        this.layerightStar.removeFromParent();
                        var layer1 = new Layer4();
                        this.addChild(layer1, 0, 1);
                    }, 1)
                    this.scheduleOnce(function () {
                        this.fourOff = true;
                    }, 4)
                }
            }
        }, 4)
    }
})