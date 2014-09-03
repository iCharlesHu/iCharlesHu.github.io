//This is the main JavaScript for www.icharleshu.com
//This file is lincenced only for www.icharleshu.com
//This file is powered by Charles Hu on Jun.12,2013.

$.noConflict();
jQuery(document).ready(function($){
	$.get('../xml/building-logs.xml', function(xml){
		$('archive', xml).each(function(){
			var logCounts = $(this).find("count").text();
			var heightCounts = $(this).find("count").text();
			var paragraphCounts = '';
			var logWeek = '';
			var logDate = '';
			var logMonth = '';
			var logYear = '';
		
			for (logCounts; logCounts > 0; logCounts--){
				$('log' + logCounts, xml).each(function(){
					logWeek = $(this).find("week").text();
					logDate = $(this).find("date").text();
					logMonth = $(this).find("month").text();
					logYear = $(this).find("year").text();
					
					$("<div>", {id:'buildingLog' + logCounts, "class": 'buildingLogSection'}).appendTo("#logSection");
					$("<div>", {id:'dateSection' + logCounts, "class": 'dateSection'}).appendTo("#buildingLog" + logCounts);
					$("<div>", {id:'dateBox' + logCounts, "class": 'dateBox'}).appendTo("#dateSection" + logCounts);
					$("<div>", {id:'log' + logCounts + 'Week', "class": 'logWeek'}).html(logWeek).appendTo("#dateBox" + logCounts);
					$("<div>", {id:'log' + logCounts + 'Date', "class": 'logDate'}).html(logDate).appendTo("#dateBox" + logCounts);
					$("<div>", {id:'log' + logCounts + 'Month', "class": 'logMonth'}).html(logMonth).appendTo("#dateBox" + logCounts);
					$("<div>", {id:'log' + logCounts + 'Year', "class": 'logYear'}).html(logYear).appendTo("#dateBox" + logCounts);
					$("<div>", {id:'log' + logCounts + 'Text', "class": 'logText'}).appendTo("#buildingLog" + logCounts);
					
					var paragraphNum = 1;
					paragraphCounts = $(this).find("pCount").text();
					for (paragraphNum; paragraphNum <= paragraphCounts; paragraphNum++){
						var paragraphText = $(this).find("p" + paragraphNum).text();
						$("<li>", {id:'log' + logCounts + 'P' + paragraphNum, "class": 'logParagraph'}).html(paragraphText).appendTo("#log" + logCounts + "Text");
					}
					
					var seeMore = $(this).find("BOOL_SeeMore").text();
					if (seeMore == "YES"){
						var seeMoreURL = $(this).find("SeeMoreURL").text();
						var seeMorePosition = $("#buildingLog" + logCounts).position();
						$("<div>", {id:'seeMore' + logCounts, "class": 'seeMore'}).appendTo("#buildingLog" + logCounts);
						$("<a>", {id:'seeMoreURL' + logCounts, "class": 'seeMoreURL', href:'' + seeMoreURL}).appendTo("#seeMore" + logCounts);
						$("<div>", {id: 'seeMoreIcon' + logCounts, "class": 'seeMoreIcon'}).appendTo("#seeMoreURL" + logCounts);
						$("#seeMore" + logCounts).css({top: seeMorePosition.top + 10 + "px"});
						
						$("#log" + logCounts + "Text").css({width: "70%"});
					}
					
					var textHeight = $("#log" + logCounts + "Text").height();
					if (textHeight < 72) {textHeight = 72;}
					$("#buildingLog" + logCounts).css({height: textHeight + "px"});
				});
			}
			
			//Height Configuation
			var sectionHeight = 0;
			for (heightCounts; heightCounts >= 1; heightCounts--){
				sectionHeight = sectionHeight + $("#buildingLog" + heightCounts).height() + 21;
			}
			$("#logSection").css({height: sectionHeight + "px"});
			var mainSectionHeight = sectionHeight + 400;
			$("#mainSection").css({height: mainSectionHeight + "px"});
			$("#mainRestriction").css({height: mainSectionHeight + "px"});
			
			//Icon Progress
			$('iconSet', xml).each(function(){
				var mainpageProgress = $(this).find("iconMain").text();
				var aboutpageProgress = $(this).find("iconAbout").text();
				var galleryProgress = $(this).find("iconGallery").text();
				var blogProgress = $(this).find("iconBlog").text();
				var contectProgress = $(this).find("iconContect").text();
				
				$("#iconSlideProcessHome").css({width: mainpageProgress});
				$("#iconSlideProcessAbout").css({width: aboutpageProgress});
				$("#iconSlideProcessGallery").css({width: galleryProgress});
				$("#iconSlideProcessNewsflow").css({width: blogProgress});
				$("#iconSlideProcessContact").css({width: contectProgress});
			});
		});		
	});
	
});