import { test, expect } from '@playwright/test';

const BASE_URL = 'https://seleniumbase.io/coffee/';

test.describe('Coffee Shop Testing', () => {

  // Coffee_001
  test('Coffee_001 - Verify the total price once buy one coffee', async ({ page }) => {

    // 1. Go to Coffee Cart
    await page.goto(BASE_URL);

    // 2. Click Buy Item - Cafe Latte
    await page.locator('div[data-sb="Cafe-Latte"]').click();

    // 3. Click Cart
    await page.locator('a[aria-label="Cart page"]').click();

    // 4. Verify the total price
    await expect(page.locator('button.pay'))
      .toHaveText('Total: $16.00');
  });


  // Coffee_002
  test('Coffee_002 - Verify the total price once buy three coffee', async ({ page }) => {

    // 1. Go to Coffee Cart
    await page.goto(BASE_URL);

    // 2. Click Buy Item 1 - Mocha
    await page.locator('div[data-sb="Mocha"]').click();

    // 3. Click Buy Item 2 - Flat White
    await page.locator('div[data-sb="Flat-White"]').click();

    // 4. Click Buy Item 3 - Cappuccino
    await page.locator('div[data-sb="Cappuccino"]').click();

    // 5. Click Cart
    await page.locator('a[aria-label="Cart page"]').click();

    // 6. Verify the total price
    await expect(page.locator('button.pay'))
      .toHaveText('Total: $45.00');
  });


// Coffee_003
test('Coffee_003 - Verify the total price once buy the same kind of coffee 2 units', async ({ page }) => {

  // 1. Go to Coffee Cart
  await page.goto(BASE_URL);

  // 2. Click Buy Item - Americano
  await page.locator('div[data-sb="Americano"]').click();

  // 3. Click Cart
  await page.locator('a[aria-label="Cart page"]').click();

  // 4. Click Plus on the Americano item
  await page.getByRole('button', {
    name: 'Add one Americano'
  }).first().click();

  // 5. Verify the total price
  await expect(page.locator('button.pay'))
    .toHaveText('Total: $14.00');
});

});