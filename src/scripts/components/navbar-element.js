class NavbarElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header id="header">
            <nav class="nav_container container">
                <div class="nav_brand">
                <a href="#/" class="logo_wrapper" aria-label="Pinarak Resto App"
                    ><img src="./images/logo.png" id="logo" alt="Logo Pinaraka Resto"
                    width="202" height="40"/></a>
                </div>
                <div class="nav_content">
                <button
                    id="hamburger"
                    aria-label="Buka menu navigasi"
                    title="Menu navigasi"
                >
                    &#9776;
                </button>
                <div class="nav_list">
                    <a href="#/" class="nav_item">Home</a>
                    <a href="#/favorite" class="nav_item">Favorite</a>
                    <a
                    href="https://ulinnaja-aldi.vercel.app/"
                    class="nav_item"
                    target="_blank"
                    rel="noopener noreferrer"
                    >About Us</a
                    >
                </div>
                </div>
            </nav>
        </header>
        `;
  }
}

customElements.define('navbar-element', NavbarElement);
