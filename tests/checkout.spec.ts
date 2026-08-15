import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

test.describe('SauceDemo - Checkout', () => {

  // TC-CKO-001
  test('TC-CKO-001 - Verify Checkout button functionality', async ({ page }) => {

    // 1. Go to SauceDemo
    await page.goto(BASE_URL);

    // 2. Login with valid username and password
    await page.locator('[data-test="username"]').fill(USERNAME);
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    // Verify login success
    await expect(page).toHaveURL(/inventory.html/);

    // 3. Add product to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Go to Cart
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Verify cart page
    await expect(page).toHaveURL(/cart.html/);

    // 4. Click Checkout button
    await page.locator('[data-test="checkout"]').click();

    // Expected Result:
    // User should be redirected to Checkout: Your Information page
    await expect(page).toHaveURL(/checkout-step-one.html/);
    await expect(
      page.locator('[data-test="title"]')
    ).toHaveText('Checkout: Your Information');
  });


  // TC-CKO-002
  test('TC-CKO-002 - Register in Checkout using valid inputs', async ({ page }) => {

    // 1. Go to SauceDemo
    await page.goto(BASE_URL);

    // 2. Login
    await page.locator('[data-test="username"]').fill(USERNAME);
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    // 3. Add product to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Go to Cart
    await page.locator('[data-test="shopping-cart-link"]').click();

    // 4. Click Checkout
    await page.locator('[data-test="checkout"]').click();

    // 5. Enter valid checkout information
    await page.locator('[data-test="firstName"]').fill('Omar');
    await page.locator('[data-test="lastName"]').fill('Abdo');
    await page.locator('[data-test="postalCode"]').fill('12345');

    // 6. Click Continue
    await page.locator('[data-test="continue"]').click();

    // Expected Result:
    // User should be redirected to Checkout: Overview
    await expect(page).toHaveURL(/checkout-step-two.html/);
    await expect(
      page.locator('[data-test="title"]')
    ).toHaveText('Checkout: Overview');
  });


 test('TC-CKO-012 - Verify Finish button functionality', async ({ page }) => {

  // 1. Go to SauceDemo
  await page.goto(BASE_URL);

  // 2. Login
  await page.locator('[data-test="username"]').fill(USERNAME);
  await page.locator('[data-test="password"]').fill(PASSWORD);
  await page.locator('[data-test="login-button"]').click();

  // 3. Add product to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 4. Go to Cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // 5. Click Checkout
  await page.locator('[data-test="checkout"]').click();

  // 6. Fill checkout information
  await page.locator('[data-test="firstName"]').fill('Omar');
  await page.locator('[data-test="lastName"]').fill('Abdo');
  await page.locator('[data-test="postalCode"]').fill('12345');

  // 7. Continue
  await page.locator('[data-test="continue"]').click();

  // Verify Checkout Overview
  await expect(page).toHaveURL(/checkout-step-two.html/);

  // 8. Click Finish
  await page.locator('[data-test="finish"]').click();

  // Expected Result 1:
  // User should go to Checkout Complete page
  await expect(page).toHaveURL(/checkout-complete.html/);

  // Expected Result 2:
  // Verify page title
  await expect(page.locator('[data-test="title"]'))
    .toHaveText('Checkout: Complete!');

  // Expected Result 3:
  // Verify success message
  await expect(page.locator('[data-test="complete-header"]'))
    .toHaveText('Thank you for your order!');
});
  });