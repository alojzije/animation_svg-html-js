// class Ellipse() inherits class Mover()
// Ellipse  assumes <ellipse> SVG element
function Ellipse(domId, position, velocity, acceleration, mass){ 
    this.mass         =     isFinite(mass) && mass > 0   ? mass     : 1;  
    this.position     =     position instanceof Vector2D ? position :     new Vector2D(); 
    this.velocity     =     velocity instanceof Vector2D ? velocity :     new Vector2D(); 
    this.acceleration = acceleration instanceof Vector2D ? acceleration : new Vector2D(); 
    this.domId        =        domId instanceof String || typeof domId == 'string' ? domId : '';
    this.rx = this.getRadiusX();
    this.ry = this.getRadiusY();
}
// interites Mover()
Ellipse.prototype = new Mover();

// instance methods
Ellipse.prototype.getRadiusX = function () {
    if( $(this.domId).length > 0)                                                   // check if element exists
        if ($(this.domId).attr('rx')) return parseInt($(this.domId).attr('rx'));    // for SVG shapes <ellipse> 
    else return 0;
}

Ellipse.prototype.getRadiusY = function () {
    if( $(this.domId).length > 0)                                                   // check if element exists
        if ($(this.domId).attr('ry')) return parseInt($(this.domId).attr('ry'));    // for SVG shapes <ellipse> 
    else return 0;
}
