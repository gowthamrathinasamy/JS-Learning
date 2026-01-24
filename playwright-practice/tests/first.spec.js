//Day 1
const {test, expect} = require('@playwright/test');

test('Open Browser', async({page})=>
{
await page.goto("https://nextgen-qa.radiusdirect.net/");
await expect(page).toHaveTitle("Nextgen QA");
let title=await page.title();
console.log("Title is: "+title);
}
)