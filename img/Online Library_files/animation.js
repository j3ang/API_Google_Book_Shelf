!function(){function n(){e(),t(),a(),i(),r()}function e(){m=(window.innerWidth-600)/2,u=(window.innerHeight-300)/2,(d=new createjs.Stage("stage")).canvas.width=window.innerWidth,d.canvas.height=window.innerHeight}function t(){(h=document.getElementById("form")).style.top=u+200+"px",h.style.left=m+"px",l=document.getElementById("inputText")}function a(){w=[];for(h=0;h<100;h++){var n=new createjs.Shape,e=3.5,t=window.innerWidth*Math.random(),a=window.innerHeight*Math.random(),i=s[Math.floor(h%s.length)],r=.2+.5*Math.random();n.alpha=r,n.radius=e,n.graphics.beginFill(i).drawCircle(0,0,e),n.x=t,n.y=a,w.push(n),d.addChild(n),n.movement="float",o(n)}for(h=0;h<100;h++){var n=new createjs.Shape,e=2.5,t=window.innerWidth*Math.random(),a=window.innerHeight*Math.random(),i=s[Math.floor(h%s.length)],r=.2+.5*Math.random();n.alpha=r,n.radius=e,n.graphics.beginFill(i).drawCircle(0,0,e),n.x=t,n.y=a,w.push(n),d.addChild(n),n.movement="float",o(n)}for(var h=0;h<50;h++){var n=new createjs.Shape,e=1,t=window.innerWidth*Math.random(),a=window.innerHeight*Math.random(),i=s[Math.floor(h%s.length)],r=.2+.5*Math.random();n.alpha=r,n.radius=e,n.graphics.beginFill(i).drawCircle(0,0,e),n.x=t,n.y=a,w.push(n),d.addChild(n),n.movement="float",o(n)}}function i(){d.update(),requestAnimationFrame(i)}function o(n,e){n.tween&&n.tween.kill(),"in"==e?n.tween=TweenLite.to(n,.4,{x:n.originX,y:n.originY,ease:Quad.easeInOut,alpha:1,radius:5,scaleX:.4,scaleY:.4,onComplete:function(){n.movement="jiggle",o(n)}}):"out"==e?n.tween=TweenLite.to(n,.8,{x:window.innerWidth*Math.random(),y:window.innerHeight*Math.random(),ease:Quad.easeInOut,alpha:.2+.5*Math.random(),scaleX:1,scaleY:1,onComplete:function(){n.movement="float",o(n)}}):"float"==n.movement?n.tween=TweenLite.to(n,5+3.5*Math.random(),{x:n.x+-100+200*Math.random(),y:n.y+-100+200*Math.random(),ease:Quad.easeInOut,alpha:.2+.5*Math.random(),onComplete:function(){o(n)}}):n.tween=TweenLite.to(n,.05,{x:n.originX+3*Math.random(),y:n.originY+3*Math.random(),ease:Quad.easeInOut,onComplete:function(){o(n)}})}function r(){h.addEventListener("submit",function(n){n.preventDefault()})}var d,h,l,w,m,u,s=["#f9fbff","#70FFEE","#E5FF70"];window.onload=function(){n(),$(window).resize(function(){n()})}}();