$('.list-words').find('li').each(function(index){
    if (index % 2 == 0) {
        $(this).addClass('red');
    } else {
        $(this).addClass('blue');
    }
});

$('.list-numbs').find('li').each(function(index){
    if (index >= $('.list-numbs').find('li').length - 3) {
        $(this).addClass('blue');
    }
});
