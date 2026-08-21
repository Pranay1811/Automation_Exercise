exports.LoginPage = class LoginPage {
  
    //Locators
    constructor(page){
        this.page = page;
        this.homepagecorosol='#slider';
       // this.newUSer='//div[@class="signup-form"]';
       this.name='//input[@placeholder="Name"]';
       this.email='//input[@data-qa="signup-email"]'
       this.signupbtn='//button[@data-qa="signup-button"]';
       this.loginemail = '//input[@data-qa="login-email"]';
       this.loginpswd = '//input[@data-qa="login-password"]';
       this.loginbtn = '//button[@data-qa="login-button"]';
       this.loginform = '//div[@class="login-form"]';
       this.loginfail = `//p[normalize-space()='Your email or password is incorrect!']`;
       this.existingemail = "//p[normalize-space()='Email Address already exist!']";

    }

    //End of Locators


    //Reusables
    async gotoLoginPage(){
        await this.page.goto("https://automationexercise.com/");
    }

    get newUSer()
    {
        return this.page.locator('//div[@class="signup-form"]');
    }

    async newUSerSignup(username, emailaddress)
    {
        await this.page.locator(this.name).fill(username);
        await this.page.locator(this.email).fill(emailaddress);
    }
    async signUpButton()
    {
        await this.page.locator(this.signupbtn).click();
    }
    get loginUse()
    {
        return this.page.locator('//form[@action="/login"]');
    }

    async loginUser(emailaddress,password)
    {
        await this.page.locator(this.loginemail).fill(emailaddress);
        await this.page.locator(this.loginpswd).fill(password);
    }
    async loginButton()
    {
        await this.page.locator(this.loginbtn).click();
    }
    getLoginFailText() {
     return this.page.locator(this.loginfail);
  }
  getExistingEmailText()
  {
    return this.page.locator(this.existingemail);
  }


    




}