import { test, expect } from '@playwright/test';



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

  
  await page.waitForSelector(`text=Thank you for your submission Frank. We will be in contact with you shortly.`, { timeout: 2500 });

  
  let successMessage = await page.textContent(`text=Thank you for your submission Frank. We will be in contact with you shortly.`);
  expect(successMessage).toBe('Thank you for your submission Frank. We will be in contact with you shortly.');
});

test('browsing the site', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.locator(`button:text('England')`, { timeout: 2500 }).click();
  await page.waitForSelector('.reviewText', { timeout: 5000 });
  await page.locator("button:text('Wales')").click();
  await page.waitForSelector('.reviewText', { timeout: 5000 });
  await page.locator("button:text('Scotland')").click();
  await page.waitForSelector('.reviewText', { timeout: 5000 });
  await page.locator('.menuButton').click();
  await page.locator("a:has-text('Meet the Founders')").click();
  await page.goto('localhost:3000/Founders')
});


