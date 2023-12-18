import { test, expect } from '@playwright/test';

const websiteURL = 'http://localhost:3000/';
const websiteURL2 ='http://localhost:3000/about-us';

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

  test('Check presence of Hero sub heading content', async ({ page }) => {
    // Navigate to the page where the element is present
    await page.goto(websiteURL); // Replace websiteURL with the actual URL
  
    // Wait for the paragraph element to be present in the DOM
    await page.waitForSelector('#id-hero-subtext');
  
    // Check if the element with the specified id exists
    const subHeadingElement = await page.$('#id-hero-subtext');
  
    // Assert that the element with the specified id exists
    expect(subHeadingElement).toBeTruthy();
  });
  
  test('Check Video element In Hero section', async ({ page }) => {
    // Navigate to the page where the element is present
    await page.goto(websiteURL); // Replace websiteURL with the actual URL
  
    // Wait for the video element to be present in the DOM
    await page.waitForSelector('#id-hero-video');
  
    // Check if the video element with the specified id and attributes exists
    const videoElement = await page.$eval('#id-hero-video', (element) => {
      return {
        id: element.id,
        className: element.className,
        autoPlay: element.hasAttribute('autoplay'),
        loop: element.hasAttribute('loop'),
        muted: element.hasAttribute('muted'),
      };
    });
  
    // Assert that the video element with the specified id and attributes exists
    expect(videoElement).toEqual({
      id: 'id-hero-video',
      className: 'absolute inset-0 object-cover w-full h-screen',
      autoPlay: true,
      loop: true,
      muted: true,
    });
  });

  test('Check CTA button and its content', async ({ page }) => {
    // Navigate to the page where the button is present
    await page.goto(websiteURL); // Replace websiteURL with the actual URL
  
    // Wait for the button element with the specified ID to be present in the DOM
    await page.waitForSelector('#id-hero-button');
  
    // Get the text content of the button element with the specified ID
    const buttonText = await page.$eval('#id-hero-button', (button) => button.textContent);
  
    // Assert that the button element with the specified ID exists
    expect(buttonText).toBeTruthy();
  
    // Replace 'Expected Button Content' with the actual text content you expect
    const expectedButtonContent = 'JOIN CLUB';
  
    // Assert that the actual button content matches the expected content
    expect(buttonText).toBe(expectedButtonContent);
  });


  test('Check Bakers Club heading and its content', async ({ page }) => {
    // Navigate to the page where the heading is present
    await page.goto(websiteURL); // Replace websiteURL with the actual URL
  
    // Wait for the heading element with the specified ID to be present in the DOM
    await page.waitForSelector('#id-bakers-heading');
  
    // Get the text content of the heading element with the specified ID
    const headingText = await page.$eval('#id-bakers-heading', (heading) => heading.textContent);
  
    // Assert that the heading element with the specified ID exists
    expect(headingText).toBeTruthy();
  
    // Replace 'Expected Heading Content' with the actual text content you expect
    const expectedHeadingContent = "Baker's Club";
  
    // Assert that the actual heading content matches the expected content
    expect(headingText).toBe(expectedHeadingContent);
  });
  