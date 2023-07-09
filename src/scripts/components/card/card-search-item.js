class CardSearchItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card-seach-item">
        <a href="${this.getAttribute('href')}" class="card-search-item-container">
            <h1>
            🍴 ${this.getAttribute('name')} <span>(${this.getAttribute('city')})</span>
            </h1>
            <h2>&#9733; ${this.getAttribute('rating')}</h2>
        </a>
    </div>
    `;
  }
}

customElements.define('card-search-item', CardSearchItem);
