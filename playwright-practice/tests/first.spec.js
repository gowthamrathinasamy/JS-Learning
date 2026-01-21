const {test} = require('@playwright/test')

test ( 'Open Browser', async({page})=>
{
await page.goto("https://www.youtube.com")
}

)