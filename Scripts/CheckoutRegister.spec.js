import { HomePage } from '../Reusables/HomePage'
import { LoginPage } from '../Reusables/LoginPage'
import { AccountInformationPage } from '../Reusables/AccountInformationPage';
import {Signin}from '../Reusables/Signin';
import { DeleteUser } from '../Reusables/DeleteUser';
import { ProductsPage } from '../Reusables/ProductsPage';
import {CartPage} from '../Reusables/CartPage';
import { test, expect } from '../Reusables/Fixtures';
import { CheckoutPage } from '../Reusables/CheckoutPage';

test('test',async({page})=>{

    const login =  new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);
    const productpage = new ProductsPage(page);
    const cartpage = new CartPage(page);
    const checkoutpage = new CheckoutPage(page);


     await login.gotoLoginPage();
    await expect(homepage.homepageCarousel).toBeVisible();
    await productpage.addToCartButton1();
    await productpage.continueButton();
    await productpage.addToCartButton2();
    await productpage.continueButton();
    await homepage.cartButton();
    await checkoutpage.proccedCheckout();
    await checkoutpage.registerButton();

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
    await homepage.cartButton();
    






        })