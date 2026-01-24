//Day 4
const {test, expect} = require('@playwright/test');
const { log } = require('console');
test ('If Else', async ({page})=>
{
//const context = await Browser.context();
//const page = await context.newPage();
    await page.goto("https://nextgen-qa.radiusdirect.net/login");
    await page.waitForLoadState('networkidle');
    const loginPageLink = page.getByRole('link', {name : 'Login with Username'});
    await expect (loginPageLink).toBeVisible();
    await expect (loginPageLink).toBeEnabled();
    await page.waitForLoadState('networkidle');
    await loginPageLink.click();
    const userNameTextBox = page.getByPlaceholder("Username or Email");
    await userNameTextBox.fill("u1183420");
    const passwordTextBox = page.getByPlaceholder("Password");
    await passwordTextBox.fill("Iqvia123");
    let loginButton = page.getByRole('button', { name: 'Sign In' });
    await loginButton.click();
   const errorMessage = page.getByRole('alert', {name: 'Unauthorized'});
   const successMessage = page.getByRole('alert', {name: 'Login successfully\n'})
   if (await errorMessage.isVisible())
   {
    console.log("Login Failed - Error Message Displayed as "+errorMessage);
   }
   else if(await successMessage.isVisible())
   {
console.log("Login Successful - Success Message Displayed as "+successMessage);
   }
   else
   {
    console.log("Login Failed - No Error or Success Message");
   }
}
)