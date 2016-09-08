$(function(){
	$('#fcontent2,#fcontent3,#fcontent4').hide();
	$('#billTwo,#billThree,#billFour,#billFive').hide();
	$('#imgTwo,#imgThree').hide();
	
	/* 轮播图 */
	firstStep();
	
	/* 套餐 */
	$('#start-style').css({'background':'#FFFFFF','color':'#EE4533'});
	var mealValue = $('#myMeal').find('.select-btn');
	mealValue.mouseover(function(){
		mealValue.css({'background':'#EE4533','color':'#FFFFFF','border-bottom':'1px solid #F16A5C','border-top':'0px','border-left':'0px'});
		$(this).css({'background':'#FFFFFF','color':'#EE4533','border-left':'1px solid #F16A5C','border-top':'1px solid #F16A5C'});
		
		$('.taocan').hide();
		$('#'+$(this).attr('data-bill')).show();
	});
	
	/* 喵课堂 */
	var miaoClass = $('#class-miao').find('h4');
	miaoClass.mouseover(function(){
		$(this).css('color','#6AA7F0');
	});
	miaoClass.mouseleave(function(){
		$(this).css('color','#E54C3C');
	});
	
	/* 侧栏 */
	$(window).scroll(function(){

		var testHeight = $('#tip-box').outerHeight();
		var winHeight = $(window).height();
		var marginHeight  = (winHeight - testHeight)/2;
		var divTop = (marginHeight/winHeight)*100;
		$('#tip-box').css({'right':'0%','top':divTop+'%'});
	});
	qqFade();
	
	
});
/* 喵家族向左改变内容 */
var pageNum = 1;
function toContentLeft(){
	pageNum = pageNum - 1;
	if(pageNum >1){
		$('.familyContent').hide();
		$('#fcontent'+pageNum).show();
	}else if(pageNum = 1){
		pageNum = 1;
		$('.familyContent').hide();
		$('#fcontent'+pageNum).show();
	}else{
		pageNum = 1;
		$('.familyContent').hide();
		$('#fcontent'+pageNum).show();
	}
}
function toContentRight(){
	pageNum = $('#fcontent'+pageNum).attr('data-page');
	if(pageNum < 5){
		$('.familyContent').hide();
		$('#fcontent'+pageNum).show();
	}
	
}
/* --------------------------------------- */
function firstStep(){
	$('#imgThree,imgTwo').hide();
	$('#imgOne').show();
	setTimeout("secondStep()", 3000);
}
function secondStep(){
	$('#imgOne,imgThree').hide();
	$('#imgTwo').show();
	setTimeout("thirdStep()", 3000);
}
function thirdStep(){
	$('#imgTwo,imgOne').hide();
	$('#imgThree').show();
	setTimeout("firstStep()", 3000);
}
/* ------------------ */
function qqFade(){
	$('.qq-img').fadeOut();
	$('.qq-img').fadeIn();
	setTimeout("qqFade()", 500);
}