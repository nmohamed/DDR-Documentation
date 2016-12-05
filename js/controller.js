'use strict';

var $window = $(window);
var $document = $(document);
var $header = $('#header-holder');
var $headerSpacer = $('#header-spacer');
var headerPosition = $header.offset();

function main(){
	onWindowActions();
	onTabSwipe();
}

function onWindowActions(){
	$window.resize(resetHeaderPosition);
	$window.scroll(fixHeaderIfScrolledPast);
}

function resetHeaderPosition(){
	headerPosition = $header.offset();
}

function fixHeaderIfScrolledPast(){
	var scrollDistFromTop = $document.scrollTop();
	if(scrollDistFromTop >= headerPosition.top){
		$headerSpacer.show();
		$header.addClass('fixed-header');
	} else {
		$header.removeClass('fixed-header');
		$headerSpacer.hide()
	}
}

// function textAnimation(){
//     $('h1').mousemove(function(e){
//     	var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
//     	var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
//     	$('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
//    });
// }

main();