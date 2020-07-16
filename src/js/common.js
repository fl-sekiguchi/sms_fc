/* eslint import/first: off */
import './common/initializer';
import $ from 'jquery';
import notice from 'libraries-frontend-framelunch/js/notice';

import subscribeEvents from './modules/_events';

import '../components/header/menu';
import '../components/footer/footer';
import '../components/animation/fade';
import '../components/parts/loading/loading';

class Main {
  onDOMContentLoaded = () => {
    notice.publish('init', []);
  };
}

const main = new Main();
window.addEventListener('DOMContentLoaded', main.onDOMContentLoaded);
subscribeEvents();
