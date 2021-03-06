$(function() {
  var posArr = [
    {x:2.88,y:3.79},{x:6.26,y:3.81},{x:9.56,y:3.88},{x:9.57,y:7.01},{x:9.57,y:10.04},
    {x:12.53,y:10.04},{x:12.53,y:7.06},{x:15.18,y:7.06},{x:17.75,y:7.07},{x:17.75,y:10.03}
  ]
 var two = [
     {x:17.63,y:3.8},{x:13.9,y:3.79},{x:9.71,y:3.79},{x:5.69,y:3.79},{x:1.96,y:3.86},
     {x:3.55,y:5.98},{x:1.95,y:8.12},{x:15.18,y:7.06},{x:17.75,y:7.07},{x:17.75,y:10.03}
     ]
 var three = [
     {x:1.31,y:8.35},{x:4.46,y:8.33},{x:7.54,y:8.27},{x:7.6,y:4.93},{x:10.56,y:4.93},
     {x:13.58,y:4.93},{x:12.09,y:8.91},{x:15.03,y:8.91},{x:16.67,y:7.01},{x:16.66,y:4.05}
     ]
 var four = [
     {x:16.66,y:9.14},{x:16.58,y:5.88},{x:14.11,y:5.88},{x:11.41,y:5.88},{x:8.83,y:5.88},
     {x:8.73,y:9.69},{x:6.26,y:9.69},{x:3.75,y:9.69},{x:3.71,y:6.85},{x:3.71,y:3.92}
     ]
  //获取url
  function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串 
    var theRequest = new Object();
    if(url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }

  var Request = new Object();
  Request = GetRequest();

  var browser = {
    versions: function() {
      var u = navigator.userAgent;
      var app = navigator.appVersion;
      return {
        //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        iPod: u.indexOf('iPod') > -1, //是否iPod
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
      };

    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  };

  //验证有没有购买
  if(Request.trade_status == "success") {
    var r = confirm("支付成功")
    if(r == true) {
      window.location.reload()
    } else {
      window.location.reload()
    }
  }

  //支付
  function gotopay(res) {
    if(browser.versions.android) {
      Android.gotopay(res);
    } else if(browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:gotopay=' + res;
    } else {
      console.log('不支持的平台');
    }
  }

  //返回
  function back() {
    if(browser.versions.android) {
      Android.doback(close);
    } else if(browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:doback=close'
    } else {
      console.log('不支持的平台');
    }
  }

  //显示head
  function showHead() {
    if(browser.versions.android) {

      Android.showhomeheader();
    } else if(browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = "jsback:showhomeheader"
    } else {
      console.log('不支持的平台');
    }
  }

  //隐藏客户端head
  function Head() {
    if(browser.versions.android) {

      Android.hidehomeheader();
    } else if(browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = "jsback:hidehomeheader"
    } else {
      console.log('不支持的平台');
    }
  }

  $.ajax({
    async: false,
    type:"GET",
    url: "http://192.168.0.8/v1/parent/students/task/ajax?token="+Request.token+"&student_id="+Request.student_id,
    dataType: "jsonp",
    jsonpCallback: "jsonpReturn",
    success: function(data){
      getImg(data.data);
    }
  })
  
  //获取资源
  function getImg(arr) {
    if(arr==[]){
      return false;
    }else{
      var str = '';
      for(var i = 0; i < arr.length; i++) {
        //判断有没有付费
        if(arr[i].is_pay==0){
          str += '<div class="game" data-pay="'+arr[i].is_pay+'" lo="' + arr[i].task_url + '" packageid="'+arr[i].package_id+'"><img src="' + arr[i].lock_thumb + '" alt="" class="imgs" /><div class="model"><img src="image/-g-lock.png" alt="" class="change"></div></div>'
        }else if(arr[i].is_pay==1){
          str += '<div class="game" data-pay="'+arr[i].is_pay+'" lo="' + arr[i].task_url + '" packageid="'+arr[i].package_id+'"><img src="' + arr[i].lock_thumb + '" alt="" class="imgs" /><div class="model"><img src="image/-g-lock.png" alt="" class="change"></div></div>'
        }
      }

      $("#scroller").html(str)

        var sizeH = document.documentElement.clientHeight;
        var sizeW = document.documentElement.clientWidth;
        var x = sizeH-3*sizeW/4;
        var fontsize = $("html").css("font-size");
        var s = fontsize.replace(/[px]/g,"");
        $(".game").each(function(i, v) {
            $(v).css({"left" : posArr[i].x +"rem", "top": (posArr[i].y + x/2/s) + "rem"})
        })
      
      $(".game").on("click", function() {
        if($(this).attr("data-pay") == 1) {
          window.location.href = $(this).attr("lo") + "?category_id=" + Request.category_id + "&token=" + Request.token + "&trade_status="+Request.trade_status+""
        } else {
          gotopay($(this).attr("packageid"))
        }
      })
    } 
  }

  //打乱数组不改变原数组 返回新数组
  function randomSort(arr, newArr){
    // 如果原数组arr的length值等于1时，原数组只有一个值，其键值为0
    // 同时将这个值push到新数组newArr中
    if(arr.length == 1) {
      newArr.push(arr[0]);
      return newArr; // 相当于递归退出
    }
    // 在原数组length基础上取出一个随机数
    var random = Math.ceil(Math.random() * arr.length) - 1;
    // 将原数组中的随机一个值push到新数组newArr中
    newArr.push(arr[random]);
    // 对应删除原数组arr的对应数组项
    arr.splice(random,1);
    return randomSort(arr, newArr);
  }

  //随机数组 打乱原数组
  function shuffle(arr) {
    var i, 
    j,
    temp;
    for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    }
    return arr;
  };
})

