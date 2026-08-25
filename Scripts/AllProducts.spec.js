import { HomePage } from '../Reusables/HomePage'
import { LoginPage } from '../Reusables/LoginPage'
import { AccountInformationPage } from '../Reusables/AccountInformationPage';
import {Signin}from '../Reusables/Signin';
import { DeleteUser } from '../Reusables/DeleteUser';
import { ProductsPage } from '../Reusables/ProductsPage';
import { test, expect } from '../Reusables/Fixtures';

test('test',async({page})=>{

    const login =  new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);
    const productpage = new ProductsPage(page);

    await login.gotoLoginPage();
    await expect(homepage.homepageCarousel).toBeVisible();
    await homepage.productsButton();
    await expect(productpage.allProducts).toBeVisible();
    await productpage.ViewProductbutton();
    await expect(productpage.productDetails).toBeVisible();
    await page.waitForTimeout(3000);

})