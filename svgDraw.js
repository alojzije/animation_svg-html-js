var randomColor = false;



$(document).ready(function() {
    
    addDescription('click anywhere and see what happens');
    addRandomColorPossibility();
    addPredefinedMovers(); 
    displaySVGState();
    
    $('.random_color').click(function() {
       randomColor = !randomColor;
       changePolygonColor(randomColor);
    });

	$(window).click(function(e) {
        makeRandomMover(e, randomColor);
    });
	// drawFractal

});

$(window).resize(function () {
    recalibrateDescription();
    addRandomColorPossibility();
});