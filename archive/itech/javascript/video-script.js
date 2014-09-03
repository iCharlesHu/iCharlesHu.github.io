//This is the master video JavaScript for www.icharleshu.com
//This file is lincenced only for www.icharleshu.com
//This file is powered by Charles Hu on Feb.6,2012

$.noConflict();
jQuery(document).ready(function($){
	//Poster Overlay
	$(".playVideo").click(function(){
		var sourceVideo = $(".video").get(0);
		sourceVideo.play();
		$(".videoOverlay").fadeOut('300ms');
	});
});