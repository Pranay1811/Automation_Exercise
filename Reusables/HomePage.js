
exports.HomePage = class HomePage{
    

    //Locators
    constructor(page){
        this.page = page;
       // this.homepagecorosol='#slider';
        this.loginSignUpbtn = "//a[normalize-space()='Signup / Login']";
        this.deletebtn = "//a[normalize-space()='Delete Account']";
        this.logoutbtn = "//a[normalize-space()='Logout']";
        this.homebtn = "//a[normalize-space()='Home']";
        this.loggeduser = "//li[10]//a[1]";
        this.contactus = "//a[normalize-space()='Contact us']";
        this.testcasebtn = "//li//a[normalize-space()='Test Cases']";
        this.testcase = "#form .container";
        this.productsbtn = "a[href='/products']";
    }

    //End of Locators


    //Reusables


    get homepageCarousel() {
    return this.page.locator('#slider');
}

async loginSignUp(){
    await this.page.locator(this.loginSignUpbtn).click();
}
async deleteButton()
{
    await this.page.locator(this.deletebtn).click();
}
async logoutButton()
{
    await this.page.locator(this.logoutbtn).click();
}
async homeButton()
{
    await this.page.locator(this.homebtn).click();
}
get loggedInUser()
    {
        return this.page.locator('//li[10]//a[1]');
    }
async contactUsButton()
{
    await this.page.locator(this.contactus).click();
}

async testCasesButton()
{
    await this.page.locator(this.testcasebtn).click();
}

get testCaseContainer() {
    return this.page.locator('#form .container');
}
async productsButton()
{
    await this.page.locator(this.productsbtn).click();
}


}