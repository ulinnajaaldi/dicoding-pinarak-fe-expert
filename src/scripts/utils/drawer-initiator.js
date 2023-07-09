const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button, content);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button, content);
    });
  },

  _toggleDrawer(event, drawer, button, content) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    button.innerHTML = drawer.classList.contains('open') ? '&times' : '&#9776';
    button.ariaLabel = drawer.classList.contains('open')
      ? 'Tutup menu navigasi'
      : 'Buka menu navigasi';
    content.classList.toggle('blur');
    document.querySelector('footer').classList.toggle('blur');
  },

  _closeDrawer(event, drawer, button, content) {
    event.stopPropagation();
    drawer.classList.remove('open');
    content.classList.remove('blur');
    button.innerHTML = '&#9776';
    button.ariaLabel = 'Buka menu navigasi';
  },
};

export default DrawerInitiator;
