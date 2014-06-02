

function getMover(){
    var pos = new Vector2D(0, $(window).height()-10);
    var veloc = new Vector2D(9,-13);
    var acc = new Vector2D(0,0);
    //m = new Mover('#ellipse1', pos, veloc, acc, 2);
    //m = new Rect('#rect1', pos, veloc, acc, 2);

    var m = new Mover('#circle1', pos, veloc, acc, 2);


    return m;
 }

function animateMover(m){
	var gravity = new Vector2D(0,0.1*m.mass);
    //wind = new Vector2D(0.04,0);
    var circleIntervalId = window.setInterval( function(){
        friction = Vector2D.getNormalized(m.velocity)
        friction.mult(-0.05)
         m.applyForce(friction);
         m.applyForce(gravity);
         //m.applyForce(wind);
         m.update()
         m.show()
         m.checkEdges()
         m.checkIfFinished(circleIntervalId)
        
    }, 10);

}

$(document).ready(function() {
	var mover = getMover();
	 animateMover(mover);
	console.log(mover.position);
	// drawFractal

});


$(window).resize(function () {
    // reset svg each time 

});