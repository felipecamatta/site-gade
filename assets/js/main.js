(function ($) {
  "use strict";

  // Initiate the wowjs animation library
  new WOW().init();

  // CounterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonial carousel
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 4000,
    dots: true,
    items: 1,
    loop: true,
    margin: 10,
  });

  // Clients carousel
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

})(jQuery);
