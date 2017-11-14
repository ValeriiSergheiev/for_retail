$(document).ready(function() {

  //select lang
  $('.select-lang-btn').click(function(event) {
    event.stopPropagation();
    $('.select-lang-content').slideToggle('fast');
  });
  $('html, .select-lang-content a').click(function() {
    $('.select-lang-content').fadeOut();
  });

	//slider
	$('.reviews-slider').slick({
  dots: false,
  infinite: true,
  //autoplay: true,
  speed: 300,
  //centerMode: true,
  //centerPadding: '5px',
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-arrow-slider-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="icon icon-arrow-slider-right"></i></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1
      }
    }
   ]
	});

  /* Smooth Scrolling
  ------------------------------------------------------ */

  $('.footer-nav a').on('click', function (e) {

    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });

  });
	
});
