$(function(){
    $(".do-list ul li").mouseenter(function(){
        $(this).find('.do-img').addClass('hide')
        $(this).find('.do-img-h').removeClass('hide')
        // $('.imgShow .bigImg').attr('src', $(this).find('img').attr('src'));
    }).mouseleave( function(){
        $(this).find('.do-img').removeClass('hide')
        $(this).find('.do-img-h').addClass('hide')
    });

});