"use strict";
if(typeof Placeholdem === 'function') {
	Placeholdem( document.querySelectorAll( '[placeholder]' ) );
}
// testimonials
$('.testimonials').carousel({
    interval: 2000
})

jQuery(document).ready(function() {
	
	
	// Newsletter Form Starts Here //
 $(document).on('submit', '#newsletter-form', function()
 {
  var v = grecaptcha.getResponse();
  var visitor_name = $("#visitor_name").val().trim();
  var visitor_email = $("#visitor_email").val().trim();
  var submit_newsletter = $("#submit_newsletter").val();
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // Name
        if(visitor_name==''){ 
   $("#errVNM").removeClass().addClass('error-msg').html("Please enter your name.").fadeIn("slow");
   $("#visitor_name").focus(); return false; 
  }
  // Email
  else if(visitor_email==''){ 
   $("#errVEML").removeClass().addClass('error-msg').html("Please enter your email.").fadeIn("slow");
   $("#visitor_email").focus(); return false; 
  }
  else if(!emailPattern.test(visitor_email)){ 
   $("#errVEML").removeClass().addClass('error-msg').html("Please enter valid email.").fadeIn("slow");
   $("#visitor_email").focus(); return false;
  }
     else if(v.length == 0)
     {
         $("#errVCODE").removeClass().addClass('error-msg').html("Please select tick box.").fadeIn("slow");
   $("#recaptcha").focus(); return false;
     }
     else
  {
   var data = $(this).serialize();
   $.ajax({
   type : 'POST',
	url  : 'submit_newsletter.php',
   data : data,
   success :  function(data)
        {      
       $("#newsletter-form").fadeOut(500).hide(function()
       {
        $(".news-result").fadeIn(500).show(function()
        {
         $(".news-result").html(data);
        });
       });
       
        }
   });
   return false;
  }

 });
 // Directory Enquiry Form Ends Here //
 
 
 
	//menu
	if (jQuery().superfish) {
		jQuery('ul.sf-menu').superfish({
			delay:       700,
			animation:   {opacity:'show',height:'show'},
			//animation:   {opacity:'show'},
			animationOut: {opacity: 'hide'},
			speed:       'fast',
			disableHI:   false,
			cssArrows:   true,
			autoArrows:  true
		});
	}

	//toTop
	if (jQuery().UItoTop) {
        jQuery().UItoTop({ easingType: 'easeOutQuart' });
    }

    sliderHomepage();

    //Need to work on this later.
  //   $.ajax({                                      
  //     type : 'GET',
  //     url: 'http://localhost/vc-newlook/testimonial.php',
  //     data: "",                        
  //     dataType: 'json',                  
  //     success: function(response)          
  //     {
               
  //       var name = data.full_name;              
  //       var comment = data.comment;

  //       for(var i = comment.length; i--;) {
		//     var test = comment[i];
		//     alert(test);
		// }

  //       $("#testimonial-container").html("<div><div>"+comment+"</div><div><strong>"+name+"</strong></div></div>");

  //       //$( "#testimonial-comment" ).html(comment);
  //      	//$( "#testimonial-name" ).html("<strong>"+name+"<strong>")
  //     } 
  //   });

    //horizontal accordion
    if (jQuery().elastislide) {
	    jQuery('#horizontal_slider').elastislide({
	        imageW : 260,
	        border : 0,
	        minItems : 1,
	        margin : 30
	    });
	}

	//parallax
	if (jQuery().parallax) {
		// jQuery('#testimonials').parallax("50%", 0.4);
		// jQuery('#tweets').parallax("50%", 0.5);
	}
	
	//funny text
	if (jQuery().funnyText) {
		jQuery('.funnyText').funnyText({
			speed: 700,
			borderColor: 'transparent',
			activeColor: '#abce6c',
			color: '#fff',
			fontSize: '1.4em',
			direction: 'both'
		});
	}

    //prettyPhoto
    if (jQuery().prettyPhoto) {
	   	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
	  	});
	}

   	//carousel
   	if (jQuery().carousel) {
		jQuery('.carousel').carousel();
	}

	//owl caousel
	if (jQuery().owlCarousel) {
	    jQuery(".owl-carousel").owlCarousel({
	    	navigation : true,
	    	navigationText : false,
	    	pagination : false
	    });
	}

	//bx slider
	if (jQuery().bxSlider) {
		jQuery('.bxslider').bxSlider({
			auto: true,
			controls: false,
			pager: false,
		  	mode: 'fade'
		});
	}

	//timeline
	if (jQuery().timelinr) {
		if(jQuery('#timeline').length) {
			jQuery('#timeline').timelinr({
				orientation: 	'vertical',
				issuesSpeed: 	300,
				datesSpeed: 	100,
				arrowKeys: 		'true',
			});
		}
	}

	//single page localscroll and scrollspy
	var navHeight = jQuery('#header').outerHeight(true) + 40;
	jQuery('body').scrollspy({
		target: '.mainmenu_wrap',
		offset: navHeight
	});
	if (jQuery().localScroll) {
		jQuery('#mainmenu, #land').localScroll({
			duration:1900,
			easing:'easeOutQuart',
			offset: 0
		});
		
	}

	//portfolio and horizontal slider animation
	jQuery('.portfolio_item_image .portfolio_links').css({opacity: 0});
	jQuery('.isotope-item, .horizontal_slider_introimg').hover(
	 	function() {
			jQuery( this ).find('.portfolio_item_image .portfolio_links').stop().animate({ opacity: 1}, 500, 'easeOutExpo').find('.p-view').toggleClass('moveFromLeft').end().find('.p-link').toggleClass('moveFromRight');
		}, function() {
			jQuery( this ).find('.portfolio_item_image .portfolio_links').stop().animate({ opacity: 0}, 300, 'easeOutExpo').find('.p-view').toggleClass('moveFromLeft').end().find('.p-link').toggleClass('moveFromRight');
		}
	);

	//teaser style5 animation
	jQuery('.single_teaser.icons.style5').hover(
	 	function() {
			jQuery( this ).find('i').addClass('moveFromLeft').end().find('h3').addClass('moveFromRight').end().find('p').addClass('moveFromBottom');
		}, function() {
			jQuery( this ).find('i').removeClass('moveFromLeft').end().find('h3').removeClass('moveFromRight').end().find('p').removeClass('moveFromBottom');
		}
	);


	//twitter
	//slide tweets
	jQuery('#tweets .twitter').bind('loaded', function(){
		jQuery(this).addClass('flexslider').find('ul').addClass('slides');
	});
	if (jQuery().tweet) {
		jQuery('.twitter').tweet({
			modpath: "./twitter/",
		    count: 2,
		    avatar_size: 48,
		    loading_text: 'loading twitter feed...',
		    join_text: 'auto',
		    username: 'ThemeForest', 
		    template: "{avatar}{time}{join}<span class=\"tweet_text\">{tweet_text}</span>"
		});
	}

	
 	// This class supports validating Bootstrap form.
	// Generate a simple captcha
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));

    $('#contactForm').formValidation({
        message: 'This value is not valid',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	travel_agent: {
                validators: {
                    notEmpty: {
                        message: 'The Travel Agent is required'
                    }
                }
            },
            villatype: {
                row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'The Villa is required'
                    }
                }
            },
            title: {
                row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'The Title is required'
                    }
                }
            },
            full_name: {
                row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            telephone: {
                row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'The telephone number is required'
                    },
                    regexp: {
                            message: 'The phone number can only contain the digits(0-9) and +',
                            regexp: /^[0-9\+]+$/
                        }
                }
            },
            email_address: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            friend_email_address1: {
                validators: {
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            friend_email_address2: {
                validators: {
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            arrival_day: {
                row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'Arrival day is required'
                    }
                }
            },
            arrival_month: {
            	row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'Arrival month is required'
                    }
                }
            },
            arrival_year: {
            	row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'Arrival year is required'
                    }
                }
            },
            depature_day: {
            	row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'Depature day is required'
                    }
                }
            },
            depature_month: {
            	row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'Depature month is required'
                    }
                }
            },
            depature_year: {
            	row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'Depature year is required'
                    }
                }
            },
            no_of_adults: {
            	row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'No of Adults is required'
                    }
                }
            },
            no_of_children: {
            	row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'No. of Children (Age 6-11) is required'
                    }
                }
            },
            no_of_children1: {
            	row: '.col-sm-12',
                validators: {
                    notEmpty: {
                        message: 'No. of Children (Age 0-5) is required'
                    }
                }
            },
            // captcha: {
            // 	validators: {
            //         notEmpty: {
            //             message: 'Captcha is required'
            //         }
            //     }
            // },
            
            // captcha: {
            //     validators: {
            //         callback: {
            //             message: 'Wrong answer',
            //             callback: function(value, validator, $field) {
            //                 var items = $('#captchaOperation').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
            //                 return value == sum;
            //             }
            //         }
            //     }
            // },
            
        }
    });

});
	
jQuery(window).load(function(){
	
	// Conatctus Map Function
	VCmap();

	setTimeout(function(){
		jQuery('.progress-bar').addClass('stretchRight');
	}, 600);

	//stick header to top
	if (jQuery().sticky) {
	    jQuery("#header").sticky({ 
	    		topSpacing: 0,
	    		scrollBeforeStick: 10
	    	},
	    	function(){ 
	    		jQuery("#header").stop().animate({opacity:0}, 0).delay(500).stop().animate({opacity:1}, 1000);
	    	},
	       	function(){ 
	    		jQuery("#header").stop().animate({opacity:0}, 0).delay(50).stop().animate({opacity:1}, 2000);
	    	}
	    );
	}
	

	if (jQuery().flexslider) {
		var $mainSlider = jQuery('#mainslider');
		jQuery(".flexslider").flexslider({
			animation: "fade",
			useCSS: true,
			controlNav: true,   
			//animationLoop: false,
			smoothHeight: true,
			slideshowSpeed:5000,
			animationSpeed:800,
			after :function( slider ){
			  	//bg-color1 - class for #mainslider
			  	var currentClass = $mainSlider.find('.flex-active-slide').attr('data-bg');
			  	$mainSlider.attr('class', currentClass);
			}
		});
	}

	jQuery('body').delay(1000).scrollspy('refresh');


	//preloader
	jQuery(".preloaderimg").fadeOut();
	jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
		jQuery(this).remove();
	});

	//fractionslider
	if (jQuery().fractionSlider) {
		var $mainSlider = jQuery('#mainslider');
		jQuery('.slider').fractionSlider({
			'fullWidth': 			true,
			'controls': 			false, 
			'pager': 				true,
			'responsive': 			true,
			'dimensions': 			"1920,756",
		    'increase': 			false,
			'pauseOnHover': 		false,
			'slideEndAnimation': 	false,
			'timeout' : 			2500,
			'slideTransitionSpeed' :0
		});
	}


	//flickr
	// use http://idgettr.com/ to find your ID
	if (jQuery().jflickrfeed) {
		jQuery("#flickr").jflickrfeed({
			flickrbase: "http://api.flickr.com/services/feeds/",
			limit: 6,
			qstrings: {
				id: "63512867@N07"
			},
			itemTemplate: '<a href="{{image_b}}" rel="prettyPhoto[pp_gal]"><li><img alt="{{title}}" src="{{image_s}}" /></li></a>'
		}, function(data) {
			jQuery("#flickr a").prettyPhoto({
				theme: 'facebook'
	   		});
	   		jQuery("#flickr li").hover(function () {						 
			   jQuery(this).find("img").stop().animate({ opacity: 0.5 }, 200);
		    }, function() {
			   jQuery(this).find("img").stop().animate({ opacity: 1.0 }, 400);
		    });
		});
	}

	//flexslider
	jQuery(".slides").find("li").each(function(){
		var h = jQuery(this).height();
		var childH = jQuery(this).find(".leftcontent_wrap").actual("height");
		var childRH = jQuery(this).find(".rightcontent_wrap").actual("height");
		var childD = jQuery(this).find(".slide_description").actual("height");
		var padding = (h / 2) - (childH / 2);
		var paddingR = (h / 2) - (childRH / 2);
		var topD = ((h / 2) - ((childD / 2) ));
		jQuery(this).find(".leftcontent_wrap").css("padding-top" , padding);
		jQuery(this).find(".rightcontent_wrap").css("padding-top" , paddingR);
		jQuery(this).find(".slide_description").css("top" , topD);
	});

});

jQuery(window).resize(function(){
	jQuery("#header").sticky('update');
	jQuery('body').scrollspy('refresh');

	//flexslider
	jQuery(".slides").find("li").each(function(){
		var h = jQuery(this).height();
		var childH = jQuery(this).find(".leftcontent_wrap").actual("height");
		var childRH = jQuery(this).find(".rightcontent_wrap").actual("height");
		var childD = jQuery(this).find(".slide_description").actual("height");
		var padding = (h / 2) - (childH / 2);
		var paddingR = (h / 2) - (childRH / 2);
		var topD = ((h / 2) - ((childD / 2) ));
		jQuery(this).find(".leftcontent_wrap").css("padding-top" , padding);
		jQuery(this).find(".rightcontent_wrap").css("padding-top" , paddingR);
		jQuery(this).find(".slide_description").css("top" , topD);
	});

});

jQuery(window).scroll(function() {

	//circle progress bar
	if (jQuery().easyPieChart) {
		var count = 0 ;
		//var colors = ['#fbcf61', '#e6557c', '#00c1e4'];
		var colors = ['#fff'];
		jQuery('.chart').each(function(){

				
			var imagePos = jQuery(this).offset().top;
			var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+600) {

				jQuery(this).easyPieChart({
			        barColor: colors[count],
					trackColor: '#33271B',
					scaleColor: false,
					scaleLength: false,
					lineCap: 'butt',
					lineWidth: 20,
					size: 230,
					rotate: 0,
					animate: 2000,
					onStep: function(from, to, percent) {
							jQuery(this.el).find('.percent').text(Math.round(percent));
						}
			    });
			}

			count++;
			if (count >= colors.length) { count = 0};
		});
	}
});

// slider homepage - Sarvesh - 07/08/2015 
	function sliderHomepage() {
	    if ($('#slider').length) {
		var owl = $("#slider");

		$("#slider").owlCarousel({
		    autoPlay: 3000,
		    items: 4, //10 items above 1000px browser width
		    itemsDesktopSmall: [900, 3], // betweem 900px and 601px
		    itemsTablet: [600, 3], //2 items between 600 and 0
		    itemsMobile: [500, 2] // itemsMobile disabled - inherit from itemsTablet option
		});
	    }

	}

    jQuery('#filtrable .phases').click(function(){
        var target = ".phase" + $(this).attr("target");
        $(".items-row").not(target).fadeOut(500);
        $(target).fadeIn(500);
    });

// Page loading time calculation
function pageload()
{
    var after = (new Date()).getTime();
    var sec = (after-before)/1000;
    var p = document.getElementById("loadingtime");
    p.innerHTML = "Page load: " + sec + " seconds.";
        
}	

// Newsletter Form Starts Here //
$(document).ready(function()
{  
 
});
// Directory Enquiry Form Ends Here //