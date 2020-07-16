import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

const $window = $(window);

notice.listen('scroll', scrollTop => {
  $('.fade').each((key, value) => {
    const start = $(value).offset().top - $window.height() * 0.5;
    if (scrollTop > start) {
      $(value).addClass('fade--start');
    }
  });
});
