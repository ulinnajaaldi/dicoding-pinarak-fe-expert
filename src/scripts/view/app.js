import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const hamburgerButton = document.querySelector('#hamburger');
    const navList = document.querySelector('.nav_list');
    const navItems = document.querySelectorAll('.nav_item');
    const mainElement = document.querySelector('main');
    const header = document.querySelector('header');
    const skipLink = document.querySelector('.skip_link');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 0);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab' && navList.classList.contains('open')) {
        const lastNavItem = navItems[navItems.length - 1];
        if (lastNavItem === event.target) {
          navList.classList.remove('open');
          mainElement.classList.remove('blur');
          footer.classList.remove('blur');
          hamburgerButton.innerHTML = `&#9776;`;
          hamburgerButton.ariaLabel = 'Buka menu navigasi';
        }
      }
    });

    const closeNavList = () => {
      navList.classList.remove('open');
      mainElement.classList.remove('blur');
      footer.classList.remove('blur');
      hamburgerButton.innerHTML = '&#9776';
      hamburgerButton.ariaLabel = 'Buka menu navigasi';
    };

    navList.addEventListener('click', closeNavList);
    mainElement.addEventListener('click', closeNavList);

    const closeSkipLink = () => {
      skipLink.blur();
    };
    skipLink.addEventListener('click', closeSkipLink);
    skipLink.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        closeSkipLink();
      }
    });

    window.scrollTo(0, 0);
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
