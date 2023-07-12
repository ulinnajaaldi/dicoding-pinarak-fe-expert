class CardItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="resto_item">
        <div class="resto_image_wrapper">
          <img
            src="${this.getAttribute('image')}"
            alt="${this.getAttribute('name')}"
            class="lazyload"
          />
          <p>${this.getAttribute('city')}</p>
        </div>
        <div class="resto_content">
          <div class="title">
            <h1>
              <a href="${this.getAttribute('href')}">${this.getAttribute('name')}</a>
            </h1>
            <div class="rating" title="Rating ${this.getAttribute('name')}">
              <p>&#9733;</p>
              <p>${this.getAttribute('rating')}</p>
            </div>
          </div>
          <p class="desc">
            ${this.getAttribute('description')}
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('card-item', CardItem);
