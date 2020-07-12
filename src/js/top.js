/* eslint import/first: off */
import './common/initializer';
import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

import subscribeEvents from './modules/_events';

import '../components/top/banner/banner';
import '../components/top/fixedCard/fixedCard';

class Main {
  onDOMContentLoaded = () => {
    notice.publish('init', []);
  };
}

const main = new Main();
window.addEventListener('DOMContentLoaded', main.onDOMContentLoaded);
subscribeEvents();
