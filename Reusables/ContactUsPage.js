exports.ContactUsPage = class ContactUsPage{
    

    //Locators
    constructor(page){
        this.page = page;
        this.getintouch = "//h2[normalize-space()='Get In Touch']";
        this.name = '//input[@data-qa="name"]';
        this.email = '//input[@data-qa="email"]';
        this.subject = '//input[@data-qa="subject"]';
        this.message = '#message';
        this.upload = '//input[@name="upload_file"]';
        this.submitbtn = '//input[@data-qa="submit-button"]';  
        this.successmsg = '//div[@class ="status alert alert-success"]';
        this.homebtn = '//div[@id ="form-section"]';


    }


    //Reusables
    get getInTouchText()
  {
    return this.page.locator("//h2[normalize-space()='Get In Touch']");
  }

  async ContactUsForm(username,emailaddress,note,messagenote)
    {
        await this.page.locator(this.name).fill(username);
        await this.page.locator(this.email).fill(emailaddress);
        await this.page.locator(this.subject).fill(note);
        await this.page.locator(this.message).fill(messagenote);
    }
  async uploadFile(filePath) {
    await this.page.locator(this.upload).setInputFiles(filePath);
  }
  async submitButton() {
    let dialog;
    const dialogPromise = new Promise((resolve) => {
        this.page.once('dialog', async (d) => {
            dialog = d;
            await d.accept();
            resolve();
        });
    });

    await this.page.locator(this.submitbtn).click();
    await Promise.race([dialogPromise, this.page.waitForTimeout(3000)]);
    return dialog; // may be undefined if it genuinely didn't fire — caller should guard
}

  get getSuccessMessage()
  {
    return this.page.locator('//div[@class ="status alert alert-success"]');
  }
  async homeButton()
  {
    await this.page.locator(this.homebtn).click();
  }
  


}