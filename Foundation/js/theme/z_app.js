/*!
* App JS
*/

// Required by Foundation
;(function ($, window, undefined) {
	'use strict';

	var $doc = $(document),
	  Modernizr = window.Modernizr;

	$(document).ready(function() {
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
	$.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
	$.fn.foundationTabs             ? $doc.foundationTabs() : null;
	$.fn.foundationTooltips         ? $doc.foundationTooltips() : null;

	$.fn.placeholder                ? $('input, textarea').placeholder() : null;
	});

	// Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
	if (Modernizr.touch && !window.location.hash) {
	$(window).load(function () {
	  setTimeout(function () {
	    window.scrollTo(0, 1);
	  }, 0);
	});
	}

})(jQuery, this);



// Custom Theme JS
jQuery(document).ready(function($) {
	
	// Reveal Modal - add two #'s to the url in the admin
	$(".modal").click(function() {
		$("#modal").reveal();
	});

	// End jQuery
});