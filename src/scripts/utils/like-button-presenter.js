import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../view/templates/template-creators';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants: FavoriteRestaurantIdb, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = FavoriteRestaurantIdb;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLikedButton();
    } else {
      this._renderLikeButton();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLikeButton() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLikedButton() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
