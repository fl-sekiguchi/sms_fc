import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

notice.listen('init', scrollTop => {
  let loadCnt = 0;
  const images = $('img');
  const imageLength = images.length;

  const loading = $('.loading');
  const preload = $('.preload');

  const loadingProgressBar = $('.loading__progress-bar');

  const loadComplete = () => {
    loadCnt += 1;
    const progress = (loadCnt / imageLength) * 100;
    loadingProgressBar.css('width', `${progress}%`);
    if (loadCnt >= imageLength) {
      setTimeout(() => {
        preload.addClass('-show');
        loading.fadeOut();
      }, 1000);
    }
  };

  const loadStart = () => {
    images.each(function() {
      const image = new Image();
      image.onload = () => {
        loadComplete();
      };
      image.onerror = () => {
        loadComplete();
      };
      image.src = $(this).attr('src');
    });
  };

  loadStart();
});
