$(document).ready(function(){

	$("section.home").height($(window).height());

	$('nav.sidemenu ul li:first-child a').click(function(){
	 	if($('.sidecontainer').css('right') == '0px'){
	 		$('.goback').fadeOut();
	 		$('.sidecontainer').animate({'right':-600});
	 	}else{
	 		$('.sidecontainer').animate({'right':0});
	 		$('.goback').fadeIn();
	 	}
	 	
	 });

	$(window).resize(function () {
		$("section.home, .sidemenu, .sidecontainer").height($(window).height());
	});

	$(".goButton").click(function(e) {
		e.preventDefault();
		var id = $(this).parent().data('id');
		var a =  '<iframe src="http://player.vimeo.com/video/'+id+'?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		$('#videoContainer').html(a);
		$('#slides').superslides('stop')
		$('#closeVideo').fadeIn();
		$('div#slides, #goButton, nav.sidemenu, .sidecontainer, header h1.logo').fadeOut();

	});

	$("#closeVideo").click(function(e) {
		e.preventDefault();
		$('#slides').superslides('start')
		$('div#slides, #goButton, nav.sidemenu, .sidecontainer, header h1.logo').fadeIn(700);
		$('#closeVideo').fadeOut();
		$('#videoContainer').html('');

	});

	$('div#slides ul li').each(function(){
		var vimeoVideoID = $(this).attr('data-id');
		var current = $(this);
		$.getJSON('http://www.vimeo.com/api/v2/video/' + vimeoVideoID + '.json?callback=?', {format: "json"}, function(data) {
		    var title = data[0].title;
		    var thumb = data[0].thumbnail_large;
		    var user_name = data[0].user_name;
		    current.children('img').attr('src', thumb );
		    current.children('div.container').children('h2').children('a').text(title);
		});		
	});


	 $('.goback, ul.slides-container li img').click(function(){
	 	$('.sidecontainer').animate({'right':-600});
	 	$('.goback').fadeOut();
	 });


     $('div#slides ul li img, .sidemenu, .sidecontainer').height($(window).height());
     $('div#slides ul li img').width($(window).width());
		
	  $('#slides').superslides({
        hashchange: true, 
        play: 0, 
        pagination: false, 
        animation: 'slide'
      });

      $('#slides').on('animated.slides', function() {
		$('div#slides ul li div.container  h2').animate({'left': 0});
	  });

	  $('#slides').on('animating.slides', function(){
	  	$('div#slides ul li div.container  h2').css('left','-600px');
	  });

});