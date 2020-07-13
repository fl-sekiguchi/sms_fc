import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

notice.listen('init', () => {
  $('.article').each((key, value) => {
    $('.article__head', value).on('click', () => {
      if ($(value).hasClass('-open')) {
        $(value).removeClass('-open');
      } else {
        $(value).addClass('-open');
      }
    });
  });
});
