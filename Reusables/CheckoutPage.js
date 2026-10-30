exports.CheckoutPage = class checkoutPage{



    //Locators
    constructor(page){
        this.page = page;
        this.checkout = "a.check_out";
        this.register = "//a[normalize-space()='Register / Login']";

    }

     //End of Locators


    //Reusables
    async proccedCheckout()
{
    await this.page.locator(this.checkout).click();
}
async registerButton()
{
    await this.page.locator(this.register).click();
}


}