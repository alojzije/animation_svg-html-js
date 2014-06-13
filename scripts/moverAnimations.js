function animateGravity(m){
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