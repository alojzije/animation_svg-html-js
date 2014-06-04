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
            .attr('rx', 4)
            .attr('ry', 4)
            .appendTo($('#svg1'));
        return new Rect('#'+id, positionVect, velocityVect, accVect, mass);
    }
    
}

// makes SVG object <type>
function SVG(type){
   return document.createElementNS('http://www.w3.org/2000/svg', type);
}