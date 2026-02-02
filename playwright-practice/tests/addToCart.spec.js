const {test} = require('@playwright/test');
test('Amazon Add to Cart', async ({page}) => {
await page.goto('https://www.amazon.com/');
const searchBox = page.getByPlaceholder("Search Amazon");
await searchBox.fill('iphone 13 pro');
await searchBox.press('Enter');
await page.pause();
}
)