$(function(){

//Adjust slider height

var windheight=$(window).height(),
upperbarheight=$('.upper-bar').innerHeight(),
navheight=$('.navbar').innerHeight();

$('.slider,.carousel-item').height(windheight - (upperbarheight+navheight));

//New_product

$('.new-products ul li').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');

if($(this).data('class')==='all'){

	$('.new-images .col-sm').css('opacity','1');
}
else{
	$('.new-images .col-sm').css('opacity','0.1');
	$($(this).data('class')).parent().css('opacity','1');
}




});


});