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
      <div class="details-container container">
        <form class="form-review">
          <h1 class="details-subtitle">Tambahkan Ulasanmu</h1>
          <div>
            <label>Nama</label>
            <input type="text" name="name" id="name" placeholder="Nama" />
          </div>
          <div>
            <label>Ulasan</label>
            <textarea name="review" id="review" rows="4" placeholder="Ulasan"></textarea>
          </div>
          <button type="submit" id="submit-review">Kirim</button>
        </form>
      </div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#content');
    restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant.restaurant);

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
