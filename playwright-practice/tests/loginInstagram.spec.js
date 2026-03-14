const {test} = require("@playwright/test");
test ("Login Instagram", async ({page}) =>
{
    await page.goto("https://www.instagram.com/");
    await page.waitForLoadState("networkidle");
    await page.getByText("Meta").click();
   //await page.locator('input[name="username"]').pressSequentially('itsme._.soul');
    //await username.fill("itsme._.soul");
    const password = page.locator('input[name="password"]');
    await password.fill("GowthaM@123");
    await password.press("Enter");
    await page.waitForLoadState("networkidle");
}
)