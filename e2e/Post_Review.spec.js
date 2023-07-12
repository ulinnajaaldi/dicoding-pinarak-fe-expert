const assert = require('assert');

Feature('Post Review');

Scenario('Post a review', async ({ I }) => {
  I.amOnPage('/');

  I.wait(2);

  I.seeElement('.resto_item .resto_content .title a');
  I.click(locate('.resto_item .resto_content .title a').first());

  I.seeElement('.form-review');

  const name = 'From E2E Testing';
  const review = 'From E2E Testing Review';

  I.fillField('input[name="name"]', name);
  I.fillField('textarea[name="review"]', review);

  I.click('#submit-review');

  I.seeElement('.details-review-item .review-item-header .review-item-user h4');
  I.seeElement('.details-review-item .review-item-desc');

  const lastReviewName = locate(
    '.details-review-item .review-item-header .review-item-user h4',
  ).last();
  const lastReviewContent = locate('.details-review-item .review-item-desc').last();

  const lastReviewNameText = await I.grabTextFrom(lastReviewName);
  const lastReviewContentText = await I.grabTextFrom(lastReviewContent);

  I.wait(2);

  assert.strictEqual(lastReviewNameText, name);
  assert.strictEqual(lastReviewContentText, review);
});
