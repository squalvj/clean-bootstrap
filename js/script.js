$(document).ready(function($) {
	var i = 0;
	$(".wrapper-circle").css('visibility', 'hidden');
	$(".title-skill").css('visibility', 'hidden');
	$(".desc-skill").css('visibility', 'hidden');
	function checkScroll(){
	    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
	    
	    if($(window).scrollTop() > startY){
	        $('.navbar').addClass("scrolled");
	    }else{
	        $('.navbar').removeClass("scrolled");
	    }
	}

	if($('.navbar').length > 0){
	    $(window).on("scroll load resize", function(){
	        checkScroll();
	    });
	}

	$(window).scroll(function() {
	  if ($(document).scrollTop() > 50) {
	    $('nav').addClass('shrink');
	  } else {
	    $('nav').removeClass('shrink');
	  }
	});

	
	$(window).scroll(function() {
	   var hT = $('#section-first').offset().top,
	       hH = $('#section-first').outerHeight(),
	       wH = $(window).height(),
	       wS = $(this).scrollTop();
	   if (wS > 600 && i < 1){
		showTrio();
		i++;
	   }
	   if(wS > 1200 && i < 2){

	   }
	});

	function showTrio(){
		var box = $(".wrapper-circle");
		var title = $(".title-skill");
		var desc = $(".desc-skill");
		TweenMax.staggerFrom(box, 1, {rotation:"360", opacity:"0"}, 0.5);
		TweenMax.staggerFrom(title, 1, {y:"200", opacity:"0"}, 0.5);
		TweenMax.staggerFrom(desc, 1, {x:"100", opacity:"0"}, 0.5);
		$(".wrapper-circle").css({
			visibility: 'visible'
		});
		title.css({
			visibility: 'visible'
		});
		desc.css({
			visibility: 'visible'
		});
	}

	$(".wrapper-circle").hover(function() {
	        var img = $(this).data('skill');
	        var h5 = $(this).find('h4')
	        TweenMax.to(h5, 0.5, {color:"white"});
	        TweenMax.to($(this), 0.5, {backgroundColor:"#34495e"});
			$(this).find("img").fadeOut("fast", function() {
		        $(this).attr("src", "img/" + img + "_h.png");
		        $(this).fadeIn("fast");
    	});
	},  function(){
		var img = $(this).data('skill');
		var h5 = $(this).find('h4')
        TweenMax.to(h5, 0.5, {color:"#34495e"});
		TweenMax.to($(this), 0.5, {backgroundColor:"transparent"});
		$(this).find("img").fadeOut("fast", function() {
	        $(this).attr("src", "img/" + img + ".png");
	        $(this).fadeIn("fast");
		});
	})

	

	// $(".wrapper-circle")
	//     .mouseover(function() { 
	//         $(this).fadeOut("fast", function(){
	//         	var img = $(this).data('skill');
	//             $(this).find('img').attr("src", "img/" + img + "_h.png");
	//             $(this).fadeIn();
	//         });
	//     })
	//     .mouseout(function() {
	//         $(this).fadeOut("fast", function(){
	//         	var img = $(this).data('skill');
	//             $(this).find('img').attr("src", "img/" + img + ".png");
	//             $(this).fadeIn();
	//         });
	//     });
});