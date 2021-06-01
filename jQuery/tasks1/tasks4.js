$('.box-container').children().click(function(e) {
    $(this).hide();
});

$('#checkbox').change(function(){
    let $curcle = $('.circle');

    if ($(this).is(':checked')) {
        $curcle.animate({left: $('.circle-container').width() - $curcle.width()},2000);
    } else {
        $curcle.animate({left: '0px'},3000);
    }
});

