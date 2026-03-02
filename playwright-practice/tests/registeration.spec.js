const {test} = require('@playwright/test');
test('Registration', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client');
    const registerationButton = page.locator('.btn1'); 
    await registerationButton.click();
    const registerButton = page.locator(".btn1");
    await registerButton.click();
    const firstNameInput = page.locator('#firstName');
    await firstNameInput.fill('Gowtham');
    const lastNameInput = page.locator('#lastName');
    await lastNameInput.fill('Rathinasamy');
    const emailInput = page.locator('#userEmail');
    await emailInput.fill('gowthan101910@gmail.com');
    const mobileInput = page.locator('#userMobile');
    await mobileInput.fill('9092232782');
    const occupationInput = page.locator('.custom-select');
    await occupationInput.selectOption('Engineer');
    const genderInput = page.locator('input[type="radio"][value="Male"]');
    await genderInput.check();
    const passwordInput = page.locator('#userPassword');
    await passwordInput.fill('Gowtham@123');
    const confirmPasswordInput = page.locator('#confirmPassword');
    await confirmPasswordInput.fill('Gowtham@123');
    const eighteenYearsCheckbox = page.locator('.row .col-md-1 input[type="checkbox"]');
    await eighteenYearsCheckbox.check();
    const submitButton = page.locator('#login');
    await submitButton.click();
    await page.pause();

}
)
