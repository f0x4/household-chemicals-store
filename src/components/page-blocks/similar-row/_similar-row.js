$('.similar-row__row').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,

          swipeToSlide: true,

        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,

          swipeToSlide: true,
          centerMode: true,
          infinite: true,
          variableWidth: true

        }
      },
      {
        breakpoint: 461,
        settings: {
            slidesToShow: 1,
            centerMode: true,
            infinite: true,
            variableWidth: true,
            swipeToSlide: true
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
