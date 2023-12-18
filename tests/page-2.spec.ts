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

  test('Check About Us section for presence and content of Subtext', async ({ page }) => {
  // Navigate to the page where the component is rendered
  await page.goto(websiteURL2); // Replace websiteURL with the actual URL

  // Wait for the second <p> tag to be present in the DOM
  await page.waitForSelector('#id-aboutUs-data p:nth-child(2)');

  // Get the text content of the second <p> tag
  const secondParagraphText = await page.$eval('#id-aboutUs-data p:nth-child(2)', (paragraph) => paragraph.textContent);

  // Assert that the second <p> tag exists
  expect(secondParagraphText).toBeTruthy();

  // Replace the expected content with the actual text content you expect for the second <p> tag
  const expectedSecondParagraphContent = 'We our an Authentic French Bakery. Our aim is to transport customers on a delightful journey to France through our renowned selection of delectable French pastries and culinary delights.';

  // Assert that the actual content of the second <p> tag matches the expected content
  expect(secondParagraphText).toBe(expectedSecondParagraphContent);
});

test('Check presence of the image in About us section', async ({ page }) => {
    // Navigate to the page where the component is rendered
    await page.goto(websiteURL2); // Replace websiteURL with the actual URL
  
    // Wait for the image element to be present in the DOM
    await page.waitForSelector('#id-aboutUs img');
  
    // Get the image element
    const imageElement = await page.$('#id-aboutUs img');
  
    // Assert that the image element exists
    expect(imageElement).toBeTruthy();
  });
  

  