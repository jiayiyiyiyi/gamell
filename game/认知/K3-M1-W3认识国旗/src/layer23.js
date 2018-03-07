//每个场景创建一个文件
var Layer23 = cc.Layer.extend({
    ctor: function() {
        this._super();
        this.layerightStar= new StarLayer(common_data[0]);
        this.addChild(this.layerightStar, 10, 10);

        this.dealArr = [];
        this.twoArr = [];
        this.threeArr = [];
        this.count = 0;
        this.init();
        if(common_data[0].obtain == 6){
            updata.finish_star = common_data[0].obtain;
            updata.is_finish = 1;
            this.scheduleOnce(function(){
                this.layerightStar.gameEnd(6);
                sound.winAudio();
            },0.6)
        }

    },
    init : function(){
        this.country = arrsubject[0];
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
        for(var i = 0;i<this.threeArr.length;i++){
            this.get(this.threeArr[i],800*fix,0)
        }
        this.clickAction();
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
                    /*按键声*/
                    sound.buttonAudio();
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
    get : function (v,x,y) {
        var action = cc.moveBy(0.4,cc.p(x,y))
        v.runAction(action)
    },
})