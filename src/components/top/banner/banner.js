import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

import 'slick-carousel';

notice.listen('init', () => {
  const slide = $('.banner__items');
  slide.slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
  });
});
