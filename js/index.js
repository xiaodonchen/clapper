var video = document.getElementById('pc-video');
$(function(){
    $(".do-list ul li").mouseenter(function(){
        $(this).find('.do-img').addClass('hide')
        $(this).find('.do-img-h').removeClass('hide')
        // $('.imgShow .bigImg').attr('src', $(this).find('img').attr('src'));
    }).mouseleave( function(){
        $(this).find('.do-img').removeClass('hide')
        $(this).find('.do-img-h').addClass('hide')
    });
	$('.j-sle').click(function(){
		$('.right-sel').toggle();
	})
	 
	if($('.pc-video').css("display") == "none"){
		video.pause();
	}else{
		 video.play();
	}
});