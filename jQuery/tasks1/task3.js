$('.list').click(function(e) {
    $('.box-container').children().toggleClass('red');
    alert($(e.target).text());
});

$('.list').children().hover(function(){
        $(this).addClass('pink-list');
    }, function(){
        $(this).removeClass('pink-list');
});

$('.box-container').children().click(function(){
    $(this).toggleClass('red');
});
