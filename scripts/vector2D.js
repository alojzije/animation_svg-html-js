// class Vector2D (has methods and static methods)
// default values for new Vector2D():
// x,y = 0,0
function Vector2D(x,y){
    this.x = isFinite(x) ? x : 0;        // check if args are finite numbers
    this.y = isFinite(y) ? y : 0;        // otherwise set (x,y) to (0,0)
}

// instance methods
Vector2D.prototype.add = function (other) {
 	this.x = this.x + other.x;
 	this.y = this.y + other.y;
}
Vector2D.prototype.sub = function (other) {
	this.x = this.x - other.x;
  	this.y = this.y - other.y;
}
Vector2D.prototype.mult = function (c) {
	if (!isFinite(c)) c = 0;
  	this.x = this.x * c;
  	this.y = this.y * c;
}
Vector2D.prototype.getMagnitude = function () {
  	return Math.sqrt(this.x * this.x + this.y*this.y);
}
Vector2D.prototype.normalize = function () {
  	var mag = this.getMagnitude();
  	this.mult(1/mag)
}
Vector2D.prototype.getCopy = function () {
  	return new Vector2D(this.x, this.y);
}

// static methods (all return a new vector2D instance)
Vector2D.add = function (vect1, vect2) {
	var x = vect1.x + vect2.x;
	var y = vect1.y + vect2.y;
	return new Vector2D(x, y);
}
Vector2D.sub = function (vect1, vect2) {
	var x = vect1.x - vect2.x;
	var y = vect1.y - vect2.y;
	return new Vector2D(x, y);
}
Vector2D.mult = function (vect, c) {
	if (!isFinite(c)) c = 0;
	var x = vect.x * c;
	var y = vect.y * c;
	return new Vector2D(x, y);
}
Vector2D.getNormalized = function (vect) {
	var mag = vect.getMagnitude();
	return Vector2D.mult(vect, 1/mag)
}
Vector2D.copy = function (vect) {
	return new Vector2D(vect.x, vect.y);
}