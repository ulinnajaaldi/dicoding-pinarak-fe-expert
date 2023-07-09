import RestaurantApiSource from '../../data/restaurant-api-source';
import { SearchHandler } from '../../utils/api-handler';
import { createRestaurantItemTemplate } from '../templates/template-creators';

const Home = {
  async render() {
    return `
    <section class="hero_container" id="hero">
      <img src="./images/heros/hero-image_2.jpg" alt="Masakan trandisional yang ada di piring" />
      <div class="hero_content">
        <h1>Pinarak Resto</h1>
        <p>
          Nikmati berbagai macam olahan tradisional dengan harga terjangkau dengan kualitas
          terbaik.
        </p>
      </div>
    </section>
    <section class="resto_container container" id="item_content">
      <div class="resto_title">
        <h2>Kunjungi Pinarak Resto Group</h2>
        <p>Rasakan masakan kami yang tersebar di seluruh kota di Indonesia.</p>
      </div>
      <div class="resto_list"></div>
    </section>
    <section class="search-container container">
    <div class="divider"></div>
      <div class="search-content">
        <h2>Tidak menemukan tempat yang cocok?</h2>
        <p>Coba Masukan nama, kategori, atau menu yang kamu inginkan kami menyediakan semuanya.</p>
      </div>
      <div class="search-list-wrapper">
        <form class="search-input-wrapper">
          <input type="text" id="search-resto" placeholder="Cari restoran" class="search-input" />
          <button type="submit" class="search-button">Cari</button>
        </form>
        <p id="search-none"></p>
        <div class="search-list"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurant();
    const restaurantContainer = document.querySelector('.resto_list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const searchForm = document.querySelector('.search-input-wrapper');
    searchForm.addEventListener('click', (event) => {
      event.preventDefault();
      SearchHandler();
    });
  },
};

export default Home;
