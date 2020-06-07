
$(function(){
    
	$('.j-sle').click(function(){
        $('.right-sel').toggle();
        $('.right-sel').is(":hidden") ? $('body').css('overflow','auto') : $('body').css('overflow','hidden');
	})
	 
	
});