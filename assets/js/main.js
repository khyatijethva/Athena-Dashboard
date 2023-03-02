jQuery('.dropdown-menu a').click(function(){
    jQuery('#selected').text(jQuery(this).text());
  });

// message chat teacher js==========================
jQuery(document).ready(function(){
	jQuery('i#back-chat').click(function(){
		jQuery('.conversation').hide();
		jQuery('.side').show();
	});
	jQuery('.chat--user').click(function(){
		if (jQuery(window).width() < 767){
			jQuery('.conversation').show();
			jQuery('.side').hide();
		}
		else{
			jQuery('.side').show();
			jQuery('.conversation').show();
		}
	});

	// ================= group detail update js ==============
	jQuery('.discussion--details').hide();
	jQuery('.discussion').click(function(){
		jQuery('.discussion--details').show();
		jQuery('.discussion-list').hide();
	});
});


jQuery(document).ready(function () {

	jQuery('.dropdown-menu a').click(function(){
    	jQuery('#selected').text(jQuery(this).text());
  	});

	jQuery("#menu-expand-collapse").click(function () {
		jQuery(".navigation").toggle();
		jQuery(this).toggleClass("visible");
	});

	jQuery('.navbar-toggler-right').click(function (e) {
		jQuery('body').addClass('menu-open');
	});

	jQuery('.navbar-toggler-close').click(function (e) {
		jQuery('body').removeClass('menu-open');
	});

	jQuery(".students-slider").slick({
		dots: false,
		centerMode: true,
		slidesToShow: 6,
		slidesToScroll: 2,
		prevArrow: '<div class="iconar left"><i class="mdi mdi-chevron-left"></i></div>',
		nextArrow: '<div class="iconar right"><i class="mdi mdi-chevron-right"></i></div>',
		autoplaySpeed: 2000,
		autoplay: false,
		initialSlide: 1,
		infinite: true,
		speed: 300,
		centerMode: false,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 2,
					infinite: true,
				}
    },
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					infinite: true, 
				}
    },
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
    },
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
    },
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }
  ]
	});
});



// -------------- tabination------------
jQuery(document).ready(function () {
    jQuery('.nav-tabs li').click(function(e) {
        jQuery('.nav-tabs li').removeClass('active');
        var $this = jQuery(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
});




// image selectoe js==================

function readURL(input) {
	if (input.files && input.files[0]) {
	  var reader = new FileReader();
	  reader.onload = function(e) {
		$('.image-upload-wrap').hide();
		$('.file-upload-content').show();
		$('.image-title').html(input.files[0].name);
	  };
  
	  reader.readAsDataURL(input.files[0]);
  
	} else {
	  removeUpload();
	}
  }
  
  function removeUpload() {
	$('.file-upload-input').replaceWith($('.file-upload-input').clone());
	$('.file-upload-content').hide();
	$('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
		  $('.image-upload-wrap').addClass('image-dropping');
	  });
	  $('.image-upload-wrap').bind('dragleave', function () {
		  $('.image-upload-wrap').removeClass('image-dropping');
  });

