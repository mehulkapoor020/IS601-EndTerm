import { test, expect } from '@playwright/test';

const websiteURL = 'http://localhost:3000/';
// const websiteURL2 ='http://localhost:3000/about-us'

// test('Check Web Page Title', async ({ page }) => {

//   await page.goto(websiteURL);

//   const title = await page.title();
//   expect(title).toBe('Le Jardin');
// });


// test('Check hero text content', async ({ page }) => {
//   // Navigate to your home page
//   await page.goto(websiteURL);


//   // Wait for the div element to be present in the DOM
//   await page.waitForSelector('#idHero-text');

  
//  const elementExists = await page.$('#idHero-text');

//  // Assert that the element with the specified id exists
//  expect(elementExists).toBeTruthy();

// });

// // test('Check Hero sub text', async ({ page }) => {
// //   // Navigate to your home page
// //   await page.goto(websiteURL);


// //   // Wait for the div element to be present in the DOM
// //   await page.waitForSelector('#id-hero-subtext');

  
// //  const elementExists = await page.$('id-hero-subtext');

// //  // Assert that the element with the specified id exists
// //  expect(elementExists).toBeTruthy();

// // });


// test('Check presence of Hero sub heading content', async ({ page }) => {
//   // Navigate to the page where the element is present
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the paragraph element to be present in the DOM
//   await page.waitForSelector('#id-hero-subtext');

//   // Check if the element with the specified id exists
//   const subHeadingElement = await page.$('#id-hero-subtext');

//   // Assert that the element with the specified id exists
//   expect(subHeadingElement).toBeTruthy();
// });

// test('Check Video element In Hero section', async ({ page }) => {
//   // Navigate to the page where the element is present
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the video element to be present in the DOM
//   await page.waitForSelector('#id-hero-video');

//   // Check if the video element with the specified id and attributes exists
//   const videoElement = await page.$eval('#id-hero-video', (element) => {
//     return {
//       id: element.id,
//       className: element.className,
//       autoPlay: element.hasAttribute('autoplay'),
//       loop: element.hasAttribute('loop'),
//       muted: element.hasAttribute('muted'),
//     };
//   });

//   // Assert that the video element with the specified id and attributes exists
//   expect(videoElement).toEqual({
//     id: 'id-hero-video',
//     className: 'absolute inset-0 object-cover w-full h-screen',
//     autoPlay: true,
//     loop: true,
//     muted: true,
//   });
// });

// test('Check CTA button and its content', async ({ page }) => {
//   // Navigate to the page where the button is present
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the button element with the specified ID to be present in the DOM
//   await page.waitForSelector('#id-hero-button');

//   // Get the text content of the button element with the specified ID
//   const buttonText = await page.$eval('#id-hero-button', (button) => button.textContent);

//   // Assert that the button element with the specified ID exists
//   expect(buttonText).toBeTruthy();

//   // Replace 'Expected Button Content' with the actual text content you expect
//   const expectedButtonContent = 'JOIN CLUB';

//   // Assert that the actual button content matches the expected content
//   expect(buttonText).toBe(expectedButtonContent);
// });

// // Bakers Club

// test('Check Bakers Club heading and its content', async ({ page }) => {
//   // Navigate to the page where the heading is present
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the heading element with the specified ID to be present in the DOM
//   await page.waitForSelector('#id-bakers-heading');

//   // Get the text content of the heading element with the specified ID
//   const headingText = await page.$eval('#id-bakers-heading', (heading) => heading.textContent);

//   // Assert that the heading element with the specified ID exists
//   expect(headingText).toBeTruthy();

//   // Replace 'Expected Heading Content' with the actual text content you expect
//   const expectedHeadingContent = "Baker's Club";

//   // Assert that the actual heading content matches the expected content
//   expect(headingText).toBe(expectedHeadingContent);
// });

// test('Check the Bakers Club subtext', async ({ page }) => {
//   // Navigate to the page where the subtext is present
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the subtext element with the specified ID to be present in the DOM
//   await page.waitForSelector('#id-bakers-Subtext');


//   // Check if the element with the specified id exists
//   const subtextContent = await page.$('#id-bakers-Subtext');

//   // Assert that the element with the specified id exists
//   expect(subtextContent).toBeTruthy();
// });

// test('Check Bakes club button presence and its content', async ({ page }) => {
//   // Navigate to the page where the button is present
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the button element with the specified ID to be present in the DOM
//   await page.waitForSelector('#id-bakers-Button');

//   // Get the text content of the button element with the specified ID
//   const buttonText = await page.$eval('#id-bakers-Button', (button) => button.textContent);

//   // Assert that the button element with the specified ID exists
//   expect(buttonText).toBeTruthy();

//   // Replace 'Expected Button Content' with the actual text content you expect
//   const expectedButtonContent = 'JOIN CLUB';

//   // Assert that the actual button content matches the expected content
//   expect(buttonText).toBe(expectedButtonContent);
// });

// test('Check presence of the Bakersclub image', async ({ page }) => {
//   // Navigate to the page where the image is present
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the image element with the specified ID to be present in the DOM
//   await page.waitForSelector('#id-bakers-image');

//   // Check if the image element with the specified ID exists
//   const imageElement = await page.$('#id-bakers-image');

//   // Assert that the image element with the specified ID exists
//   expect(imageElement).toBeTruthy();
// });

// // chef's special

// test('Check presence of the chefs special heading and its content', async ({ page }) => {
//   // Navigate to the page where the heading is present
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the heading element with the specified ID to be present in the DOM
//   await page.waitForSelector('#id-menu-heading');

//   // Get the text content of the heading element with the specified ID
//   const headingText = await page.$eval('#id-menu-heading', (heading) => heading.textContent);

//   // Assert that the heading element with the specified ID exists
//   expect(headingText).toBeTruthy();

//   // Replace 'Expected Heading Content' with the actual text content you expect
//   const expectedHeadingContent = "Chef's Special";

//   // Assert that the actual heading content matches the expected content
//   expect(headingText).toBe(expectedHeadingContent);
// });

// test('Check Chefs special presence of menu items', async ({ page }) => {
//   // Navigate to the page where the menu items are rendered
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the menu container with the specified ID to be present in the DOM
//   await page.waitForSelector('#id-menu-list');

//   // Get the number of menu items rendered on the page
//   const menuItems = await page.$('#id-menu-list');

//   // Optionally, you can iterate over each menu item and perform specific checks
  
//     expect(menuItems).toBeTruthy();

// });

// test('Check presence of item name and price in Chefs Special', async ({ page }) => {
//   // Navigate to the page where the CardFooter component is rendered
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the CardFooter component to be present in the DOM
//   await page.waitForSelector('#id-menuNamePrice');

//   // Get the content of the <b> tag within the CardFooter component
//   const boldTagContent = await page.$eval('#id-menuNamePrice b', (boldTag) => boldTag.textContent);

//   // Get the content of the <p> tag within the CardFooter component
//   const paragraphTagContent = await page.$eval('#id-menuNamePrice p', (paragraphTag) => paragraphTag.textContent);

//   // Assert that the <b> tag content is present and not empty
//   expect(boldTagContent).toBeTruthy();

//   // Assert that the <p> tag content is present and not empty
//   expect(paragraphTagContent).toBeTruthy();
// });

// //Tesimonials

// test('Check Testimonails presence and content of heading', async ({ page }) => {
//     // Navigate to the page where the component is rendered
//     await page.goto(websiteURL); // Replace websiteURL with the actual URL
  
//     // Wait for the <p> tag with the specified content to be present in the DOM
//     await page.waitForSelector('div#reviews p.lg\\:text-4xl.font-bold.text-3xl');
  
//     // Get the text content of the <p> tag with the specified content
//     const paragraphText = await page.$eval('div#reviews p.lg\\:text-4xl.font-bold.text-3xl', (paragraph) => paragraph.textContent);
  
//     // Assert that the <p> tag with the specified content exists
//     expect(paragraphText).toBeTruthy();
  
//     // Replace 'Foodies Experience' with the actual text content you expect
//     const expectedParagraphContent = 'Foodies Experience';
  
//     // Assert that the actual <p> tag content matches the expected content
//     expect(paragraphText).toBe(expectedParagraphContent);
//   });

//   test('Check Testimonails sectionfor the presence and content of the button', async ({ page }) => {
//   // Navigate to the page where the component is rendered
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the button element with the specified ID to be present in the DOM
//   await page.waitForSelector('#id-reviews-button');

//   // Get the text content of the button with the specified ID
//   const buttonText = await page.$eval('#id-reviews-button', (button) => button.textContent);

//   // Assert that the button element with the specified ID exists
//   expect(buttonText).toBeTruthy();

//   // Replace 'KNOW MORE ABOUT US' with the actual text content you expect
//   const expectedButtonText = 'KNOW MORE ABOUT US';

//   // Assert that the actual button content matches the expected content
//   expect(buttonText).toBe(expectedButtonText);
// });


// test('Check presence Ratings in the testimonials', async ({ page }) => {
//   // Navigate to the page where the component is rendered
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the div element with the specified ID to be present in the DOM
//   await page.waitForSelector('#id-ratings');

//   // Get the text content of the first <p> tag
//   const firstPText = await page.$eval('#id-ratings > p:nth-child(1)', (pTag) => pTag.textContent);

//   // Assert that the first <p> tag exists and has content
//   expect(firstPText).toBeTruthy();

//   // Replace 'Rating' with the actual text content you expect for the first <p> tag
//   const expectedFirstPText = 'Rating';

//   // Assert that the actual content of the first <p> tag matches the expected content
//   expect(firstPText).toBe(expectedFirstPText);

// });

// // aboutus section

// test('Check About Us section for presence and content of heading', async ({ page }) => {
//   // Navigate to the page where the component is rendered
//   await page.goto(websiteURL2); // Replace websiteURL with the actual URL

//   // Wait for the first <p> tag to be present in the DOM
//   await page.waitForSelector('#id-aboutUs-data p:nth-child(1)');

//   // Get the text content of the first <p> tag
//   const firstParagraphText = await page.$eval('#id-aboutUs-data p:nth-child(1)', (paragraph) => paragraph.textContent);

//   // Assert that the first <p> tag exists
//   expect(firstParagraphText).toBeTruthy();

//   // Replace 'Who are we' with the actual text content you expect for the first <p> tag
//   const expectedFirstParagraphContent = 'Who are we';

//   // Assert that the actual content of the first <p> tag matches the expected content
//   expect(firstParagraphText).toBe(expectedFirstParagraphContent);
// });

// test('Check About Us section for presence and content of Subtext', async ({ page }) => {
//   // Navigate to the page where the component is rendered
//   await page.goto(websiteURL2); // Replace websiteURL with the actual URL

//   // Wait for the second <p> tag to be present in the DOM
//   await page.waitForSelector('#id-aboutUs-data p:nth-child(2)');

//   // Get the text content of the second <p> tag
//   const secondParagraphText = await page.$eval('#id-aboutUs-data p:nth-child(2)', (paragraph) => paragraph.textContent);

//   // Assert that the second <p> tag exists
//   expect(secondParagraphText).toBeTruthy();

//   // Replace the expected content with the actual text content you expect for the second <p> tag
//   const expectedSecondParagraphContent = 'We our an Authentic French Bakery. Our aim is to transport customers on a delightful journey to France through our renowned selection of delectable French pastries and culinary delights.';

//   // Assert that the actual content of the second <p> tag matches the expected content
//   expect(secondParagraphText).toBe(expectedSecondParagraphContent);
// });

// test('Check presence of the image in About us section', async ({ page }) => {
//   // Navigate to the page where the component is rendered
//   await page.goto(websiteURL2); // Replace websiteURL with the actual URL

//   // Wait for the image element to be present in the DOM
//   await page.waitForSelector('#id-aboutUs img');

//   // Get the image element
//   const imageElement = await page.$('#id-aboutUs img');

//   // Assert that the image element exists
//   expect(imageElement).toBeTruthy();
// });

// // Our mission

// test('Check Our Mission section for presence of heading content', async ({ page }) => {
//   // Navigate to the page where the component is rendered
//   await page.goto(websiteURL2); // Replace websiteURL with the actual URL

//   // Wait for the first <p> tag to be present in the DOM
//   await page.waitForSelector('#id-missionText p:nth-child(1)');

//   // Get the text content of the first <p> tag
//   const firstParagraphText = await page.$eval('#id-missionText p:nth-child(1)', (paragraph) => paragraph.textContent);

//   // Assert that the first <p> tag exists
//   expect(firstParagraphText).toBeTruthy();

//   // Replace 'Who are we' with the actual text content you expect for the first <p> tag
//   const expectedFirstParagraphContent = 'Our Mission';

//   // Assert that the actual content of the first <p> tag matches the expected content
//   expect(firstParagraphText).toBe(expectedFirstParagraphContent);
// });

// test('Check Our Mission section for presence and content of Subtext', async ({ page }) => {
//   // Navigate to the page where the component is rendered
//   await page.goto(websiteURL2); // Replace websiteURL with the actual URL

//   // Wait for the second <p> tag to be present in the DOM
//   await page.waitForSelector('#id-missionText p:nth-child(2)');

//   // Get the text content of the second <p> tag
//   const secondParagraphText = await page.$eval('#id-missionText p:nth-child(2)', (paragraph) => paragraph.textContent);

//   // Assert that the second <p> tag exists
//   expect(secondParagraphText).toBeTruthy();

//   // Replace the expected content with the actual text content you expect for the second <p> tag
//   const expectedSecondParagraphContent = 'Our goal is to address hunger through a buy-1-give-1 model. For every item purchased, we commit to donating a corresponding item to the local food bank, contributing to the fight against hunger.';

//   // Assert that the actual content of the second <p> tag matches the expected content
//   expect(secondParagraphText).toBe(expectedSecondParagraphContent);
// });

// test('Check presence of the image in Our mission section', async ({ page }) => {
//   // Navigate to the page where the component is rendered
//   await page.goto(websiteURL2); // Replace websiteURL with the actual URL

//   // Wait for the image element to be present in the DOM
//   await page.waitForSelector('#id-mission img');

//   // Get the image element
//   const imageElement = await page.$('#id-mission img');

//   // Assert that the image element exists
//   expect(imageElement).toBeTruthy();
// });

// // Common components:

// test('Check presence of Brand logo in the NavBar', async ({ page }) => {
//   // Navigate to the page where the component is rendered
//   await page.goto(websiteURL); // Replace websiteURL with the actual URL

//   // Wait for the Link component to be present in the DOM
//   await page.waitForSelector('#id-brand-logo');

//   // Get the Image element within the Link component
//   const imageElement = await page.$('#id-brand-logo img');

//   // Assert that the Image element exists
//   expect(imageElement).toBeTruthy();
// });
