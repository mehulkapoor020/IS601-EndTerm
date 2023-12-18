import { test, expect } from '@playwright/test';

const websiteURL = 'http://localhost:3000/';
const websiteURL2 ='http://localhost:3000/about-us';

test('Check About Us section for presence and content of heading', async ({ page }) => {
    // Navigate to the page where the component is rendered
    await page.goto(websiteURL2); // Replace websiteURL with the actual URL
  
    // Wait for the first <p> tag to be present in the DOM
    await page.waitForSelector('#id-aboutUs-data p:nth-child(1)');
  
    // Get the text content of the first <p> tag
    const firstParagraphText = await page.$eval('#id-aboutUs-data p:nth-child(1)', (paragraph) => paragraph.textContent);
  
    // Assert that the first <p> tag exists
    expect(firstParagraphText).toBeTruthy();
  
    // Replace 'Who are we' with the actual text content you expect for the first <p> tag
    const expectedFirstParagraphContent = 'Who are we';
  
    // Assert that the actual content of the first <p> tag matches the expected content
    expect(firstParagraphText).toBe(expectedFirstParagraphContent);
  });
  