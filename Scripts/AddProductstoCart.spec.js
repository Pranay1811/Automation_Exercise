import{test,expect} from '@playwright/test'
import { HomePage } from '../Reusables/HomePage'
import { LoginPage } from '../Reusables/LoginPage'
import { AccountInformationPage } from '../Reusables/AccountInformationPage';
import {Signin}from '../Reusables/Signin';
import { DeleteUser } from '../Reusables/DeleteUser';
import { ProductsPage } from '../Reusables/ProductsPage';
import {CartPage} from '../Reusables/CartPage';
import { test, expect } from '../Reusables/Fixtures';

test('test',async({page})=>{

    const login =  new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);
    const productpage = new ProductsPage(page);
    const cartpage = new CartPage(page);

    await login.gotoLoginPage();
    await expect(homepage.homepageCarousel).toBeVisible();
    await homepage.productsButton();
    await productpage.addToCartButton1();
    await productpage.continueButton();
    await productpage.addToCartButton2();
    await productpage.viewCartButton();


})