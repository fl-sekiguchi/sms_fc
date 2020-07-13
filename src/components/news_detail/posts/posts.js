import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

import 'slick-carousel';

notice.listen('init', () => {
  const slide = $('#js-slide');
  slide.slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
  });
});
