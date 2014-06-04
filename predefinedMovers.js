function addPredefinedMovers(){ 
    var m0 = moverFactory('circle', new Vector2D(0, $(window).height()-10), new Vector2D(9,-12));
    m0.mass = 2;
    animateGravity(m0);

    var m1 = moverFactory('circle');
    m1.setPosition( $(window).width()-50,  $(window).height()-50);
    m1.setVelocity(-15, -13);
    animateGravity(m1);  

    var m2 = moverFactory('circle');
    m2.setPosition( $(window).width()/2, $(window).height()-50);
    m2.setVelocity(-15, -1);
    animateGravity(m2);  
}