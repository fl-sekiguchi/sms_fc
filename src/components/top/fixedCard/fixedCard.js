import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

notice.listen('init', () => {
  const fixedCard = $('.fixedCard');
  $('.fixedCard-close').on('click', () => {
    fixedCard.fadeOut('fast');
  });
});
