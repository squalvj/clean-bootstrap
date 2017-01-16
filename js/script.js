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
	
	var text = new SplitText(".phone-header", {linesChars:"line++"});
	function showPhone(){
		var wrapper = $(".wrapper-circle-phone");
		var img = $(".wrapper-circle-phone > img");
		var line = $(".line");
		var information = $(".information")
		var paging = $(".paging")
		TweenLite.set(".phone-header", {perspective:400});
		TweenMax.staggerFrom(text.chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50%", ease:Back.easeOut}, 0.2, allDone);
		// TweenMax.from(wrapper, 1, {opacity:0, scale:0,y:-100, ease:Power3.easeInOut, delay:1}).repeat(2).yoyo(true).play();
		TweenMax.from(wrapper, 1, {opacity:0, scale:0, ease:Back.easeInOut, delay:1});
		TweenMax.from(img, 1, {opacity:0, scale:0,  ease:Back.easeOut, delay:1.5});
		TweenMax.from(line, 1, {opacity:0, scale:0,  ease:Power3.easeInOut, delay:1.5});
		TweenMax.from(information, 1, {opacity:0, scale:0, y:30, rotationX:180, transformOrigin:"50%", delay:1.5});
		TweenMax.from(paging, 1, {opacity:0, y:100,  ease:Power3.easeInOut, delay:2}).repeat(2).yoyo(true).play();

	}

	function allDone(){
		text.revert();
	}

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
	   
	  } else {
	    
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
	   	showPhone();
	   	i++
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
	       
	},  function(){
		
	});

	

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