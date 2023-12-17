import { test, expect } from '@playwright/test';

const websiteURL = 'http://localhost:3000/';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('Check Web Page Describtion', async ({ page }) => {

//   await page.goto(websiteURL);

//   const description = await page.description;
//   expect(description).toBe('Create Next App');

// });

test('Check Web Page Title', async ({ page }) => {

  await page.goto(websiteURL);

  const title = await page.title();
  expect(title).toBe('Create Next App');
});


// test('Check Div Element by Id', async ({ page }) => {
//   // Navigate to your home page
//   await page.goto(websiteURL);


//   // Wait for the div element to be present in the DOM
//   await page.waitForSelector('#idHero-text');

  
//  const elementExists = await page.$('#idHero-text');

//  // Assert that the element with the specified id exists
//  expect(elementExists).toBeTruthy();

// });

// test('Check Hero sub text', async ({ page }) => {
//   // Navigate to your home page
//   await page.goto(websiteURL);


//   // Wait for the div element to be present in the DOM
//   await page.waitForSelector('#id-hero-subtext');

  
//  const elementExists = await page.$('id-hero-subtext');

//  // Assert that the element with the specified id exists
//  expect(elementExists).toBeTruthy();

// });
