// class Mover() animates one of 3 basic SVG shapes <ellipse> <circle>
// default values for new Mover():
// position, velocity, acceleration = Vector2D(0,0); domId =''; mass = 1
function Mover(domId, position, velocity, acceleration, mass){ 
    this.mass         =     isFinite(mass) && mass > 0   ? mass     : 1;  
    this.position     =     position instanceof Vector2D ? position :     new Vector2D(); 
    this.velocity     =     velocity instanceof Vector2D ? velocity :     new Vector2D(); 
    this.acceleration = acceleration instanceof Vector2D ? acceleration : new Vector2D(); 
    this.domId        =        domId instanceof String || typeof domId == 'string' ? domId : '';
    this.rx = this.getRadiusX();
    this.ry = this.getRadiusY();
}


// instance methods
Mover.prototype.applyForce = function (force) {
    var f = Vector2D.mult(force, 1/this.mass);
    this.acceleration.add(f);
}

Mover.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
}

Mover.prototype.show = function () {
   if ($(this.domId).length > 0) {               //check if element exist
        $(this.domId).attr("cx", this.position.x);
        $(this.domId).attr("cy", this.position.y);
    }
}

Mover.prototype.checkEdges = function () {
    if (this.position.x  <  this.rx){
        this.position.x  =  this.rx;
        this.velocity.x *= -1;
    }else if ( this.position.x + this.rx > $(window).width() ){
        this.position.x  = $(window).width() - this.rx;
        this.velocity.x *= -1;
    }

    if (this.position.y  <  this.ry){
        this.position.y  =  this.ry;
        this.velocity.y *= -1;
    }else if ( this.position.y + this.ry > $(window).height() ){
        this.position.y  = $(window).height() - this.ry;
        this.velocity.y *= -1;
    }
}


Mover.prototype.checkIfFinished = function (intervalId) {
    var err = 0.1;

    if (Math.abs(this.position.y + this.ry - $(window).height()) <  err && this.velocity.getMagnitude() < err ){
        clearInterval(intervalId);
        console.log("fin " + this.domId);
    }
}


Mover.prototype.getRadiusX = function () {
    if( $(this.domId).length > 0){                                                  // check if element exists
        if ($(this.domId).attr('rx')) return parseInt($(this.domId).attr('rx'));    // for SVG shapes <ellipse> <rect>
        if ($(this.domId).attr('r' )) return parseInt($(this.domId).attr('r' ));    // for SVG shape  <circle>
    }
    return 0;
}

Mover.prototype.getRadiusY = function () {
    if( $(this.domId).length > 0 ){                                                 // check if element exists
        if ($(this.domId).attr('ry')) return parseInt($(this.domId).attr('ry'));    // for SVG shapes <ellipse> <rect>
        if ($(this.domId).attr('r' )) return parseInt($(this.domId).attr('r' ));    // for SVG shape  <circle>
    }
    return 0;
}
