import{test,expect} from '@playwright/test'
import { HomePage } from '../Reusables/HomePage'
import { LoginPage } from '../Reusables/LoginPage'
import { AccountInformationPage } from '../Reusables/AccountInformationPage';
export async function DeleteUser(page)  {

     const login =  new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);


    await homepage.deleteButton();
    await expect(accountInfo.accountDeleted).toBeVisible();
    await accountInfo.continueButton();




}