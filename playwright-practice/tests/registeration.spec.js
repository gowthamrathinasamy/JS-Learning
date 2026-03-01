const {test} = require('@playwright/test');
test('Registration', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client');
    const registerationButton = page.locator('.btn1'); 
    await registerationButton.click();

}
)
