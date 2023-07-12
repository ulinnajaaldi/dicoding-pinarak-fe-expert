const assert = require('assert');

Feature('Liking Restaurant');

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Belum ada restoran favorit yang ditambahkan :(', '#favorite-none');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(2);
  I.seeElement('.resto_item .resto_content .title a');

  const firstRestaurant = locate('.resto_item .resto_content .title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto_item .resto_content .title h1');
  const likedRestaurantTitle = await I.grabTextFrom('.resto_item .resto_content .title h1');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(2);
  I.seeElement('.resto_item .resto_content .title a');

  const firstRestaurant = locate('.resto_item .resto_content .title a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto_item .resto_content .title a');

  const likedRestaurant = locate('.resto_item .resto_content .title a').first();
  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Belum ada restoran favorit yang ditambahkan :(', '#favorite-none');
});
