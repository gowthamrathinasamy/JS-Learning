const {test} = require('@playwright/test');
test ( 'Open Browser', async({page})=>
{
await page.goto("https://nextgen-qa.radiusdirect.net/login");
await page.waitForLoadState('networkidle');
let linkText = page.getByRole('link', { name: 'Login with Username' })
await linkText.click();
let userNameTextBox = page.getByPlaceholder("Username or Email")
await userNameTextBox.fill("u1183420");
let passwordTextBox = page.getByPlaceholder("Password")
await passwordTextBox.fill("Iqvia123!");
let loginButton = page.getByRole('button', { name: 'Sign In' })
await loginButton.click();
await page.waitForLoadState('networkidle'); 
let notesPopup = page.locator("h3._smallSize_i6wc7_67");
if(notesPopup.isVisible())
{
  console.log("Login Successful - Notes Popup Displayed");
}
}
)   