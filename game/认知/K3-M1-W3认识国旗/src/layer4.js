//每个场景创建一个文件
var Layer4 = cc.Layer.extend({
    ctor: function() {
        this._super();
        this.layerightStar= new StarLayer(common_data[3]);
        this.addChild(this.layerightStar, 10, 10);
        var back = new backLayer();
        this.addChild(back, 11, 4);

        this.dealArr = [];
        this.dragArr = [];
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
        this.owns = arrsubject[3];
        this.pos = arrsubject[3][2].slice(0);
        //英国
        this.one = this.owns[0];
        this.british = new cc.Sprite(this.one[0].url);
        this.british.setAnchorPoint(0, 0);
        this.dealArr.push(this.british);
        this.british.setPosition(this.one[0].x*fix, this.one[0].y*fix+200/fix-200);
        this.british.setScale(0.333*fix);
        this.addChild(this.british, 0);
        //国旗背景
        this.red = new cc.Sprite(this.one[1].url);
        this.red.setAnchorPoint(0, 0);
        this.dealArr.push(this.red);
        this.red.setPosition(this.one[1].x*fix, this.one[1].y*fix+200/fix-200);
        this.red.setScale(0.333*fix);
        this.addChild(this.red, 1);
        //线
        this.outline = new cc.Sprite(this.one[3].url);
        this.outline.setAnchorPoint(0, 0);
        this.dealArr.push(this.outline);
        this.outline.setPosition(this.one[3].x*fix, this.one[3].y*fix+200/fix-200);
        this.outline.name = this.one[3].name;
        this.outline.setScale(0.333*fix);
        this.addChild(this.outline, 1);
        //国旗
        this.flags = new cc.Sprite(this.one[2].url);
        this.flags.setAnchorPoint(0, 0);
        this.dealArr.push(this.flags);
        this.flags.setPosition(this.one[2].x*fix, this.one[2].y*fix+200/fix-200);
        this.flags.setScale(0.333*fix);
        this.addChild(this.flags, 1);
        this.flags.setOpacity(0);
        //下方拼图
        this.three = this.owns[1];
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
        if (common_data[3].obtain == 1){
            for(var i = 0;i<this.dragArr.length;i++){
                this.dragArr[i].removeFromParent();
            }
            this.outline.removeFromParent();
            this.flags.setOpacity(255);
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
                target.setScale(1.2*fix);
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
                    target.setScale(0.333*fix);
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
            /*挑选相同 ID*/
            var s = this.outline.getBoundingBox();
            var rect = cc.rect(s.x, s.y , s.width, s.height);
            var drag = target.getBoundingBox();
            if (cc.rectIntersectsRect(drag, rect)) {
                if(target.name === this.outline.name){
                    sound.rightAudio();
                    this.count ++;
                    target.setOpacity(0);
                    this.outline.setOpacity(0);
                    this.flags.setOpacity(255);
                    this.moveFlag = false;
                    if(this.count == 1){
                        sound.britishAudio();
                        //出现飞星
                        this.scheduleOnce(function () {
                            if (common_data[3].obtain != 1) {
                                updata.finish_star++;
                                this.layerightStar.rightStar(1)
                                common_data[3].obtain = 1;
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
    },
    random: function (arr) {
        index = Math.floor((Math.random() * arr.length));
        return arr[index];
    },

})