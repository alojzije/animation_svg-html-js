// class Rect() inherits class Mover()
// Rect  assumes <rect> SVG element
function Rect(domId, position, velocity, acceleration, mass){ 
    this.mass         =     isFinite(mass) && mass > 0   ? mass     : 1;  
    this.position     =     position instanceof Vector2D ? position :     new Vector2D(); 
    this.velocity     =     velocity instanceof Vector2D ? velocity :     new Vector2D(); 
    this.acceleration = acceleration instanceof Vector2D ? acceleration : new Vector2D(); 
    this.domId        =        domId instanceof String || typeof domId == 'string' ? domId : '';
    this.rx = this.getHeight();
    this.ry = this.getWidth();
}
// interites Mover()
Rect.prototype = new Mover();

// instance methods
Rect.prototype.getHeight = function () {
    if( $(this.domId).length > 0)                                                           // check if element exists
        if ($(this.domId).attr('height')) return parseInt($(this.domId).attr('height'));      // for SVG shapes <rect> 
    else return 0;
}

Rect.prototype.getWidth = function () {
    if( $(this.domId).length > 0)                                                           // check if element exists
        if ($(this.domId).attr('width')) return parseInt($(this.domId).attr('width'));      // for SVG shapes <rect> 
    else return 0;
}

Rect.prototype.show = function () {
   if ($(this.domId).length > 0) {               //check if element exist
        $(this.domId).attr("x", this.position.x);
        $(this.domId).attr("y", this.position.y);
    }
}
Rect.prototype.setDimensions = function (width, height) {
    if( $(this.domId).length > 0){                                                 // check if element exists           
        if (isFinite(width)) {
            $(this.domId).attr('width', width);
            this.rx = width;
        }
        if (isFinite(height)) {
            $(this.domId).attr('height', height);
            this.ry = height;
        }
    }
}