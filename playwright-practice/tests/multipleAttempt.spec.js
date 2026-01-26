//DAY 5 – PLAYWRIGHT PRACTICE QUESTION PAPER

const {test} = require('@playwright/test');

/*test.use({
  browserName: 'chromium',
  headless: false,
});

test.setTimeout(40 * 1000);
*/

// reusable login function
async function login(page, username, password) {
  await page.goto('https://nextgen-qa.radiusdirect.net/auth/login');
await page.waitForLoadState('networkidle');
  await page.getByPlaceholder('Username or Email').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  const loginButton = await page.getByRole('button', { name: 'Sign In' });
  await expect(loginButton).toBeEnabled();
  await loginButton.click();
}

// test
test('Day 5 - Multiple login attempts', async ({ page }) => {

  const credentials = [
    { username: 'u1183425', password: 'pass1' },
    { username: 'u1183424', password: 'pass2' },
    { username: 'u1183420', password: 'Iqvia123!' },
  ];

  for (let i = 0; i < credentials.length; i++) {
    console.log("Attempt "+(i + 1));

    await login(page, credentials[i].username, credentials[i].password);

    // example success check (adjust locator based on app)
    if (await page.locator('text=Login successfully').isVisible()) {
      console.log("Login successful on attempt "+(i + 1));
      break;
    } else {
      console.log("Login failed on attempt "+(i + 1));
    }
  }
});
