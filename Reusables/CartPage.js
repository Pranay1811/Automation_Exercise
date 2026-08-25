exports.CartPage = class CartPage{



    //Locators
    constructor(page){
        this.page = page;
        this.subscription = ".single-widget";
        this.subscriptionEmailid = "#susbscribe_email";
        this.subscribebtn = "#subscribe";


    }    


    //End of Locators


    //Reusables
    async subscriptionSection()
{
    await this.page.locator(this.subscription).scrollIntoViewIfNeeded();
}
get subscriptionText()
{
    return this.page.locator("//h2[normalize-space()='Subscription']");
}
async subscriptionEmail(emailid)
{
    await this.page.locator(this.subscriptionEmailid).fill(emailid);
}
async subscribeButton()
{
    await this.page.locator(this.subscribebtn).click();
}
get subscriptionAlertMsg()
{
    return this.page.locator(".alert-success.alert")
}


















}