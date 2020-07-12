import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

notice.listen('init', () => {
  const menu = $('.menu');
  $('.menu__toggle').on('click', () => {
    if (menu.hasClass('-show')) {
      menu.removeClass('-show');
    } else {
      menu.addClass('-show');
    }
  });
});
