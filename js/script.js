$(window).on("load", function() {
    "use strict";


    // MUSIC PLAYER CONTROLS 
  	$(".open-music-player").on("click", function() {
  		$(".beatx-playyer.fixed-player").addClass("show");
  		$(this).toggleClass("playy");
        return false;
  	});

  	$(".remove-music-player").on("click", function() {
  		$(".beatx-playyer").removeClass("show");
      	$(".remove-music-player.v2").addClass("show");
      	return false;
  	});    

   $(".remove-music-player.v2").on("click", function() {
      	$(".beatx-playyer.fixed-player").addClass("show");
   });

   $(".jp-play").on("click", function() {
   		$(".open-music-player").toggleClass("playy");
   });

   // RESPONSIVE MOBILE MENU

    $(".menu-btn").on("click", function(){
      $(".responsive-mobile-menu").toggleClass("active");
      return false;
    });

    $(".close-menu, html").on("click", function(){
      $(".responsive-mobile-menu").removeClass("active");
    });

    $(".responsive-mobile-menu ul ul").parent().addClass("menu-item-has-children");
    $(".responsive-mobile-menu ul li.menu-item-has-children > a").on("click", function() {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });

    $(".close-menu, .responsive-mobile-menu").on("click", function(e) {
      e.stopPropagation();
    });

    // SIDE PANEL SETTINGS 

    $(".side-panel-sec > a").on("click", function() {
        $(this).parent().toggleClass('active');
        return false;
    });

    $(".rtl-btn").on("click", function() {
      $("body").toggleClass("rtl");
    });

    $(".ltr-btn").on("click", function() {
      $("body").removeClass("rtl");
    });

    // DEFAULT THEME BUTTON ANIMATION
    
    if ($('.btn-default').length) {
      $('.btn-default').on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})}).on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      });
    };

    // AJAX CONTACT FORM SCRIPT (WORKING CONTACT FORM)

    
    // STICKY HEADER 

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1) {
            $(".bottom-header").addClass("sticky animated slideInDown");
        } else {
            $(".bottom-header").removeClass("sticky animated slideInDown");
        }
    });


    // ADDING SMOOTH SCROLLING TO LINK

    $(".banner-text .btn-default.demos").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    // END ================

});


