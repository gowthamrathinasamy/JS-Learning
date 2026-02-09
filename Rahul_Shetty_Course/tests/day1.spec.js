const {test} = require('@playwright/test');

console.log('Hello World');
test('Rahul Shetty Course', async ({page}) => {
    await page.goto('https://www.youtube.com/#/');
    await page.pause();
}   
)