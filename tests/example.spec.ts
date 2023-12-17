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

test('Check Web Page Describtion', async ({ page }) => {

  await page.goto(websiteURL);

  const description = await page.description();
  expect(description).toBe('Create Next App');

});

test('Check Web Page Title', async ({ page }) => {

  await page.goto(websiteURL);

  const title = await page.title();
  expect(title).toBe('Create Next App');
});


test('Check Div Element by Id', async ({ page }) => {
  // Navigate to your home page
  await page.goto(websiteURL);

  // Specify the id of the div element you want to check
  // const divId = 'idHero-text';

  // Wait for the div element to be present in the DOM
  await page.waitForSelector('#idHero-text');

  // Get the div element text content or any other property you want to test
  // const divTextContent = await page.$eval('#idHero-text', (div) => div.textContent);

  // Assert that the div element exists and has the expected content
  // expect(divTextContent).toBe('Discover The Essence<br /> Of France'); // Replace 'Expected Text Content' with your expected value
 // Check if the element with the specified id exists
 const elementExists = await page.$('#idHero-text');

 // Assert that the element with the specified id exists
 expect(elementExists).toBeTruthy();

});
