$('body').html('');

$('body').append($("<button id='btn' class='btn btn-primary'>Click me1</button>").click(() => {
    $.publish('changeColorBox', {id: 2, color: "pink"});
}))
$('body').append($("<button id='btn' class='btn btn-primary'>Click me2</button>").click(() => {
    $.publish('changeColorBox', {id: 1, color: "pink"});
}))

var m = $("<div></div>")
m.laka = 1;
m.data('id', 1)
m.on('load', function () {
    $.subscribe('changeColorBox', (e, data) => {
        if (data.id === $(this).data('id')) {
            $(this).css('color', data.color);
            $(this).css('background-color', data.color);
            console.log('changeColor: ' + $(this).text());
        }
    })
    $.subscribe('changeColorBoxAll', (e, data) => {
        $(this).css('color', data.color);
        $(this).css('background-color', data.color);
        console.log('changeColor: ' + $(this).text());
    })
})
m.css('position', 'absolute');
m.css('display', 'block');
m.css('width', '200px');
m.css('height', '200px');
m.css('opacity', '0.5');
m.css('background-color', 'blue');

//todo: drag drop m by mouse
m.on('mousedown', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var top = $(this).css('top').replace('px', '');
    var left = $(this).css('left').replace('px', '');
    var dx = x - left;
    var dy = y - top;
    $(this).on('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        $(this).css('z-index', '999');
        $(this).css('opacity', '1');
        $(this).css('top', y - dy + 'px');
        $(this).css('left', x - dx + 'px');
    })
    $(this).on('mouseup', function () {
        $(this).css('opacity', '0.5');
        $(this).css('z-index', '1');
        $(this).off('mousemove');
    })
})
//event double click

m.on('dblclick', function (e) {
    $.publish('changeColorBoxAll', {color: "red"});
})

// ==================

var listBox = [];
for (var i = 0; i < 1000; i++) {
    var box = m.clone(true, true).data('id', i).trigger('load');
    box.css('top', Math.random() * 5000 + 'px');
    box.css('left', Math.random() * 5000 + 'px');
    listBox.push(box);
    $('body').append(box);
}


