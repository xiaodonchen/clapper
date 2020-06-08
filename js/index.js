
$(function(){
    
	$('.j-sle').click(function(){
        $('.right-sel').toggle();
        $('.right-sel').is(":hidden") ? $('body').css('overflow','auto') : $('body').css('overflow','hidden');
	})
        $(".j-img-h").mouseenter(function(){
                $(this).find('.no-h').addClass('hide')
                $(this).find('.h').removeClass('hide')
        }).mouseleave( function(){
                $(this).find('.no-h').removeClass('hide')
                $(this).find('.h').addClass('hide')
        });
	
});