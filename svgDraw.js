var randomColor = false;
 var movers = []

$(document).ready(function() {
    addDescription('click anywhere and see what happens');
    addRandomColorPossibility();
    movers = addPredefinedMovers(); //list
    displaySVGState();
    $( "#text_description" ).change(function() {alert("bok")});
    
    $('.random_color').click(function() {
       randomColor = !randomColor;
       changePolygonColor(randomColor);
    });

	$(window).click(function(e) {
        if (movers.length >100){      // if array is larger than 100  
            hideMover(movers[0]);   // hide first element 
            movers.splice(0,1)      // pop  to add a new one
        }
        movers.push(makeRandomMover(e, randomColor));
    });
	// drawFractal


});
$(window).load(function () {
    $(window).trigger('resize');
});

$(window).resize(function () {
    recalibrateDescription();
    addRandomColorPossibility();
    for (var i in movers){
        if (!movers[i].isMoving)
            animateGravity(movers[i]);
    }
});