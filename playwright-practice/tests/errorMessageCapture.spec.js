const { test, expect } = require('@playwright/test');

test('Day 7 - Form validation with empty fields', async ({ page }) => {

  // Step 1: Open form page
  await page.goto('https://nextgen-qa.radiusdirect.net/auth/login');

  // Step 2: Click submit without entering data
  await page.click('button[type="submit"]');

  // Step 3: Capture all error messages
  const errorMessages = page.locator('.error-message');

  // Step 4: Validate error count
  await expect(errorMessages).toHaveCount(2);

  // Step 5: Print each error message
  const count = await errorMessages.count();
  for (let i = 0; i < count; i++) {
    const text = await errorMessages.nth(i).textContent();
    console.log(`Error ${i + 1}:`, text.trim());
  }
  
/*for (let i = 0; i < count; i++) {
  console.log("Error " + (i + 1) + ": " + text.trim());
}
*/

  // Step 6: Validate specific error text
  await expect(page.locator('#username-error'))
    .toHaveText('Username is required');

  await expect(page.locator('#password-error'))
    .toHaveText('Password is required');
});
