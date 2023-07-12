import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import { PostReview } from '../../utils/api-handler';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import { createDetailRestaurantTemplate } from '../templates/template-creators';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

const DetailsResto = {
  async render() {
    return `
      <section id="content"></section>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#content');

    try {
      const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant.restaurant);
    } catch (error) {
      restaurantContainer.innerHTML =
        '<p id="page-none">Upps... Maaf halaman tidak bisa diakses <br/> Coba periksa koneksi anda </p>';
    }

    const submitReviewButton = document.querySelector('#submit-review');
    submitReviewButton.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};

export default DetailsResto;
