document.addEventListener("DOMContentLoaded", function(event) { 
  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    variableWidth: true,
    centerMode:true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          centerMode:false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 460,
        settings: {
          centerMode:false,
          variableWidth: false,
          dots: true
        }
      },
    ]
  });
  
  $('.slider-nav')
      .on('init', function(event, slick) {
          $('.slider-nav .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
          slidesToShow: 3,
          arrows: true,
          nextArrow: $(".slider-nav__next"),
          prevArrow: $(".slider-nav__prev"),
          dots: false,
          focusOnSelect: false,
          infinite: true,
          vertical: true,
          responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 3,
                  arrows: true,
                  nextArrow: $(".slider-nav__next"),
                  prevArrow: $(".slider-nav__prev"),
                  dots: false,
                  focusOnSelect: false,
                  infinite: true,
                  vertical: false,
                
                }
              },
            ]
      });
    
  $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
      $('.slider-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
  });
  
  $('.slider-nav').on('click', '.slick-slide', function(event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');
  
      $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });

});
