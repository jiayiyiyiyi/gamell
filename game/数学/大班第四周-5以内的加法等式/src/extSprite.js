var ExtSprite = cc.Sprite.extend({
  ctor : function(filename){
  	this._super(filename);
  },
  shakeAction : function(angle){ //抖动
    var action1 = cc.rotateTo(0.1,angle);
    var action2 = cc.rotateTo(0.1,0);
    var action3 = cc.rotateTo(0.1,-angle);
    var action4 = cc.rotateTo(0.1,0);
    var action = cc.sequence(action1,action2,action3,action4);

    this.runAction(action);
  },
  cardTurnOver : function(flag,front,reverse){  //翻牌
    var action1 = cc.scaleTo(0.2, 0.001*fix,0.333*fix);
    var scale_ease1 = action1.easing(cc.easeOut(2));

    var action2 = cc.scaleTo(0.2, 0.333*fix,0.333*fix);
    var scale_ease2 = action2.easing(cc.easeIn(2));

    var cb1 = cc.callFunc(function(){
      /* 换图 */
      flag ? this.setTexture(front) : this.setTexture(reverse);
    }.bind(this)) 

    var action = cc.sequence(scale_ease1,cb1,cc.delayTime(0.1),scale_ease2);
    
    this.runAction(action);
  },
  fadeAction : function(flag){ //淡入淡出
    if(flag){
      var action = cc.fadeOut(0.3);
    }else{
      var action = cc.fadeIn(0.3);
    }
    this.runAction(action);
  },
  scaleAction : function(time,sca){
    var action = cc.scaleTo(time,sca);
    this.runAction(action);
  },
  rotateAction : function(time,angle){ //旋转
    var action = cc.rotateBy(time,angle);
    var move_ease = action.easing(cc.easeOut(2));
    this.runAction(move_ease);
  },
  moveAction : function(time,x,y,num){
    var action = cc.moveTo(time,x,y);

    switch (num){
      case 1 : 
        var move_ease = action.easing(cc.easeIn(2));
        break;
      case 2 : 
        var move_ease = action.easing(cc.easeOut(2));
        break;
      case 3 : 
        var move_ease = action.easing(cc.easeInOut(2));
        break;
      default : 
        var move_ease = action.easing(cc.easeInOut(2));
        break;
    }
    this.runAction(move_ease);
  }
});