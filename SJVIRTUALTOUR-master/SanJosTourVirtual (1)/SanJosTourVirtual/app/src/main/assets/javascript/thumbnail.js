window.widget=window.widget||{};window.widget.thumbnail={};window.widget.thumbnail.content={};window.widget.thumbnail.movingflag=false;if(window.navigator.appVersion.indexOf("iPad")>0||window.navigator.appVersion.indexOf("iPhone")>0||window.navigator.appVersion.indexOf("iPod")>0){window.widget.thumbnail.isTouchEqp=true}else{window.widget.thumbnail.isTouchEqp=false}window.widget.thumbnail.hitch=function(b,c){var a=Array.prototype.slice.call(arguments,2);return function(e){if(e){a.push(e)}return c.apply(b,a)}};window.widget.thumbnail.instance=function(a){this.init(a)};window.widget.thumbnail.instance.prototype={init:function(l){window.widget.thumbnail.content[l.id]=this;this.tbos=[];this.type=l.type;this.outerContainer=document.createElement("div");this.outerContainer.style.position="absolute";if(window.widget.thumbnail.isTouchEqp){this.outerContainer.addEventListener("touchmove",function(i){i.stopPropagation();i.preventDefault()})}if(l.zindex){this.outerContainer.style.zIndex=parseInt(l.zindex)}if(l.border){this.outerContainer.style.border=("solid 1px "+l.border)}if(l.ln&&l.rn){var h=document.createElement("div");h.style.cursor="pointer";h.style.height=l.ln.height+"px";h.style.width=l.ln.width+"px";h.url1=l.ln.url1;h.url2=l.ln.url2;h.url3=l.ln.url3;h.isHorizontal=l.isHorizontal;this.leftNav=h;if(window.widget.thumbnail.isTouchEqp==false){h.addEventListener("mousedown",function(i){i.stopPropagation();i.preventDefault();window.widget.thumbnail.event.leftNavigate(i,window.widget.thumbnail.content[l.id])},false);h.addEventListener("mouseup",function(i){if(window.widget.thumbnail.movingflag==false){i.stopPropagation();i.preventDefault();window.widget.thumbnail.event.stopSlide(window.widget.thumbnail.content[l.id])}},false);h.addEventListener("mouseover",function(i){if(i.target.isHorizontal){i.target.style.background="url('"+i.target.url2+"') no-repeat  left center"}else{i.target.style.background="url('"+i.target.url2+"') no-repeat  top center"}},false);h.addEventListener("mouseout",function(i){if(i.target.isHorizontal){i.target.style.background="url('"+i.target.url1+"') no-repeat center left"}else{i.target.style.background="url('"+i.target.url1+"') no-repeat center top"}},false)}else{h.addEventListener("touchstart",function(i){i.stopPropagation();i.preventDefault();window.widget.thumbnail.event.leftNavigate(i,window.widget.thumbnail.content[l.id]);if(i.target.isHorizontal){i.target.style.background="url('"+i.target.url3+"') no-repeat center left"}else{i.target.style.background="url('"+i.target.url3+"') no-repeat center top"}},false);h.addEventListener("touchend",function(i){if(window.widget.thumbnail.movingflag==false){i.stopPropagation();i.preventDefault();if(i.target.isHorizontal){i.target.style.background="url('"+i.target.url1+"') no-repeat center left"}else{i.target.style.background="url('"+i.target.url1+"') no-repeat center top"}window.widget.thumbnail.event.stopSlide(window.widget.thumbnail.content[l.id])}},false)}var e=document.createElement("div");e.style.cursor="pointer";e.style.height=l.rn.height+"px";e.style.width=l.rn.width+"px";e.url1=l.rn.url1;e.url2=l.rn.url2;e.url3=l.rn.url3;e.isHorizontal=l.isHorizontal;this.rightNav=e;if(window.widget.thumbnail.isTouchEqp==false){e.addEventListener("mousedown",function(i){i.stopPropagation();i.preventDefault();window.widget.thumbnail.event.rightNavigate(i,window.widget.thumbnail.content[l.id])},false);e.addEventListener("mouseup",function(i){if(window.widget.thumbnail.movingflag==false){i.stopPropagation();i.preventDefault();window.widget.thumbnail.event.stopSlide(window.widget.thumbnail.content[l.id])}},false);e.addEventListener("mouseover",function(i){if(i.target.isHorizontal){i.target.style.background="url('"+i.target.url2+"') no-repeat center right"}else{i.target.style.background="url('"+i.target.url2+"') no-repeat center bottom"}},false);e.addEventListener("mouseout",function(i){if(i.target.isHorizontal){i.target.style.background="url('"+i.target.url1+"') no-repeat center right"}else{i.target.style.background="url('"+i.target.url1+"') no-repeat center bottom"}},false)}else{e.addEventListener("touchstart",function(i){i.stopPropagation();i.preventDefault();if(i.target.isHorizontal){i.target.style.background="url('"+i.target.url3+"') no-repeat center right"}else{i.target.style.background="url('"+i.target.url3+"') no-repeat center bottom"}window.widget.thumbnail.event.rightNavigate(i,window.widget.thumbnail.content[l.id])},false);e.addEventListener("touchend",function(i){if(window.widget.thumbnail.movingflag==false){i.stopPropagation();i.preventDefault();if(i.target.isHorizontal){i.target.style.background="url('"+i.target.url1+"') no-repeat center right"}else{i.target.style.background="url('"+i.target.url1+"') no-repeat center bottom"}window.widget.thumbnail.event.stopSlide(window.widget.thumbnail.content[l.id])}},false)}}this.relativePosition=l.mc.relativeposition;this.mc=document.createElement("div");this.mc.style.height=l.mc.height+"px";this.mc.style.width=l.mc.width+"px";this.mc.style.overflow="hidden";if(l.mc.bgcolor){this.mc.style.backgroundColor=l.mc.bgcolor}if(l.mc.border){this.mc.style.border=("solid 1px "+l.mc.border)}if(l.mc.opacity){this.mc.style.opacity=l.mc.opacity}this.cc=document.createElement("div");this.cc.style.position="relative";this.cc.style.left="0px";this.cc.style.top="0px";var p=0,a=0;for(var j=0;j<l.thumbnails.length;j++){var k=l.thumbnails[j];if(j==0){p+=(2*parseInt(l.mc.borderspace)+parseInt(k.height)+2);a+=(2*parseInt(l.mc.borderspace)+parseInt(k.width)+2)}else{p+=(parseInt(l.mc.cellspace)+parseInt(k.height)+2);a+=(parseInt(l.mc.cellspace)+parseInt(k.width)+2)}var m=document.createElement("div");m.style.height=k.height+"px";m.style.width=k.width+"px";m.style.overflow="hidden";m.customIndex=j;m.customId=l.id;m.addEventListener("click",window.widget.thumbnail.hitch(this,w.c.e.changeScene,{id:k.sceneid}),false);if(k.bgcolor){m.style.backgroundColor=k.bgcolor}var o=document.createElement("img");o.src=k.url;if((k.height-k.imgheight)>0){o.style.marginTop=Math.round((k.height-k.imgheight)/2)+"px"}if((k.width-k.imgwidth)>0){o.style.marginLeft=Math.round((k.width-k.imgwidth)/2)+"px"}m.appendChild(o);o.addEventListener("dragstart",function(i){i.stopPropagation();i.preventDefault()},false);o.style.webkitUserSelect="none";var c=null;if(k.text){c=document.createElement("div");c.style.textAlign="center";c.style.fontSize=k.text.fontsize;c.style.color=k.text.color;if(k.text.isitalic){c.style.fontStyle="italic"}if(k.text.isbold){c.style.fontWeight=700}if(k.text.fontfamily){c.style.fontFamily=k.text.fontfamily}c.innerHTML=k.text.content;c.style.overflow="hidden";document.body.appendChild(c);p+=c.clientHeight}var b=document.createElement("div");b.style.width=k.width+"px";if(l.isHorizontal==true){b.style.cssFloat="left";b.style.marginTop=k.margintop+"px";if(j==0){b.style.marginLeft="5px"}else{b.style.marginLeft=l.mc.cellspace+"px"}}else{b.style.marginLeft=k.marginleft+"px";if(j==0){b.style.marginTop="5px"}else{b.style.marginTop=l.mc.cellspace+"px"}}b.appendChild(m);if(c){b.appendChild(c);c.style.backgroundColor=k.common}b.style.border="solid 1px "+k.common;this.cc.appendChild(b);var f={};f.imagediv=m;f.textdiv=c;f.data=k;this.tbos.push(f)}var g=document.createElement("div");g.style.clear="both";this.cc.appendChild(g);if(l.isHorizontal==true){var n=document.createElement("div");n.style.clear="both";this.isHorizontal=true;this.cc.style.height=l.mc.height+"px";this.cc.style.width=a+"px";this.mc.style.cssFloat="left";if(this.leftNav&&this.rightNav){this.leftNav.style.cssFloat="left";this.leftNav.style.height="100%";this.leftNav.style.background="url('"+l.ln.url1+"') no-repeat center left";this.rightNav.style.cssFloat="left";this.rightNav.style.height="100%";this.rightNav.style.background="url('"+l.rn.url1+"') no-repeat center right";this.outerContainer.style.height=l.mc.height+"px";this.outerContainer.style.width=(l.ln.width+l.mc.width+l.rn.width)+"px";this.outerContainer.appendChild(this.leftNav);this.outerContainer.appendChild(this.mc);this.outerContainer.appendChild(this.rightNav);if(window.twmode=="fixsize"){this.realleft=parseInt((l.mc.left-l.ln.width))}else{this.realleft=parseInt(l.mc.left)}this.realtop=parseInt(l.mc.top)}else{this.outerContainer.appendChild(this.mc);this.outerContainer.style.height=(l.mc.height)+"px";this.outerContainer.style.width=(l.mc.width)+"px";this.realleft=parseInt(l.mc.left);this.realtop=parseInt(l.mc.top)}this.outerContainer.appendChild(n)}else{this.isHorizontal=false;this.cc.style.height=p+"px";this.cc.style.width=l.mc.width+"px";if(this.leftNav&&this.rightNav){this.leftNav.style.width="100%";this.leftNav.style.background="url('"+l.ln.url1+"') no-repeat top center";this.rightNav.style.width="100%";this.rightNav.style.background="url('"+l.rn.url1+"') no-repeat bottom center";this.outerContainer.style.height=(l.mc.height+l.ln.height+l.rn.height)+"px";this.outerContainer.style.width=(l.mc.width)+"px";this.outerContainer.appendChild(this.leftNav);this.outerContainer.appendChild(this.mc);this.outerContainer.appendChild(this.rightNav);this.realleft=parseInt(l.mc.left);if(window.twmode=="fixsize"){this.realtop=parseInt((l.mc.top-l.ln.height))}else{this.realtop=parseInt(l.mc.top)}this.realleft=parseInt(l.mc.left)}else{this.outerContainer.appendChild(this.mc);this.outerContainer.style.height=(l.mc.height)+"px";this.outerContainer.style.width=(l.mc.width)+"px";this.realleft=parseInt(l.mc.left);this.realtop=parseInt(l.mc.top)}}this.resizePosition();this.mc.appendChild(this.cc);if(l.type=="mainwindow"){document.body.appendChild(this.outerContainer)}if(window.widget.thumbnail.isTouchEqp==false){this.mc.addEventListener("mousedown",window.widget.thumbnail.hitch(this,this.mousedownFunc),false)}else{this.mc.addEventListener("touchstart",window.widget.thumbnail.hitch(this,this.touchstartFunc),false)}},resizePosition:function(){if(window.twmode=="fixsize"){if(this.type=="mainwindow"){this.outerContainer.style.top=(this.realtop)+"px";this.outerContainer.style.left=(this.realleft)+"px"}else{this.outerContainer.style.left="0px";this.outerContainer.style.top="0px"}}else{if(this.type=="mainwindow"){if(this.relativePosition){switch(this.relativePosition){case 1:this.outerContainer.style.top=(0+this.realtop)+"px";this.outerContainer.style.left=(0+this.realleft)+"px";break;case 2:this.outerContainer.style.top=(0+this.realtop)+"px";this.outerContainer.style.left=(Math.round(d[a4][a9]/2)+this.realleft)+"px";break;case 3:this.outerContainer.style.top=(0+this.realtop)+"px";this.outerContainer.style.left=(d[a4][a9]+this.realleft)+"px";break;case 4:this.outerContainer.style.top=(Math.round(d[a4][a8]/2)+this.realtop)+"px";this.outerContainer.style.left=(0+this.realleft)+"px";break;case 5:this.outerContainer.style.top=(Math.round(d[a4][a8]/2)+this.realtop)+"px";this.outerContainer.style.left=(Math.round(d[a4][a9]/2)+this.realleft)+"px";break;case 6:this.outerContainer.style.top=(Math.round(d[a4][a8]/2)+this.realtop)+"px";this.outerContainer.style.left=(d[a4][a9]+this.realleft)+"px";break;case 7:this.outerContainer.style.top=(d[a4][a8]+this.realtop)+"px";this.outerContainer.style.left=(0+this.realleft)+"px";break;case 8:this.outerContainer.style.top=(d[a4][a8]+this.realtop)+"px";this.outerContainer.style.left=(Math.round(d[a4][a9]/2)+this.realleft)+"px";break;case 9:this.outerContainer.style.top=(d[a4][a8]+this.realtop)+"px";this.outerContainer.style.left=(d[a4][a9]+this.realleft)+"px";break}}else{this.outerContainer.style.top=(this.realtop)+"px";this.outerContainer.style.left=(this.realleft)+"px"}}else{this.outerContainer.style.left="0px";this.outerContainer.style.top="0px"}}},nowx:0,nowy:0,mousedownFunc:function(a){var a=window.event;this.nowx=a.clientX;this.nowy=a.clientY;this.mouseoverEventHandler=window.widget.thumbnail.hitch(this,this.mousemoveFunc);this.targetmouseupEventHandler=window.widget.thumbnail.hitch(this,this.mouseupFunc);this.dodymouseupEventHaldler=window.widget.thumbnail.hitch(this,this.mouseupFunc);this.mc.addEventListener("mousemove",this.mouseoverEventHandler,false);this.outerContainer.addEventListener("mouseup",this.targetmouseupEventHandler,false);document.documentElement.addEventListener("mouseup",this.dodymouseupEventHaldler,false)},touchstartFunc:function(a){var a=window.event.targetTouches[0];this.nowx=a.clientX;this.nowy=a.clientY;this.mouseoverEventHandler=window.widget.thumbnail.hitch(this,this.touchmoveFunc);this.targetmouseupEventHandler=window.widget.thumbnail.hitch(this,this.touchendFunc);this.dodymouseupEventHaldler=window.widget.thumbnail.hitch(this,this.touchendFunc);this.mc.addEventListener("touchmove",this.mouseoverEventHandler,false);this.outerContainer.addEventListener("touchend",this.targetmouseupEventHandler,false);document.documentElement.addEventListener("touchend",this.dodymouseupEventHaldler,false)},mousemoveFunc:function(e){window.widget.thumbnail.movingflag=true;var e=window.event;var c=e.clientX-this.nowx;var b=e.clientY-this.nowy;var a=parseInt(this.cc.style.left)+c;var f=parseInt(this.cc.style.top)+b;if(this.isHorizontal){if(c>0){if(a>0){this.cc.style.left="0px"}else{this.cc.style.left=a+"px"}}else{if(parseInt(this.cc.style.left)<=(this.mc.clientWidth-this.cc.clientWidth)){this.cc.style.left=(this.mc.clientWidth-this.cc.clientWidth)+"px"}else{this.cc.style.left=a+"px"}}}else{if(b>0){if(f>0){this.cc.style.top="0px"}else{this.cc.style.top=f+"px"}}else{if(parseInt(this.cc.style.top)<=(this.mc.clientHeight-this.cc.clientHeight)){this.cc.style.top=(this.mc.clientHeight-this.cc.clientHeight)+"px"}else{this.cc.style.top=f+"px"}}}this.nowx=e.clientX;this.nowy=e.clientY},touchmoveFunc:function(e){window.widget.thumbnail.movingflag=true;var e=window.event.targetTouches[0];var c=e.clientX-this.nowx;var b=e.clientY-this.nowy;var a=parseInt(this.cc.style.left)+c;var f=parseInt(this.cc.style.top)+b;if(this.isHorizontal){if(c>0){if(a>0){this.cc.style.left="0px"}else{this.cc.style.left=a+"px"}}else{if(parseInt(this.cc.style.left)<=(this.mc.clientWidth-this.cc.clientWidth)){this.cc.style.left=(this.mc.clientWidth-this.cc.clientWidth)+"px"}else{this.cc.style.left=a+"px"}}}else{if(b>0){if(f>0){this.cc.style.top="0px"}else{this.cc.style.top=f+"px"}}else{if(parseInt(this.cc.style.top)<=(this.mc.clientHeight-this.cc.clientHeight)){this.cc.style.top=(this.mc.clientHeight-this.cc.clientHeight)+"px"}else{this.cc.style.top=f+"px"}}}this.nowx=e.clientX;this.nowy=e.clientY},mouseupFunc:function(a){window.widget.thumbnail.movingflag=false;this.nowx=0;this.nowy=0;this.mc.removeEventListener("mousemove",this.mouseoverEventHandler,false);this.outerContainer.removeEventListener("mouseup",this.targetmouseupEventHandler,false);document.documentElement.removeEventListener("mouseup",this.dodymouseupEventHaldler,false)},touchendFunc:function(a){window.widget.thumbnail.movingflag=false;this.nowx=0;this.nowy=0;this.mc.removeEventListener("touchmove",this.mouseoverEventHandler,false);this.outerContainer.removeEventListener("touchend",this.targetmouseupEventHandler,false);document.documentElement.removeEventListener("touchend",this.dodymouseupEventHaldler,false)}};window.widget.thumbnail.event={};window.widget.thumbnail.event.rightNavigate=function(a,b){if(b.slideAnimateHandler){clearTimeout(b.slideAnimateHandler)}if(b.isHorizontal){if(parseInt(b.cc.style.left)<=(b.mc.clientWidth-b.cc.clientWidth)){b.cc.style.left=(b.mc.clientWidth-b.cc.clientWidth)+"px"}else{b.cc.style.left=(parseInt(b.cc.style.left)-2)+"px";b.slideAnimateHandler=setTimeout(function(){window.widget.thumbnail.event.rightNavigate(a,b)},20)}}else{if(parseInt(b.cc.style.top)<=(b.mc.clientHeight-b.cc.clientHeight)){b.cc.style.top=(b.mc.clientHeight-b.cc.clientHeight)+"px"}else{b.cc.style.top=(parseInt(b.cc.style.top)-2)+"px";b.slideAnimateHandler=setTimeout(function(){window.widget.thumbnail.event.rightNavigate(a,b)},20)}}};window.widget.thumbnail.event.leftNavigate=function(a,b){if(b.slideAnimateHandler){clearTimeout(b.slideAnimateHandler)}if(b.isHorizontal){if(parseInt(b.cc.style.left)>=0){b.cc.style.left="0px"}else{b.cc.style.left=(parseInt(b.cc.style.left)+2)+"px";b.slideAnimateHandler=setTimeout(function(){window.widget.thumbnail.event.leftNavigate(a,b)},20)}}else{if(parseInt(b.cc.style.top)>=0){b.cc.style.top="0px"}else{b.cc.style.top=(parseInt(b.cc.style.top)+2)+"px";b.slideAnimateHandler=setTimeout(function(){window.widget.thumbnail.event.leftNavigate(a,b)},20)}}};window.widget.thumbnail.event.stopSlide=function(a){clearTimeout(a.slideAnimateHandler)};window.widget.thumbnail.changeSize=function(){window.widget.thumbnail.changeOriental()};window.widget.thumbnail.changeOriental=function(){for(__ in window.widget.thumbnail.content){var a=window.widget.thumbnail.content[__];if(a.type=="mainwindow"){var e=document.documentElement.clientHeight/a.oHeight;var c=document.documentElement.clientWidth/a.oWidth;var b=Math.min(e,c);a.outerContainer.style.left=(a.realleft*c)+"px";a.outerContainer.style.top=(a.realtop*e)+"px"}}};window.addEventListener("resize",window.widget.thumbnail.changeSize,false);window.addEventListener("orientationchange",window.widget.thumbnail.changeOriental,false);window.widget.thumbnail.changeScene=function(e){for(__ in window.widget.thumbnail.content){var a=window.widget.thumbnail.content[__];if(a){for(var b=0;b<a.tbos.length;b++){var c=a.tbos[b];if(e==c.data.sceneid){c.imagediv.parentNode.style.border="solid 1px "+c.data.hover;if(c.textdiv){c.textdiv.style.background=c.data.hover}}else{c.imagediv.parentNode.style.border="solid 1px "+c.data.common;if(c.textdiv){c.textdiv.style.background=c.data.common}}}}}};