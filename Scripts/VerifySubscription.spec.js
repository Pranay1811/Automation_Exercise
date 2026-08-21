import{test,expect} from '@playwright/test'
import { HomePage } from '../Reusables/HomePage'
import { LoginPage } from '../Reusables/LoginPage'
import { AccountInformationPage } from '../Reusables/AccountInformationPage';
import {Signin}from '../Reusables/Signin';
import { DeleteUser } from '../Reusables/DeleteUser';
import { ProductsPage } from '../Reusables/ProductsPage';

test('test',async({page})=>{

    const login =  new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);
    const productpage = new ProductsPage(page);

    await login.gotoLoginPage();
    await expect(homepage.homepageCarousel).toBeVisible();
    await homepage.subscriptionSection();
    await expect(homepage.subscriptionText).toBeVisible();
    await homepage.subscriptionEmail('test_automation_exercise@yopmail.com');
    await homepage.subscribeButton();
    await expect(homepage.subscriptionAlertMsg).toBeVisible();


})