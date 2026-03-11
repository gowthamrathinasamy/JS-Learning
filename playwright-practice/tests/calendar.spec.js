const {test} = require ("@playwright/test");

test('Calendar', async ({page}) =>
   {
    const month = "8";
    const year = "2031";
    const date = "11";

    await page.goto('https://nextgen-qa.radiusdirect.net/auth/login');
    await page.waitForLoadState("networkidle");
    await page.getByPlaceholder("Username or Email").fill("u1183420");
    const password = page.getByPlaceholder("Password")
    await password.fill("Iqvia123!")
    await password.press("Enter");
    //await page.locator("._fullWidth_138fp_121 _button_138fp_1 _size-md_138fp_137 _engprimary_138fp_475").click();
    await page.waitForLoadState("networkidle");
    await page.getByRole('button', { name: 'No' }).click();
   await page.getByPlaceholder("Select Date Range").click();
    await page.locator("._currentMonth_1xran_271").nth(0).click();


    
    await page.locator("._currentYear_19vy6_44").click();
    await page.getByText(year).click();
    await page.locator("_noBorderButton_19vy6_64").nth(Number(month)-1).click();
    await page.getByText(date).click();
await page.pause();

}
)