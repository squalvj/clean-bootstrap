$(document).ready(function($) {
	var i = 0;
	$(".wrapper-circle").css('visibility', 'hidden');
	$(".title-skill").css('visibility', 'hidden');
	$(".desc-skill").css('visibility', 'hidden');
	var header_title = $(".header-up");
	var section2_p = $(".section-2-p");
	TweenMax.from(header_title, 1.2, {y: "60", opacity:"0", ease:Power3.easeInOut, onComplete:showHeaderDesc()});
	TweenMax.set(section2_p, {opacity: "0"});
	TweenMax.set($(".wrapper-circle2-h"), {opacity: "0"});
	

	function showHeaderDesc(){
		var header_desc = $(".header-desc");
		TweenMax.staggerFrom(header_desc, 1.2, {y: "60", opacity:"0", ease:Power3.easeInOut, delay:0.8}, 0.2);
	}

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
		TweenMax.staggerFrom(title, 1, {y:"200", opacity:"0", ease:Power3.easeInOut}, 0.5);
		TweenMax.staggerFrom(desc, 1, {x:"100", opacity:"0", delay:0.5, ease:Back.easeOut}, 0.5);
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
	        TweenMax.to($(this), 0.5, {backgroundColor:"#34495e",ease:Power3.easeInOut});
			$(this).find("img").fadeOut("fast", function() {
		        $(this).attr("src", "img/" + img + "_h.png");
		        $(this).fadeIn("fast");
    	});
	},  function(){
		var img = $(this).data('skill');
		var h5 = $(this).find('h4')
        TweenMax.to(h5, 0.5, {color:"#34495e"});
		TweenMax.to($(this), 0.5, {backgroundColor:"transparent",ease:Power3.easeInOut});
		$(this).find("img").fadeOut("fast", function() {
	        $(this).attr("src", "img/" + img + ".png");
	        $(this).fadeIn("fast");
		});
	})

	$(".wrapper-circle2").hover(function() {
	       var wrapper = $(this).parent().siblings('.wrapper-circle2-h');
	       expand(wrapper);
	       var parent = $(this).parent();
	       var line = $(".section2-line")
	       console.log(line);
	       TweenLite.to(line, 1, {height: "100px", backgroundColor: "transparent", border:"1px solid #34495e", opacity: "0"})
	},  function(){
		var wrapper = $(this).parent().siblings('.wrapper-circle2-h');
		shrink(wrapper)
	});

	function expand(e){
		TweenLite.to(e, 1, {width: "100%", opacity: "1"});
	}
	function shrink(e){
		TweenLite.to(e, 1, {width: "230px", opacity: "0.3"});
		TweenLite.to(e, 1, {opacity: "0", delay:21});
		
	}

	

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