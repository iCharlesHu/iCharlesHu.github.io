//This is the main JavaScript for www.icharleshu.com
//This file is lincenced only for www.icharleshu.com
//This file is powered by Charles Hu on Sep.21,2012.

$.noConflict();
jQuery(document).ready(function($){
	//Plug-in implementation
	$(".gallery").fancybox();

	//Homepage: Tab Selector
	$("#iTechTeamTab").click(function(){
		if (!$("#iTechInfoCanvas").hasClass('currentCanvas')){
			$("#photographyCanvas").addClass('photographyCanvasOut');
			$("#iTechInfoCanvas").addClass('currentCanvas');
			$("#photographyCanvas").removeClass('currentCanvas');
			$("#iTechInfoCanvas").removeClass('iTechInfoCanvasOut');
			$("#photographyGroupTab").css({cursor:"pointer"});
			$("#iTechTeamTab").css({cursor:"default"});
		}
	});
	
	$("#photographyGroupTab").click(function(){
		if (!$("#photographyCanvas").hasClass('currentCanvas')){
			$("#iTechInfoCanvas").addClass('iTechInfoCanvasOut');
			$("#photographyCanvas").addClass('currentCanvas');
			$("#iTechInfoCanvas").removeClass('currentCanvas');
			$("#photographyCanvas").removeClass('photographyCanvasOut');
			$("#iTechTeamTab").css({cursor:"pointer"});
			$("#photographyGroupTab").css({cursor:"default"});
		}
	});
	
	//Notification
	var notificationNumber = 1;
	function startNotification(func, miliseconds){
		func();
		return setInterval(func, miliseconds);
	}
	
	function notificationSwitch (){
		$.get('xml/notifications.xml', function(xml){
			notificationNumber++;
			if (notificationNumber == 4) notificationNumber = 1;
			var ownerOutput = '';
			var detailOutput = '';
			var textColor = '';
			$('notifications', xml).each(function(){
				$('notification' + notificationNumber, xml).each(function(){
					ownerOutput = $(this).find("owner").text();
					detailOutput = $(this).find("detail").text();
					textColor = $(this).find("TextColor").text();
				});
			});
			$("#notificationOwner").html(ownerOutput);				
			$("#notificationDetail").html(detailOutput);
			$(".notificationTexts").css({color:"" + textColor});
		});
	}
	
	startNotification(notificationSwitch, 5000);
	
//	window.onload = notificationSwitch ();
	
	//Next & Back Button & Dot Button for iTech Info Cards
	var stage = 1;
	function stageCounts(){
		if (stage == 1){
			$("#iTechInfoCardStage").addClass('whoWeAreStage');
		}
		if (stage == 2){
			$("#iTechInfoCardStage").addClass('whereWeAreStage');
		}
		if (stage == 3){
			$("#iTechInfoCardStage").addClass('ourPassionStage');
		}
		if (stage == 4){
			$("#iTechInfoCardStage").addClass('leaderBoardStage');
		}
	}
	
	$("#iTechInfoCardsNext").click(function(){
		$("#iTechInfoCardStage").removeClass('whereWeAreStage ourPassionStage leaderBoardStage whoWeAreStage');
		if (stage <= 4){
			stage++;
			stageCounts();
		}
		if (stage > 4){
			stage = 1;
			stageCounts();
		}
	});
	
	$("#iTechInfoCardsBack").click(function(){
		$("#iTechInfoCardStage").removeClass('whereWeAreStage ourPassionStage leaderBoardStage whoWeAreStage');
		if (stage >= 1){
			stage --;
			stageCounts();
		}
		if (stage < 1){
			stage = 4;
			stageCounts();
		}
	});
	
	//Member & Photograph tab for Photography team canvas	
	$("#photographTab").click(function(){
		if (!$(".photographTabItem").hasClass('currentTab')){
			$(".notebookPagesItem").removeClass('iconIn').removeClass('currentTab').removeClass('iconOut');
			$(".photographTabItem").addClass('currentTab');
			$(".memberTabItem").addClass('iconExit').delay(2000).css({display: "none"});
			$(".photographTabItem").addClass('iconIn');
			$(".photographyCanvasSelectTab").removeClass('photographyCanvasSelectedTab');
			$("#photographTab").addClass('photographyCanvasSelectedTab');
		}
	});
	
	$("#memberTab").click(function(){
		if (!$(".memberTabItem").hasClass('currentTab')){
			$(".notebookPagesItem").removeClass('iconIn').removeClass('currentTab').removeClass('iconOut');
			$(".memberTabItem").addClass('currentTab');
			$(".photographTabItem").addClass('iconOut');
			$(".memberTabItem").css({display: "block"}).addClass('iconIn');
			$(".photographyCanvasSelectTab").removeClass('photographyCanvasSelectedTab');
			$("#memberTab").addClass('photographyCanvasSelectedTab');
		}
	});
});