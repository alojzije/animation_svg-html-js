var randomColor = false;


$(document).ready(function() {
    
    addDescription('click anywhere and see what happens');
    addRandomColorPossibility();
    addPredefinedMovers(); 
    displaySVGState();
    $( "#text_description" ).change(function() {alert("bok")});
    
    $('.random_color').click(function() {
       randomColor = !randomColor;
       changePolygonColor(randomColor);
    });

	$(window).click(function(e) {
        makeRandomMover(e, randomColor);
    });
	// drawFractal


});
$(window).load(function () {
    $(window).trigger('resize');
});

$(window).resize(function () {
    recalibrateDescription();
    addRandomColorPossibility();
});