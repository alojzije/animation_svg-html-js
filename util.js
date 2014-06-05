function makeRandomMover(e, randomColor){
    var x = (e.pageX);
    var y = (e.pageY);
    var types = ['circle','ellipse', 'rect'];

    //var type = types[Math.floor(Math.random() * types.length)]      // random svg <type>
    var type = 'circle'
    var m    = moverFactory(type, new Vector2D(x,y));
  
    m.setDimensions(Math.random()*35 + 5, Math.random()*35 + 5); //random size
    m.mass   = m.rx * 0.1;
    animateGravity(m); 

    if (randomColor) randomizeColor(m);

    updateStateTxt(type);
    return m;
}


function randomizeColor(m){
    var r   = parseInt(Math.random()*255);
    var g   = parseInt(Math.random()*255);
    var b   = parseInt(Math.random()*255);
    var rgb = 'fill:rgb(' + r + ',' + g + ',' + b + ');';
    $(m.domId).attr('style', rgb);
}

function hideMover(m){
    $(m.domId).attr('style','display:none;');
}

function addRandomColorPossibility(){
 
    var w = document.getElementById('text_description').getBoundingClientRect().width/2;
    var h = document.getElementById('text_description').getBoundingClientRect().height;
    var x = $(window).width() /2 + 1.01*w ;
    var y = $(window).height()/2 - 1.5*h ;
 
    var c = 13 ;
    var a = c/2;
    var b = c* Math.sin(Math.PI/3);
    var points = [[x  , y+b  ],
                 [x+a  , y    ],
                 [x+a+c, y    ],
                 [x+2*c, y+b  ],
                 [x+a+c, y+2*b],
                 [x+a  , y+2*b]]



    var center = [x+a+c/2, y+b]
    if ($('.random_color').length){
        $('#polygon0').attr('points',  points[0] +' '+ points[1] +' '+ center);
        $('#polygon1').attr('points',  points[1] +' '+ points[2] +' '+ center);
        $('#polygon2').attr('points',  points[2] +' '+ points[3] +' '+ center);
        $('#polygon3').attr('points',  points[3] +' '+ points[4] +' '+ center);
        $('#polygon4').attr('points',  points[4] +' '+ points[5] +' '+ center);
        $('#polygon5').attr('points',  points[5] +' '+ points[0] +' '+ center);

    }
    else{
        $(SVG('polygon'))
        .attr('fill'  , '#23239D')
        .attr('id'    , 'polygon0')
        .attr('class' , 'random_color')
        .attr('style' , 'stroke:#fff; stroke-width: 1; opacity:0.5')
        .attr('points',  points[0] +' '+ points[1] +' '+ center)
        .appendTo($('#svg1'));

        $(SVG('polygon'))
        .attr('fill'  , '#AB210F')
        .attr('id'    , 'polygon1')
        .attr('class' , 'random_color')
        .attr('style' , 'stroke:#fff; stroke-width: 1; opacity:0.5')
        .attr('points',  points[1] +' '+ points[2] +' '+ center)
        .appendTo($('#svg1'))

        $(SVG('polygon'))
        .attr('fill'  , '#681496')
        .attr('id'    , 'polygon2')
        .attr('class' , 'random_color')
        .attr('style' , 'stroke:#fff; stroke-width: 1; opacity:0.5')
        .attr('points',  points[2] +' '+ points[3] +' '+ center)
        .appendTo($('#svg1'))

        $(SVG('polygon'))
        .attr('fill'  , '#0C8787')
        .attr('id'    , 'polygon3')
        .attr('class' , 'random_color')
        .attr('style' , 'stroke:#fff; stroke-width: 1; opacity:0.5')
        .attr('points',  points[3] +' '+ points[4] +' '+ center)
        .appendTo($('#svg1'))

        $(SVG('polygon'))
        .attr('fill'  , '#cccc33')
        .attr('id'    , 'polygon4')
        .attr('class' , 'random_color')
        .attr('style' , 'stroke:#fff; stroke-width: 1; opacity:0.5')
        .attr('points',  points[4] +' '+ points[5] +' '+ center)
        .appendTo($('#svg1'))

        $(SVG('polygon'))
        .attr('fill'  , '#ddd')
        .attr('id'    , 'polygon5')
        .attr('class' , 'random_color')
        .attr('style' , 'stroke:#fff; stroke-width: 1; opacity:0.5')
        .attr('points',  points[5] +' '+ points[0] +' '+ center)
        .appendTo($('#svg1'))
    }
}

function changePolygonColor(currently_color){
    if (currently_color){
        $('#polygon0').attr('fill' , '#555555');
        $('#polygon1').attr('fill' , '#666666');
        $('#polygon2').attr('fill' , '#777777');
        $('#polygon3').attr('fill' , '#999999');
        $('#polygon4').attr('fill' , '#bbbbbb');
        $('#polygon5').attr('fill' , '#dddddd');
    }else{
        $('#polygon0').attr('fill' , '#23239D');
        $('#polygon1').attr('fill' , '#AB210F');
        $('#polygon2').attr('fill' , '#681496');
        $('#polygon3').attr('fill' , '#0C8787');
        $('#polygon4').attr('fill' , '#cccc33');
        $('#polygon5').attr('fill' , '#dddddd');

    }
}