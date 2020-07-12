import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

import 'jquery.easing';

notice.listen('init', () => {
  const sitesupport = $('.sitesupport');
  const sitesupportList = $('.sitesupport-list');

  $('.sitesupport-toggle').on('click', () => {
    if (sitesupport.hasClass('-open')) {
      sitesupport.removeClass('-open');
      sitesupportList.animate({ height: 'hide' });
    } else {
      sitesupport.addClass('-open');
      sitesupportList.animate({ height: 'show' });
    }
  });

  $('.pagetop').on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, { easing: 'easeOutExpo' });
  });
});
