movers = []

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


function makeRandomMover(e){
    var x = (e.pageX);
    var y = (e.pageY);
    //var types = ['circle','ellipes' 'rect'];
    //var m = moverFactory(types[Math.floor(Math.random() * types.length)], new Vector2D(x,y)); // random svg type
    var m = moverFactory('circle', new Vector2D(x,y));
    m.setDimensions(Math.random()*35 + 5, Math.random()*35 + 5); //random size
    animateMover(m); 
}

function calibrateText(){
    w = document.getElementById('text1').getBoundingClientRect().width
    $('#text1').attr('x', $(window).width()/2 -w/2);
    $('#text1').attr('y', $(window).height()/2.75);
}

$(document).ready(function() {
    calibrateText();
    
	var mover = getMover('#circle0', 0, $(window).height()-10);
	 animateMover(mover);
    var m = moverFactory('circle');
    m.position.x = $(window).width()-50;
    m.position.y = $(window).height()-50;
    m.velocity.y = -15;
    m.velocity.x = -13;
    animateMover(m);  
    var m1 = moverFactory('circle');
    m1.position.x = $(window).width()/2;
    m1.position.y = $(window).height()-50;
    m1.velocity.y = -15;
    m1.velocity.x = -1;
    animateMover(m1);         

	$(window).click(function(e) {
        makeRandomMover(e)
        
    });
	// drawFractal

});


$(window).resize(function () {
    // reset svg each time 
 calibrateText();

});