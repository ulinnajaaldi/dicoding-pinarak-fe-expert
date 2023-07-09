import 'regenerator-runtime'; /* for async await transpile */

import '../styles/index.scss';
import '../styles/responsive.scss';

import './components/index';

import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav_list'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
