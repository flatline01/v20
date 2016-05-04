// JavaScript Document
var viewstate = new Object();

$(window).load(function(){
	//Yes, browser detection. Feature detection won't help with browser specific styling.
	var ua = navigator.userAgent.toLowerCase();
	if($.browser.ipad){$("body").addClass("ipad").addClass("tablet");}
	if($.browser.iphone){$("body").addClass("iphone");}
	if($.browser["windows phone"]){$("body").addClass("winphone");}
	if($.browser.android){$("body").addClass("android");}
	if($.browser.win){$("body").addClass("win");}
	if($.browser.mac){$("body").addClass("mac");}
	if($.browser.desktop){$("body").addClass("desktop");}
	if($.browser.mobile){$("body").addClass("mobile");}
	if($.browser.msie){$("body").addClass("ie");}
	if($.browser.webkit){$("body").addClass("webkit");}
	if($.browser.mozilla){$("body").addClass("ff");}
	if(ua.indexOf("safari") > -1){$("body").addClass("safari");}
	$("body").addClass("v"+Math.floor($.browser.version));
	if($.browser.msie && Math.floor($.browser.version) < 9){
		if (document.cookie.replace(/(?:(?:^|.*;\s*)legacyWarning\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
			$("body").addClass("legacy");
			$("body").append('<div class="legacywarning"></div><div class="warning"><a href="#close" id="legacyclose">X</a><h1>Hi!</h1><p>You seem be running an older web browser. We suggest that you upgrade to a more modern one. Check out <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_blank">IE 11</a>, <a href="http://www.mozilla.org/en-US/firefox/new/"  target="_blank">Firefox</a>, or <a href="https://www.google.com/intl/en/chrome/browser/" target="_blank">Chrome</a>.</p><p>You can <a href="#close" id="inlineclose">click here</a> or the "X" in the upper right to return to the page, but you may not have the best possible experience.</p> </div>');
			$(".legacywarning").css({"position":"absolute", "top":0, "left":0, "right":0,"bottom":0, "width":"100%", "height":"100%"});
			$(".warning").css({"position":"absolute", "top":"20%", "left":"20%", "right":"20%","bottom":"20%","background":"#fff"});
			$("body").on("click", "a#legacyclose, a#inlineclose, .legacywarning", function(e){
				$(".legacywarning, .warning").fadeOut();
				e.preventDefault();
			});
			document.cookie = "legacyWarning=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
		}
	}
	if(window.orientation === -90 || window.orientation === 90){$("body").addClass("landscape");}
	else{$("body").addClass("portrait");}
 	$("html").removeClass("no-js");
 
 	//resizing and orientation watches and triggers
	var resizeWatcher;
	$(window).resize(function() {
		clearTimeout(resizeWatcher);
		resizeWatcher = setTimeout(doneResizing, 100);
	});
	function doneResizing(){init();}
	function doOnOrientationChange(){
		if(window.orientation === -90 || window.orientation === 90){$("body").addClass("landscape").removeClass("portrait");}
		else{$("body").removeClass("landscape").addClass("portrait");}
		init();
	}
	if($("body:not(.legacy)")){
		window.addEventListener('orientationchange', doOnOrientationChange);
	}
	//start everything rolling on page load.
	init();	
	
	function init(){
		//Only initialize resizable items in this block
		//Utility classes and size tests for breakpoints.
		if($(window).width() < 999 && $(window).width() > 768){$("body").removeClass("mobile").removeClass("desktop").addClass("tab");}
		else if($(window).width() < 767 || jQuery.browser.mobile === true){
			$("body").removeClass("tab").removeClass("desktop").addClass("mobile");
		}
		else{
			//reset mobile stuff if we are on desktop
		}
	}

	//other scripts below
	$(".main").addClass("active");
	
	
	logMsg("Hey, thanks for looking at the console.");
	logMsg("This site is a bit bare. Updating it now, but excuse the mess.");
	logMsg("I'm currently seeking a front end development job. Please contact me at joe@flatlinegraphics.com for my portfolio and list of current/recent projects.");

});
function logMsg(msg){window.console && console.log(msg);}
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPad/i)) {
  for (i=0; i<metas.length; i++) {
	if (metas[i].name == "viewport") {
	  metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
	}
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
	if (metas[i].name == "viewport") {
	  metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
	}
  }
}