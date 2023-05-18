import data from "../../DATA.json";
import "./card/card-item";

class ItemList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const restaurants = data.restaurants;
    let cardList = "";
    restaurants.forEach((restaurant) => {
      cardList += `
      <card-item
        image="${restaurant.pictureId}"
        name="${restaurant.name}"
        city="${restaurant.city}"
        rating="${restaurant.rating}"
        description="${restaurant.description}"
      ></card-item>
    `;
    });
    this.innerHTML = `
      <div class="resto_list">
        ${cardList}
      </div>
    `;
  }
}
customElements.define("item-list", ItemList);
