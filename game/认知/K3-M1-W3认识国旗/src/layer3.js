//每个场景创建一个文件
var Layer3 = cc.Layer.extend({
    ctor: function() {
        this._super();
        this.layerightStar= new StarLayer(common_data[2]);
        this.addChild(this.layerightStar, 10, 10);
        var back = new backLayer();
        this.addChild(back, 11, 4);

        this.dealArr = [];
        this.flagArr = [];
        this.dragArr = [];
        this.colorArr = [];
        this.count = 0;
        this.comCon();
        this.init();
        this.onOff = true;
        this.dragAction();
    },
    comCon:function(){
        var flag = new cc.Sprite(res.SmallFlags);
        flag.setAnchorPoint(0, 0);
        this.dealArr.push(flag);
        flag.setPosition(0*fix, 260+110/fix-110);
        flag.setScale(0.333*fix);
        this.addChild(flag, 0);
    },
    init:function () {
        this.own = arrsubject[2];
        this.pos = arrsubject[2][3].slice(0);
        //美国
        this.one = this.own[0];
        this.american = new cc.Sprite(this.one[0].url);
        this.american.setAnchorPoint(0, 0);
        this.dealArr.push(this.american);
        this.american.setPosition(this.one[0].x*fix, this.one[0].y*fix+200/fix-200);
        this.american.setScale(0.333*fix);
        this.addChild(this.american, 0);
        //国旗背景
        this.red = new cc.Sprite(this.one[1].url);
        this.red.setAnchorPoint(0, 0);
        this.dealArr.push(this.red);
        this.red.setPosition(this.one[1].x*fix, this.one[1].y*fix+200/fix-200);
        this.red.setScale(0.333*fix);
        this.addChild(this.red, 1);
        //上方拼图
        this.two = this.own[1];
        for(var i =0;i<this.two.length;i++){
            var sprite = new cc.Sprite(this.two[i].url);
            sprite.setAnchorPoint(0, 0);
            this.dealArr.push(sprite);
            this.flagArr.push(sprite);
            sprite.setPosition(this.two[i].x*fix, this.two[i].y*fix+200/fix-200);
            sprite.id = this.two[i].id;
            sprite.name = this.two[i].name;
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 1);
            sprite.setOpacity(0);
        }
        //下方拼图
        this.three = this.own[2];
        for(var i =0;i<this.three.length;i++){
            this.cs = this.random(this.pos);
            var sprite = new cc.Sprite(this.three[i].url);
            sprite.setAnchorPoint(0, 0);
            this.dealArr.push(sprite);
            this.dragArr.push(sprite);
            sprite.setPosition(this.cs.x*fix,this.cs.y*fix+100/fix-100);
            sprite.id = this.three[i].id;
            sprite.name = this.three[i].name;
            sprite.setScale(0.333*fix);
            this.addChild(sprite, 1);
            this.indexs = this.pos.indexOf(this.cs);
            this.pos.splice(this.indexs,1);
        }
        if (common_data[2].obtain == 1){
            for(var i = 0;i<this.dragArr.length;i++){
                this.dragArr[i].removeFromParent();
                this.flagArr[i].setOpacity(255);
            }
        }
    },
    dragAction : function(){
        /*设置 初始坐标 */
        var dragX,dragY;
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
                        /*按键声*/
                        sound.buttonAudio();
                        this.onOff = false;
                        /*保存原始坐标*/
                        dragX = target.getPosition().x;
                        dragY = target.getPosition().y;
                        return true;
                    }
                    return false;
                }
            }.bind(this),
            onTouchMoved: function (touch, event) {            //实现onTouchMoved事件处理回调函数, 触摸移动时触发

                var size = cc.director.getWinSize();
                // 移动当前按钮精灵的坐标位置
                var target = event.getCurrentTarget();

                var delta = touch.getDelta();              //获取事件数据: delta
                /*设置层级*/
                target.setLocalZOrder(2);
                target.initWithFile(this.three[target.id].urly);
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
                var target = event.getCurrentTarget();
                updata.finish_steps++;
                this.onOff = true;
                this.judgeEach(target);
                if(this.moveFlag){
                    //回到原位
                    target.setPosition(dragX,dragY);
                    target.initWithFile(this.three[target.id].url);
                }
            }.bind(this)
        });
        // 添加监听器到管理器
        var len = this.dragArr.length;
        for(var i = 0 ; i < len ; i++){
            cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
        }
    },
    judgeEach : function(target){
        for(var i=0;i<this.flagArr.length;i++){
            var s = this.flagArr[i].getBoundingBox();
            var rect = cc.rect(s.x+s.width/3, s.y +s.height/3, s.width/3, s.height/3);
            var drag = target.getBoundingBox();
            var rect1 = cc.rect(drag.x+drag.width/3, drag.y +drag.height/3, drag.width/3, drag.height/3);
            //碰撞检测
            if (cc.rectIntersectsRect(rect1, rect)) {
                /*挑选相同 ID*/
                if(target.name === this.flagArr[i].name) {
                    sound.rightAudio();
                    this.count++;
                    target.setOpacity(0);
                    this.flagArr[i].setOpacity(255);
                    this.moveFlag = false;
                    if(this.count == 6){
                        sound.americanAudio();
                        //出现飞星
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
                        }, 1)
                    }
                }else{
                    sound.wrongAudio();
                }
            }
        }
    },
    random: function (arr) {
        index = Math.floor((Math.random() * arr.length));
        return arr[index];
    },
})