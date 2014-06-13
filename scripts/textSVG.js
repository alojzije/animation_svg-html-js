// general function
function addText(message, x, y){
    var id  = 'text' + $('text').length;
    var txt = $(SVG('text'))
                .attr('id', id)
                .text(message)
                .appendTo($('#svg1'));

    x = isFinite(x) ? x : 0;
    y = isFinite(y) ? y : 0;

    var w = document.getElementById(id).getBoundingClientRect().width;
    var h = document.getElementById(id).getBoundingClientRect().height;
    txt.attr('x', x - w/2);
    txt.attr('y', y - h/2);
    
}

function addDescription(message){
    var id  = 'text_description';
    var txt = $(SVG('text'))
                .attr('id', id)
                .text(message)
                .appendTo($('#svg1'));

    var w = document.getElementById(id).getBoundingClientRect().width;
    var h = document.getElementById(id).getBoundingClientRect().height;

    txt.attr('x', $(window).width()/2   - w/2);
    txt.attr('y', $(window).height()/2  - h/2);
    
}

function recalibrateDescription(){
    var id  = 'text_description';
    var txt = $('#'+ id);
    var w = document.getElementById(id).getBoundingClientRect().width;
    var h = document.getElementById(id).getBoundingClientRect().height;

    txt.attr('x', $(window).width()/2   - w/2);
    txt.attr('y', $(window).height()/2  - h/2);
}

function displaySVGState(){
    // create new txt element, add it to <svg>
    var id  = 'svg_state';
    var txt = $(SVG('text'))
                .attr('id', id)
                .attr('x', 0)
                .attr('y', 0) 
                .appendTo($('#svg1'));

    // what will be printed out
    var state = [
        '<svg>',
        '<rect/> ',
        '<circle/> ',
        '<ellipse/> ',    
        '<text> ... </text>',     
        '</svg>'];

    for (var i in state){
        var found = state[i].match(/\<([a-z]+)[\>\/]{1}/i);
        var type  = found && found[1] ? found[1] : '';

        var tSpan = $(SVG('tspan'))
                .attr('dy', 25)
                .attr('id',  'txt_'+ type );
        if (type == 'svg' || type == ''){
            tSpan.attr('x', 15)
                .text(state[i])
                .appendTo(txt);

        }else if ($(type).length){
            tSpan.attr('x', 40)
                .text(state[i] + ' x ' + $(type).length)
                .appendTo(txt)
        }
    }
}

function updateStateTxt(type){
    if  ($('#txt_'+type).length == 0){
       var tSpan = $(SVG('tspan'))
            .attr('x' , 40)
            .attr('dy', 25)
            .attr('id', 'txt_'+type)
            $('#txt_svg').after(tSpan);
    }
    
    $('#txt_'+type).text('<'+type+'/>  x ' + $(type).length)
}

   

