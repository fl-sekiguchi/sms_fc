import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

notice.listen('init', () => {
  // eslint-disable-next-line no-undef
  const myPlayer = videojs('js-radio');
  const toggle = $('.radio__operation-toggle');
  const rewindAmount = 10;

  $('.radio__operation-toggle').on('click', () => {
    if (myPlayer.paused()) {
      myPlayer.play();
      toggle.addClass('-isPlay');
    } else {
      myPlayer.pause();
      toggle.removeClass('-isPlay');
    }
  });

  $('.radio__operation-prev').on('click', () => {
    const videoTime = myPlayer.currentTime();
    const newTime = videoTime - rewindAmount;
    if (videoTime >= newTime) {
      myPlayer.currentTime(newTime);
      myPlayer.play();
    }
  });

  $('.radio__operation-next').on('click', () => {
    const videoTime = myPlayer.currentTime();
    const endedTime = myPlayer.duration();
    const newTime = videoTime + rewindAmount;
    if (endedTime >= newTime) {
      myPlayer.currentTime(newTime);
      myPlayer.play();
    }
  });
});
