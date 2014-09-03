//This is the  JavaScript for www.icharleshu.com/about
//This file is lincenced only for www.icharleshu.com
//This file is powered by Charles Hu on Nov.21,2012.

$.noConflict();
jQuery(document).ready(function($){
	//Plug-in implementation
	$(".gallery").fancybox();
	
	//Switch Leader Section
	$("#linkToJacob").click(function(){
		setTimeout(function(){$("#charlesBioSection").css({display: "none"}); $("#jacobSocialLinks").css({opacity: "1"});}, 400);
		$("#jacobBioSection").css({display: "block"});
		$("#charlesAvatar").css({opacity: "0", left: "55%"});
		$("#charlesBioTextSection").css({opacity: "0", left: "0px"});
		$("#charlesSocialLinks").css({opacity: "0"});
		$("#leaderIndicator").css({left: "760px"});
		setTimeout(function(){
			$("#jacobAvatar").css({opacity: "1", left: "55%"});
			$("#jacobBioTextSection").css({opacity: "1", left: "25px"});
		}, 50);
	});
	
	$("#linkToCharles").click(function(){
		setTimeout(function(){$("#jacobBioSection").css({display: "none"}); $("#charlesSocialLinks").css({opacity: "1"});}, 400);
		$("#charlesBioSection").css({display: "block"});
		$("#jacobAvatar").css({opacity: "0", left: "0px"});
		$("#jacobBioTextSection").css({opacity: "0", left: "350px"});
		$("#leaderIndicator").css({left: "420px"});
		setTimeout(function(){
			$("#charlesAvatar").css({opacity: "1", left:"0px"});
			$("#charlesBioTextSection").css({opacity: "1", left: "350px"});
		}, 50);
	});
});