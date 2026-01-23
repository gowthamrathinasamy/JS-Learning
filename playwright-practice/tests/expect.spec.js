const {test, expect} = require ("@playwright/test")
test.only ('Expect Assertions', async({page})=>
{
await page.goto("https://nextgen-qa.radiusdirect.net/login");
await page.waitForLoadState('networkidle');
//toHaveTitle
await expect(page).toHaveTitle("Nextgen QA");

//toHaveURL
await expect(page).toHaveURL("https://nextgen-qa.radiusdirect.net/login");

//toBeVisible
const loginLink = page.getByRole('link', { name: 'Login with Username' })
await expect(loginLink).toBeVisible();

//toHaveText
await expect(loginLink).toHaveText("Login with Username");

//toContainText
await expect(loginLink).toContainText("Login");

//toBeEnabled
await expect(loginLink).toBeEnabled();

//toBeDisabled
//await expect(loginLink).toBeDisabled();

//toHaveCount
//await expect(page.getByRole('link')).toHaveCountGreaterThan(0);

//toHaveValue
await loginLink.click();
const userNameTextBox = page.getByPlaceholder("Username or Email")
await userNameTextBox.fill("u1183420");
await expect(userNameTextBox).toHaveValue("u1183420");

//not.toBeVisible
//await expect(loginLink).not.toBeVisible();
await expect(loginLink).toBeHidden();
}
)
