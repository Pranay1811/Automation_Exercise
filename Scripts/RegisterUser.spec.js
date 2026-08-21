import{test,expect} from '@playwright/test'
import { HomePage } from '../Reusables/HomePage'
import { LoginPage } from '../Reusables/LoginPage'
import { AccountInformationPage } from '../Reusables/AccountInformationPage';
test('test',async({page})=>{

    const login =  new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);

    await login.gotoLoginPage();
    await expect(homepage.homepageCarousel).toBeVisible();
    await homepage.loginSignUp();
    await expect(login.newUSer).toBeVisible();
    await login.newUSerSignup('test','test_automation_exercise@yopmail.com');
    await login.signUpButton();
    await expect(accountInfo.loginForm).toBeVisible();
    await accountInfo.title();
    await accountInfo.passwordfield('TestAutomation@123');
    await accountInfo.dateField(11);
    await accountInfo.monthField("October");
    await accountInfo.yearField(1999);
    await accountInfo.newsLetterSignup();
    await accountInfo.receiveSplOffer();
    await accountInfo.firstNameField("test_firstname");
    await accountInfo.lastNameField("test_lastname");
    await accountInfo.companyField("test company");
    await accountInfo.AddressOneField("test address 1");
    await accountInfo.AddressTwoField("test address 2");
    await accountInfo.countryField("India");
    await accountInfo.stateField("test state");
    await accountInfo.cityField("test city");
    await accountInfo.zipcodeField("123456");
    await accountInfo.mobilenumberField("9876543210");
    await accountInfo.createaccountButton();
    await expect(accountInfo.accountCreated).toBeVisible();
    await accountInfo.continueButton();
    
    await homepage.deleteButton();
    await expect(accountInfo.accountDeleted).toBeVisible();
    await accountInfo.continueButton();
    
    await page.waitForTimeout(3000);




})