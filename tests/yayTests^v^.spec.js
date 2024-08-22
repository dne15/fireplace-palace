import { test, expect } from '@playwright/test';

test('We out here 0_o', async ({ page }) => {
await page.goto('localhost:3000')
});
test('Go to the contact page :D', async ({ page }) => {
  await page.goto('localhost:3000/Contact');
});

test('fill that form >:)', async ({ page }) => {
  await page.goto('http://localhost:3000/Contact');
  await page.waitForSelector('input[name="fullName"]');
await page.fill('input[name="fullName"]', 'Frank');
  await page.fill('input[name="postcode"]', 'Dionne');
  await page.fill('input[name="house"]', 'Aaron');
  await page.fill('input[name="city"]', 'Dury Lane');
  await page.fill('input[name="phoneNumber"]', '080000 1066');
  await page.fill('input[name="email"]', 'test@QA.com');
});

test('submit the form and see if the message is all gucci :)', async ({ page }) => {
  await page.goto('http://localhost:3000/Contact');
  await page.waitForSelector('input[name="fullName"]');

  await page.fill('input[name="fullName"]', 'Frank');
  await page.fill('input[name="postcode"]', 'Dionne');
  await page.fill('input[name="house"]', 'Aaron');
  await page.fill('input[name="city"]', 'Dury Lane');
  await page.fill('input[name="phoneNumber"]', '080000 1066');
  await page.fill('input[name="email"]', 'test@QA.com');

  await page.click('button[type="submit"]');

  
  await page.waitForSelector(`text=Thank you for your submission Frank. We will be in contact with you shortly.`, { timeout: 20000 });

  
  let successMessage = await page.textContent(`text=Thank you for your submission Frank. We will be in contact with you shortly.`);
  expect(successMessage).toBe('Thank you for your submission Frank. We will be in contact with you shortly.');
});

