import{test,expect} from '@playwright/test'
import { HomePage } from '../Reusables/HomePage'
import { LoginPage } from '../Reusables/LoginPage'
import { AccountInformationPage } from '../Reusables/AccountInformationPage';
import {Signin}from '../Reusables/Signin';
import { DeleteUser } from '../Reusables/DeleteUser';
import { test, expect } from '../Reusables/Fixtures';

test.beforeEach(async ({ page }) => {
    await Signin(page);
});
test('test',async({page})=>{

    const login =  new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);

    await homepage.logoutButton();
   await expect(login.newUSer).toBeVisible();
   await login.newUSerSignup('test','test_automation_exercise@yopmail.com');
   await login.signUpButton();
   await expect(login.getExistingEmailText()).toBeVisible();
})

test.afterEach(async ({ page }) => {
    const login =  new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);
   
    await homepage.homeButton();
    await homepage.loginSignUp();
    await expect(login.loginUse).toBeVisible();
    await login.loginUser('test_automation_exercise@yopmail.com','TestAutomation@123');
    await login.loginButton();
    await expect(homepage.loggedInUser).toBeVisible();
    await DeleteUser(page);
});