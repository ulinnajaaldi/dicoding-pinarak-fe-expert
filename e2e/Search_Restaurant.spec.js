const assert = require('assert');

Feature('Search Restaurant');

Scenario('Empty search field', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.search-input');
  I.fillField('.search-input', '');
  I.click('.search-button');

  I.wait(2);

  I.see('Masukkan kata kunci pencarian', 'p');
});

Scenario('Empty search result', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.search-input');
  I.fillField('.search-input', 'qwertyuiop');
  I.click('.search-button');

  I.wait(2);

  I.see('Tidak menemukan hasil', 'p');
});

Scenario('Searching a menus, ', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.search-input');
  I.fillField('.search-input', 'Sirup');
  I.click('.search-button');

  I.waitForElement('.resto_item .resto_content .title a', 2);

  const firstRestaurant = locate('.resto_item .resto_content .title a').first();
  I.click(firstRestaurant);

  I.waitForElement('.details-menu-item .details-menu-wrapper .details-menu-description');

  const menuRestaurant = await I.grabTextFromAll(
    '.details-menu-item .details-menu-wrapper .details-menu-description',
  );

  const searchMenu = menuRestaurant.filter((menu) => menu.includes('Sirup'));

  assert.strictEqual(searchMenu[0], 'Sirup');
});
