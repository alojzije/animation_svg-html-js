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
// makes SVG object <type>
function SVG(type){
   return document.createElementNS('http://www.w3.org/2000/svg', type);
}

// function creates SVG element <type> (<circle>, <elipse>, <rect>) in html with (position.x, position.y)
// if no arguments supplied, SVG type defaults to circle 
// also function creates and returns a mover object asociated with the SVG element via uniqe ID
// mover is instantiated with a position, velocity and acceleration Vector2D and mass if supplied, otherwise default values are used
// all values (position, veloity, acc can be changed later)
function moverFactory(type, positionVect, velocityVect, accVect, mass){
    if ( $.inArray(type,  ['circle', 'ellipse', 'rect']) == -1) type ='circle';
    positionVect = positionVect instanceof Vector2D ? positionVect :  new Vector2D(); 
    var id = ''
    if (type == 'circle'){
        id   = 'circle' + $('circle').length;
        $(SVG(type))
            .attr('id', id)
            .attr('cx', positionVect.x)
            .attr('cy', positionVect.y)
            .attr('r' , 40)
            .attr('fill', '#000')
            .appendTo($('#svg1'));
        return new Circle('#'+id, positionVect, velocityVect, accVect, mass);
    }
    else if (type == 'ellipse'){
        id   = 'ellipse' + $('ellipse').length;
        $(SVG(type))
            .attr('id', id)
            .attr('cx', positionVect.x)
            .attr('cy', positionVect.y)
            .attr('rx', 20)
            .attr('ry', 30)
            .attr('fill', '#000')
            .appendTo($('#svg1'));
        return new Ellipse('#'+id, positionVect, velocityVect, accVect, mass);
    }
    else if (type == 'rect'){
        id   = 'rect' + $('rect').length;
        $(SVG(type))
            .attr('id', id)
            .attr('x' , positionVect.x)
            .attr('y' , positionVect.y)
            .attr('width' , 50)
            .attr('height', 50)
            .attr('fill', '#000')
            .appendTo($('#svg1'));
        return new Rect('#'+id, positionVect, velocityVect, accVect, mass);
    }
    
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
    var types = ['circle', 'ellipse', 'rect'];
	var mover = getMover('#circle0', 0, $(window).height()-10);
	 animateMover(mover);
    var m = moverFactory('circle');
    m.position.x = $(window).width()-50;
    m.position.y = $(window).height()-50;
    m.velocity.y = -10;
    m.velocity.x = -5;
    animateMover(m);        

	$(window).click(function(e) {
      var x = (e.pageX);
      var y = (e.pageY);
      animateMover(moverFactory(types[Math.floor(Math.random() * types.length)],
                                 new Vector2D(x,y))); // random svg type
      

    });
	// drawFractal

});


$(window).resize(function () {
    // reset svg each time 
     for (m in movers)
         animateMover(m);

});