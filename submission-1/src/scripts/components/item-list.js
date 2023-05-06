class ItemList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    fetch("../../DATA.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
    this.innerHTML = `
          <div class="item_list">
            Hello
          </div>
        `;
  }
}
customElements.define("item-list", ItemList);
