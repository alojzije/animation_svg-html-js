// class Circle() inherits class Mover()
// Circle  assumes <circle> SVG element
function Circle(domId, position, velocity, acceleration, mass){ 
    this.mass         =     isFinite(mass) && mass > 0   ? mass     : 1;  
    this.position     =     position instanceof Vector2D ? position :     new Vector2D(); 
    this.velocity     =     velocity instanceof Vector2D ? velocity :     new Vector2D(); 
    this.acceleration = acceleration instanceof Vector2D ? acceleration : new Vector2D(); 
    this.domId        =        domId instanceof String || typeof domId == 'string' ? domId : '';
    this.rx = this.getRadius();
    this.ry = this.rx
}
// interites Mover()
Circle.prototype = new Mover();

// instance methods
Circle.prototype.getRadius = function () {
    if( $(this.domId).length > 0)                                                   // check if element exists
        if ($(this.domId).attr('r')) return parseInt($(this.domId).attr('r'));      // for SVG shapes <circle> 
    else return 0;
}
