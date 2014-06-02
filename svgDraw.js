

function getMover(id,x,y){
    var xCoord = isFinite(x) ? x: 0;
    var yCoord = isFinite(y) ? y: 0;
    var pos = new Vector2D(xCoord, yCoord);
    var veloc = new Vector2D(9,-12);
    var acc = new Vector2D(0,0);
    //m = new Mover('#ellipse1', pos, veloc, acc, 2);
    //m = new Rect('#rect1', pos, veloc, acc, 2);

    var m = new Mover(id, pos, veloc, acc, 2);


    return m;
 }

function animateMover(m){
	var gravity = new Vector2D(0,0.1*m.mass);
    //wind = new Vector2D(0.04,0);
    var intervalId = window.setInterval( function(){
        friction = Vector2D.getNormalized(m.velocity)
        friction.mult(-0.03)
         m.applyForce(friction);
         m.applyForce(gravity);
         //m.applyForce(wind);
         m.update()
         m.show()
         m.checkEdges()
         m.checkIfFinished(intervalId)
        
    }, 10);

}

$(document).ready(function() {
	var mover = getMover('#circle1', 0, $(window).height()-10);
	 animateMover(mover);
     animateMover(getMover('#circle2'));

	console.log(mover.position);
	// drawFractal

});


$(window).resize(function () {
    // reset svg each time 

});