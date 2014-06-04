function makeRandomMover(e){
    var x = (e.pageX);
    var y = (e.pageY);
    //var types = ['circle','ellipes' 'rect'];
    //var m = moverFactory(types[Math.floor(Math.random() * types.length)], new Vector2D(x,y)); // random svg type
    var m = moverFactory('circle', new Vector2D(x,y));
    m.setDimensions(Math.random()*35 + 5, Math.random()*35 + 5); //random size
    animateGravity(m); 
}

$(document).ready(function() {
    addDescription('click anywhere and see what happens');
    addPredefinedMovers(); 

	$(window).click(function(e) {
        makeRandomMover(e) 
    });
	// drawFractal

});


$(window).resize(function () {
    recalibrateDescription();

});