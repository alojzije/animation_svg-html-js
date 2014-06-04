var htmlState = [
'&lt;html&gt; '    ,
'&ensp;             &lt;body&gt;'  ,
'&ensp;&ensp;&ensp; &lt;svg&gt;' ,
''          ,
'&ensp;&ensp;&ensp; &lt;/svg&gt;',
''          ,
'&ensp;&ensp;&ensp; &lt;script&gt;...&lt;/script&gt;',
'&ensp;             &lt;/body&gt;' ,
'&lt;/html&gt;']


function randomizeColor(m){
    var r   = parseInt(Math.random()*255);
    var g   = parseInt(Math.random()*255);
    var b   = parseInt(Math.random()*255);
    var rgb = 'fill:rgb(' + r + ',' + g + ',' + b + ');';
    $(m.domId).attr('style', rgb);

}

function makeRandomMover(e){
    var x = (e.pageX);
    var y = (e.pageY);
    var types = ['circle','ellipse', 'rect'];

    //var type = types[Math.floor(Math.random() * types.length)]      // random svg <type>
    var type = 'circle'
    var m = moverFactory(type, new Vector2D(x,y));
    
    m.setDimensions(Math.random()*35 + 5, Math.random()*35 + 5); //random size
    animateGravity(m); 
    //randomizeColor(m)
    
    updateStateTxt(type);
   
}

$(document).ready(function() {
    addDescription('click anywhere and see what happens');
    addPredefinedMovers(); 
    displaySVGState();

	$(window).click(function(e) {
        makeRandomMover(e) 
    });
	// drawFractal

});

$(window).resize(function () {
    recalibrateDescription();
});