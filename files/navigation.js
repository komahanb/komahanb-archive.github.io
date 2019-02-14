jQuery(function($){
	$(document).on("click", ".expand-post", function(){
			var excerpt = $(this).parent().find('.blog-excerpt');
			var fullpost = $(this).parent().find('.blog-full-post');
			var blogTitle = $(this).parent();
			var selected = $(this);
			console.log('x');
			if(excerpt.hasClass('blog-article-open')){
				console.log(excerpt);
				excerpt.toggleClass('blog-article-open');
				fullpost.toggleClass('blog-article-open');
				$(this).text('X LESS');
			} else {
				$('html, body').animate({
        			scrollTop: blogTitle.offset().top - 300
    			}, {
    				duration: 500,
    			}).promise().done(function(){
 					excerpt.toggleClass('blog-article-open');
					fullpost.toggleClass('blog-article-open');
					selected.text('+ MORE');   				
    			});
			}	
	}) ;

	$(document).ready(function(){

		if($('body').hasClass('admin-bar')){
			$('#mobile-nav-toggle').css('top','41px');
			$('.close-mobile-nav').css('top','41px');
		}	

		openActiveNav();
		var screenWidth = $(window).width();

		/* Deals with the navigation/opening closing tabs */
		$('.fusion-caret').click(function(){
		var mainnavitem = $(this).parent();
		var menuOpen = $(this).children('.fusion-dropdown-indicator');
		var navItems = $('.menu-item .fusion-caret');
		var currentSelection = $(this);

				if ($(this).children().hasClass('fusion-dropdown-indicator')){
					mainnavitem.children('.sub-menu').slideDown({
                    	duration: 300
                	});
					changeDropdownIndicator($(this));
				} else {
					mainnavitem.children('.sub-menu').slideUp({
                    	duration: 100
                	});
					$(this).children('.menu-open').removeClass('menu-open').addClass('fusion-dropdown-indicator');					
				}

			//Close all menus except for the selected one
			navItems.each(function(){
				if(!$(this).is(currentSelection)){
					slideNavUp($(this).parent().find('.sub-menu'), $(this));
				}
			});
			
		});

		$('#mobile-nav-toggle').click(function(e){
				$('#mobile-nav-toggle').css('right','-50px');
				openMobileNav();
				e.preventDefault();
		});

		$('.close-mobile-nav').click(function(){
				$('#mobile-nav-toggle').css('right','0px');
				closeMobileNav();
		});

	});

	function slideNavUp(mainNavItem, navItem){
		mainNavItem.slideUp({
            duration: 300
        });
		navItem.find('i').removeClass('menu-open').addClass('fusion-dropdown-indicator');	
	}

	/* Change the menu dropdown from "+" to "-" */
	function changeDropdownIndicator(dropdownObject){
		dropdownObject.find('.fusion-dropdown-indicator').removeClass('fusion-dropdown-indicator').addClass('menu-open');
	}

	/* Open dropdown for active nav item on load */
	function openActiveNav(){

		var activeMenuItem = $('.fusion-main-menu').find('.current-menu-item');
		var activeSubMenuItem = $('.fusion-main-menu').find('.current-menu-parent');
		if(activeSubMenuItem.length != 0){
			changeDropdownIndicator(activeSubMenuItem);
		} else if(activeMenuItem.length != 0){
			changeDropdownIndicator(activeMenuItem);
		} 

	}

	/* Functions for mobile navigation animations */
	function openMobileNav(){
		$('body').toggleClass('mobile-nav-open');
		$('#mobile-nav-toggle').toggleClass('mobile-active');
		$( "#wrapper" ).css("left","-100%");
 		$( ".mobile-nav-wrapper" ).css("left","0%");
 		$( ".mobile-nav-wrapper .mobile-nav-container" ).toggleClass('nav-active');	
		$('.mobile-nav-wrapper .social-wrap').toggleClass('nav-active');	
	}

	function closeMobileNav(){
		$('body').toggleClass('mobile-nav-open');
		$('#mobile-nav-toggle').toggleClass('mobile-active');
		$( "#wrapper" ).css("left","0%");
 		$( ".mobile-nav-wrapper" ).css("left","100%");
 		$( ".mobile-nav-wrapper .mobile-nav-container" ).toggleClass('nav-active');
		$('.mobile-nav-wrapper .social-wrap').toggleClass('nav-active');	
	}

});
