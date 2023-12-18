import { test, expect } from '@playwright/test';

const websiteURL = 'http://localhost:3000/';
const websiteURL2 ='http://localhost:3000/about-us'

test('Check Web Page Title', async ({ page }) => {

  await page.goto(websiteURL);

  const title = await page.title();
  expect(title).toBe('Le Jardin');
});