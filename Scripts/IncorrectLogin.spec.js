import { HomePage } from '../Reusables/HomePage'
import { LoginPage } from '../Reusables/LoginPage'
import { AccountInformationPage } from '../Reusables/AccountInformationPage';
import { test, expect } from '../Reusables/Fixtures';
test('test',async({page})=>{

    const login =  new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);

    await login.gotoLoginPage();
    await expect(homepage.homepageCarousel).toBeVisible();
    await homepage.loginSignUp();
   // await homepage.logoutButton();
   // await homepage.homeButton();
    await homepage.loginSignUp();
    await expect(login.loginUse).toBeVisible();
    await login.loginUser('test_automation_exercise@yopmail.com','TestAutomation@123');
    await login.loginButton();
    await expect(login.getLoginFailText()).toBeVisible();


    await page.waitForTimeout(3000);



})