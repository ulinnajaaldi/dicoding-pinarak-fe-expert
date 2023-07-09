class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <div class="footer_container">
                <img src="./images/logo_white.png" alt="Logo Pinarak Resto" />
                <p>Sampai jumpa di kedai kami dan nikmati setiap hidangan spesial</p>
                <div></div>
                <p>Copyright &copy; 2023 - Pinarak Resto</p>
            </div>
        </footer>
        `;
  }
}

customElements.define('footer-element', FooterElement);
