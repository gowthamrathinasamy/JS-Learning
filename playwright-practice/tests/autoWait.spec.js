const { log } = require('console');
const {test} =require('playwright/test');
test ('Auto wait', async ({page})=>
{
    await page.goto("https://nextgen-qa.radiusdirect.net/login");
    const loginLink = page.getByRole('link', { name: 'Login with Username' });
    await expect(loginLink).toBeVisible({timeout:5000});
    await loginLink.waitFor();
    await loginLink.click({timeout:5000});
    await page.pause();
}
)