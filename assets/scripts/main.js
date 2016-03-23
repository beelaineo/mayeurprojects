/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
		
		$('#mc-form').ajaxChimp({
		    url: 'http://mayeurprojects.us10.list-manage.com/subscribe/post?u=0a7756fa5d218784e085ebdd5&amp;id=1a368a5c61',
		    callback: function sucessFunction (resp) {
					    if (resp.result === 'success') {
					        // Do stuff
					        $("#mc-form").hide();
					        $("#mc-signup").text("Thanks for signing up!");
			   		    } else {
				   		    $("#mc-signup").text("There was an error signing up. Please try again.  ");
				   		    $("#mc-signup").after(resp.msg);
			   		    }
					}
		});
		
		$('body').popover({
		  selector: '.available-work',
  		  trigger: 'focus'
		});

		$('.chocolat-parent').Chocolat({
			loop: "true"
		});
        
        
        // Blur inactive nav links except on home, blur others on hover
        $(".nav>li>a").hover( function () { $(".nav>li>a").addClass("blur-text"); $(this).addClass("hover-text"); }, function () { $(".nav>li>a").removeClass("blur-text"); $(this).removeClass("hover-text"); } );
        
        // Blur inactive artist names on hover
        $(".artist-index>li>a").hover( function () { $(".artist-index>li>a").addClass("blur-text");
		  $(this).addClass("hover-text"); },
		  function () { $(".artist-index>li>a").removeClass("blur-text");
		  $(this).removeClass("hover-text"); } );
				        
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
		
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    },
    'exhibitions': {
      init: function() {
	    
		 
		 $(".exhibition-block").hover( function () { $(".exhibition-block").addClass("blur-div");
		  $(this).addClass("forward-div"); },
		  function () { $(".exhibition-block").removeClass("blur-div");
		  $(this).removeClass("forward-div"); } );
		
      }
    },
    'residencies': {
      init: function() {
		
		 $(".residency-block").hover( function () { $(".residency-block").addClass("blur-div"); $(".residency-list-header").addClass("blur-div");
		  $(this).addClass("forward-div"); },
		  function () { $(".residency-block").removeClass("blur-div"); $(".residency-list-header").removeClass("blur-div");
		  $(this).removeClass("forward-div"); } );
		
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
