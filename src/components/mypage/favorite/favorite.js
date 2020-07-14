import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

import 'slick-carousel';

notice.listen('init', () => {
  const slide = $('.favorite__items');
  slide.slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '18%',
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
        },
      },
    ],
  });
});
