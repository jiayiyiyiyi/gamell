//每个场景创建一个文件
var Layer1 = cc.Layer.extend({
    ctor: function() {
        this._super();
        this.layerightStar= new StarLayer(common_data[0]);
        this.addChild(this.layerightStar, 10, 10);
        this.dealArr = [];
        this.oneArr = [];
        this.twoArr = [];
        this.threeArr = [];
        this.moreOneArr = [];
        this.moreTwoArr = [];
        this.count = 0;
        this.currNumber = 0;
        this.currentTarget = {};
        this.init();

    },
    init : function(){
        this.country = arrsubject[0];
        //国旗
        this.evey = this.country[0];
        //第一排
        this.onePai = this.country[1];
        this.conTwo = arrsubject[0][2].slice(0);
        for(var i =0;i<this.onePai.length;i++){
            this.cos = this.random(this.conTwo);
            var sprite = new cc.Sprite(this.onePai[i].url);
            sprite.setAnchorPoint(0.5, 0.5);
            this.dealArr.push(sprite);
            this.oneArr.push(sprite);
            sprite.setPosition(this.cos.x*fix,this.cos.y*fix+80/fix-80);
            sprite.id = this.onePai[i].id;
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 0);
            this.index = this.conTwo.indexOf(this.cos);
            this.conTwo.splice(this.index,1);
        }
        //第二排
        this.twoPai = this.country[1];
        this.conThree = arrsubject[0][3].slice(0);
        for(var i =0;i<this.twoPai.length;i++){
            this.cs = this.random(this.conThree);
            var sprite = new cc.Sprite(this.twoPai[i].url);
            sprite.setAnchorPoint(0.5, 0.5);
            this.dealArr.push(sprite);
            this.twoArr.push(sprite);
            sprite.setPosition(this.cs.x*fix,this.cs.y*fix+80/fix-80);
            sprite.id = this.twoPai[i].id;
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 1);
            this.indexs = this.conThree.indexOf(this.cs);
            this.conThree.splice(this.indexs,1);
        }
        //新的
        this.newPai = this.country[0];
        this.pos = this.country[4];
        for(var i =0;i<this.newPai.length;i++){
            var sprite = new cc.Sprite(this.newPai[i].url);
            sprite.setAnchorPoint(0.5, 0.5);
            this.dealArr.push(sprite);
            this.threeArr.push(sprite);
            sprite.setPosition((this.pos[i].x-800)*fix,this.pos[i].y*fix+100/fix-100);
            sprite.id = this.newPai[i].id;
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 1);
        }
        this.scheduleOnce(function(){
            for(var i =0; i<this.twoArr.length;i++){
                this.ardTurnOver(this.twoArr[i],this.evey[i].url);
                this.ardTurnOver(this.oneArr[i],this.evey[i].url);
            }
        },0.2)
        this.scheduleOnce(function(){
            for(var i =0; i<this.twoArr.length;i++){
                this.ardTurnOver(this.oneArr[i],res.Backk);
                this.ardTurnOver(this.twoArr[i],res.Backk);
            }
            this.dragAction();

        },2.8)
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

                if (cc.rectContainsPoint(rect, locationInNode)) {     // 判断触摸点是否在按钮范围
                    updata.finish_steps++;
                    /*按键声*/
                    sound.buttonAudio();
                    this.ardTurnOver(target,this.evey[target.id].url);
                    cc.eventManager.removeAllListeners();  //移除监听
                    if(this.currNumber === 0) { //第一次点击
                        this.currNumber ++;
                        this.currentTarget = target;
                        if(this.oneArr.indexOf(target) == -1){ //第二次点击判断点击的是否是当前列
                            // 添加监听器到管理器
                            var len = this.oneArr.length;
                            for (var i = 0; i < len; i++) {
                                cc.eventManager.addListener(this.listener1.clone(), this.oneArr[i]);
                            }
                        }else{
                            var len = this.twoArr.length;
                            for (var i = 0; i < len; i++) {
                                cc.eventManager.addListener(this.listener1.clone(), this.twoArr[i]);
                            }

                        }
                    }else if(this.currNumber == 1){
                        this.currNumber = 0;
                        this.list();
                        if(this.currentTarget.id == target.id){
                            cc.eventManager.removeAllListeners();  //移除监听
                            this.count ++;
                            this.scheduleOnce(function () {
                                sound.rightAudio();
                                if(this.oneArr.indexOf(this.currentTarget)==-1){
                                    var action = cc.moveTo(0.2,cc.p(this.currentTarget.x,this.currentTarget.y));
                                    target.runAction(action);
                                }else{
                                    var action = cc.moveTo(0.2,cc.p(target.x,target.y));
                                    this.currentTarget.runAction(action);
                                }
                            },1)
                            this.scheduleOnce(function () {
                                this.currentTarget.removeFromParent();
                                target.removeFromParent();
                            },1.3)
                            if(this.count == 5){
                                //飞星
                                this.scheduleOnce(function(){
                                    updata.finish_star++;
                                    if (common_data[0].obtain != 1) {
                                        this.layerightStar.rightStar(1)
                                        common_data[0].obtain++;
                                    }
                                    sound.starAudio();
                                    for(var i = 0;i<this.threeArr.length;i++){
                                        this.get(this.threeArr[i],800*fix,0)
                                    }
                                    this.clickAction();
                                    this.scheduleOnce(function () {
                                       sound.flagAudio()
                                    },0.6)
                                },2)
                            }
                        }else{
                            cc.eventManager.removeAllListeners();  //移除监听
                            this.scheduleOnce(function () {
                                sound.wrongAudio();
                                this.ardTurnOver(this.currentTarget,res.Backk);
                                this.ardTurnOver(target,res.Backk);
                            },1)
                        }
                        this.scheduleOnce(function () {
                            //添加监听
                            this.list();
                        },1.7)
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
        this.list(); //第一次添加监听
    },
    clickAction: function () {
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

                if (cc.rectContainsPoint(rect, locationInNode)) {     // 判断触摸点是否在按钮范围
                    updata.finish_steps++;
                    /*按键声*/
                    sound.buttonAudio();
                    sound.stopEff();
                    var bglayer = cc.director.getRunningScene().getChildByTag(30);
                    this.dealArr.forEach(function(v){
                        v.runAction(cc.fadeTo(1,150));
                        bglayer._children[0].runAction(cc.fadeTo(1,100));
                        v.removeFromParent();
                    })
                    if(target.id == 0){
                        this.scheduleOnce(function(){
                            bglayer._children[0].initWithFile(res.Bg);
                            bglayer._children[0].runAction(cc.fadeTo(1,250));
                            this.layerightStar.removeFromParent();
                            var layer = new Layer2();
                            this.addChild(layer, 0, 1);
                        },1)
                    }
                    if(target.id == 1){
                        this.scheduleOnce(function(){
                            bglayer._children[0].initWithFile(res.Bg);
                            bglayer._children[0].runAction(cc.fadeTo(1,250));
                            this.layerightStar.removeFromParent();
                            var layer = new Layer3();
                            this.addChild(layer, 0, 1);
                        },1)
                    }
                    if(target.id == 2){
                        this.scheduleOnce(function(){
                            bglayer._children[0].initWithFile(res.Bg);
                            bglayer._children[0].runAction(cc.fadeTo(1,250));
                            this.layerightStar.removeFromParent();
                            var layer = new Layer4();
                            this.addChild(layer, 0, 1);
                        },1)
                    }
                    if(target.id == 3){
                        this.scheduleOnce(function(){
                            bglayer._children[0].initWithFile(res.Bg);
                            bglayer._children[0].runAction(cc.fadeTo(1,250));
                            this.layerightStar.removeFromParent();
                            var layer = new Layer5();
                            this.addChild(layer, 0, 1);
                        },1)
                    }
                    if(target.id == 4){
                        this.scheduleOnce(function(){
                            bglayer._children[0].initWithFile(res.Bg);
                            bglayer._children[0].runAction(cc.fadeTo(1,250));
                            this.layerightStar.removeFromParent();
                            var layer = new Layer6();
                            this.addChild(layer, 0, 1);
                        },1)
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
        var len = this.threeArr.length;
        for (var i = 0; i < len; i++) {
            cc.eventManager.addListener(this.listener3.clone(), this.threeArr[i]);
        }
    },

    random: function (arr) {
        index = Math.floor((Math.random() * arr.length));
        return arr[index];
    },
    ardTurnOver: function (sprite,change) {
        var action1 = cc.scaleTo(0.2, 0.001 * fix, 0.333 * fix);
        var scale_ease1 = action1.easing(cc.easeOut(2));

        var action2 = cc.scaleTo(0.2, 0.333 * fix, 0.333 * fix);
        var scale_ease2 = action2.easing(cc.easeIn(2));

        var cb1 = cc.callFunc(function () {
            /* 换图 */
                sprite.setTexture(change);
        }.bind(this))

        var action = cc.sequence(scale_ease1, cb1, cc.delayTime(0.2), scale_ease2);
        sprite.runAction(action);
    },
    get : function (v,x,y) {
        var action = cc.moveBy(0.4,cc.p(x,y))
        v.runAction(action)
    },
    list :function () {

        // 添加监听器到管理器
        var len = this.oneArr.length;
        for (var i = 0; i < len; i++) {
            cc.eventManager.addListener(this.listener1.clone(), this.oneArr[i]);
        }
        // 添加监听器到管理器
        var len = this.twoArr.length;
        for (var i = 0; i < len; i++) {
            cc.eventManager.addListener(this.listener1.clone(), this.twoArr[i]);
        }
    }
})