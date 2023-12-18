import { test, expect } from '@playwright/test';

const websiteURL = 'http://localhost:3000/';
const websiteURL2 ='http://localhost:3000/about-us'

test('Check Web Page Title', async ({ page }) => {

  await page.goto(websiteURL);

  const title = await page.title();
  expect(title).toBe('Le Jardin');
});

test('Check hero text content', async ({ page }) => {
    // Navigate to your home page
    await page.goto(websiteURL);
  
  
    // Wait for the div element to be present in the DOM
    await page.waitForSelector('#idHero-text');
  
    
   const elementExists = await page.$('#idHero-text');
  
   // Assert that the element with the specified id exists
   expect(elementExists).toBeTruthy();
  
  });
  