import { test, expect } from '@playwright/test'
import { HomePage } from '../Reusables/HomePage'
import { LoginPage } from '../Reusables/LoginPage'
import { AccountInformationPage } from '../Reusables/AccountInformationPage';
import { ContactUsPage, contactUsPage } from '../Reusables/ContactUsPage';
import { test, expect } from '../Reusables/Fixtures';
import path from 'path';

test('test', async ({ page }) => {

    const login = new LoginPage(page);
    const homepage = new HomePage(page);
    const accountInfo = new AccountInformationPage(page);
    const contactus = new ContactUsPage(page);

    await login.gotoLoginPage();
    await expect(homepage.homepageCarousel).toBeVisible();
    await homepage.contactUsButton();
    await expect(contactus.getInTouchText).toBeVisible();
    await contactus.ContactUsForm('test', 'test_automation_exercise@yopmail.com', 'test_subject', 'test_message');
    const filePath = path.join(process.cwd(), 'test-data', 'sample.pdf');
    await contactus.uploadFile(filePath);

    // submitButton() now handles the confirm() dialog internally and returns it
    const dialog = await contactus.submitButton();
if (dialog) {
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press OK to proceed!');
}

    await expect(contactus.getSuccessMessage).toBeVisible();
    await contactus.homeButton();

    await page.waitForTimeout(3000);
});