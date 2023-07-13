const assert = require('assert');

Feature('Liking Restaurant');

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Belum ada restoran favorit yang ditambahkan :(', 'p');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto_item .resto_content .title a', 2);

  const firstRestaurant = locate('.resto_item .resto_content .title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto_item .resto_content .title h1');
  const likedRestaurantTitle = await I.grabTextFrom('.resto_item .resto_content .title h1');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto_item .resto_content .title a', 2);

  const firstRestaurant = locate('.resto_item .resto_content .title a').first();
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto_item .resto_content .title a');

  const likedRestaurant = locate('.resto_item .resto_content .title a').first();
  I.click(likedRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Belum ada restoran favorit yang ditambahkan :(', 'p');
});
