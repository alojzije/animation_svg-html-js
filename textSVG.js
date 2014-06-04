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

function displayCurrentHtml(){
    var id  = 'current_Html';
    var txt = $(SVG('text'))
                .attr('id', id)
                .appendTo($('#svg1'));
    for (var i in currentHtml){
        $(SVG('tspan'))
            .attr('x' , 0)
            .attr('dy', 27)
            .html(currentHtml[i])
            .appendTo(txt)
    }

    var w = document.getElementById(id).getBoundingClientRect().width
    var h = document.getElementById(id).getBoundingClientRect().height;

    txt.attr('x', 0 );
    txt.attr('y', 0 );

    $(SVG('tspan'))
            .attr('x' , 0)
            .attr('dy', 27)
            .html('lal')
            .appendTo(txt).show('slow');
}