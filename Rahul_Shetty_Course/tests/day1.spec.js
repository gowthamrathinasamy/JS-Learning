const {test, expect} = require('@playwright/test');

console.log('Hello World');
test('Nextgen Login', async ({page}) => {
    await page.goto('https://nextgen-qa.radiusdirect.net/login');
    const loginLink = page.getByRole('link', { name: 'Login with Username'});
    await loginLink.click();
    await page.waitForLoadState('networkidle');
    const userName = page.getByPlaceholder("Username or Email");
    await userName.fill('u1183420');
    const password = page.getByPlaceholder("Password");
    await password.pressSequentially('Iqvia123!', {delay: 100});
    const loginButton = page.getByRole('button', { type: 'submit' });
    await loginButton.click();
    await page.pause();
}   
)