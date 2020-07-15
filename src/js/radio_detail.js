/* eslint import/first: off */
import './common/initializer';
import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

import subscribeEvents from './modules/_events';

import '../components/radio_detail/article/radio';

class Main {
  onDOMContentLoaded = () => {
    notice.publish('init', []);
  };
}

const main = new Main();
window.addEventListener('DOMContentLoaded', main.onDOMContentLoaded);
subscribeEvents();
