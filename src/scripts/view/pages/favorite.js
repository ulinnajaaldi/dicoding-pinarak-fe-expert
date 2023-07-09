import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creators';

const Favorite = {
  async render() {
    return `
    <section class="resto_container container" id="item_content">
      <div class="resto_title">
        <h1>Restoran Favorite</h1>
        <p>Jangan lupa mampir terus ke Pinarak Resto Group!</p>
        <div class="divider"></div>
      </div>
      <p id="favorite-none"></p>
      <div class="resto_list"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.resto_list');
    const favoriteNone = document.querySelector('#favorite-none');
    if (restaurants.length === 0) {
      favoriteNone.innerHTML = `
        Belum ada restoran favorit yang ditambahkan :(
      `;
    }
    restaurants.forEach((restaurant) => {
      favoriteNone.innerHTML = '';
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
