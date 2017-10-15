// This animation js was referenced from Rach Smith and modified by Alex Wang
// Ssource: https://codepen.io/rachsmith/pen/fBoiD?q=circle&limit=rachsmith

(function(){
    var stage, textStage, form, input;
    var circles, textPixels, textFormed;
    var offsetX, offsetY, text;
    var colors = ['#f9fbff','#70FFEE','#E5FF70'];
    
    function init() {
        initStages();
        initForm();
        initCircles();
        animate();
        addListeners();
    }


    // Init Canvas
    function initStages() {
        offsetX = (window.innerWidth-600)/2;
        offsetY = (window.innerHeight-300)/2;

        stage = new createjs.Stage("stage");
        stage.canvas.width = window.innerWidth;
        stage.canvas.height = window.innerHeight;
    }

    function initForm() {
        form = document.getElementById('form');
        form.style.top = offsetY+200+'px';
        form.style.left = offsetX+'px';
        input = document.getElementById('inputText');
    }

    function initCircles() {
        circles = [];
        for(var i=0; i<100; i++) {
            var circle = new createjs.Shape();
            var r = 3.5;
            var x = window.innerWidth*Math.random();
            var y = window.innerHeight*Math.random();
            var color = colors[Math.floor(i%colors.length)];
            var alpha = 0.2 + Math.random()*0.5;
            circle.alpha = alpha;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);
        }
        for(var i=0; i<100; i++) {
            var circle = new createjs.Shape();
            var r = 2.5;
            var x = window.innerWidth*Math.random();
            var y = window.innerHeight*Math.random();
            var color = colors[Math.floor(i%colors.length)];
            var alpha = 0.2 + Math.random()*0.5;
            circle.alpha = alpha;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);
        }
        for(var i=0; i<50; i++) {
            var circle = new createjs.Shape();
            var r = 1;
            var x = window.innerWidth*Math.random();
            var y = window.innerHeight*Math.random();
            var color = colors[Math.floor(i%colors.length)];
            var alpha = 0.2 + Math.random()*0.5;
            circle.alpha = alpha;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);
        }
    }


    // animating circles
    function animate() {
        stage.update();
        requestAnimationFrame(animate);
    }

    function tweenCircle(c, dir) {
        if(c.tween) c.tween.kill();
        if(dir == 'in') {
            c.tween = TweenLite.to(c, 0.4, {x: c.originX, y: c.originY, ease:Quad.easeInOut, alpha: 1, radius: 5, scaleX: 0.4, scaleY: 0.4, onComplete: function() {
                c.movement = 'jiggle';
                tweenCircle(c);
            }});
        } else if(dir == 'out') {
            c.tween = TweenLite.to(c, 0.8, {x: window.innerWidth*Math.random(), y: window.innerHeight*Math.random(), ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5, scaleX: 1, scaleY: 1, onComplete: function() {
                c.movement = 'float';
                tweenCircle(c);
            }});
        } else {
            if(c.movement == 'float') {
                c.tween = TweenLite.to(c, 5 + Math.random()*3.5, {x: c.x + -100+Math.random()*200, y: c.y + -100+Math.random()*200, ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            } else {
                c.tween = TweenLite.to(c, 0.05, {x: c.originX + Math.random()*3, y: c.originY + Math.random()*3, ease:Quad.easeInOut,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            }
        }
    }

    // event handlers
    function addListeners() {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

        });
    }


    var x = 0 

    window.onload = function() { 
        init();
        $(window).resize(function(){
           init();
       });
    };
})();