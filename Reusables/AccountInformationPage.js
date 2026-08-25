exports.AccountInformationPage = class AccountInformationPage {

    constructor(page){
       
        this.page = page;
       // this.loginform = '//div[@class="login-form"]';
       this.male='#id_gender1';
       this.password = '#password';
       this.datedropdown = '#days option';
       this.monthdropdown = '#months option';
       this.yeardropdown = '#years option';
       this.newsletter = '#newsletter';
       this.sploffer = '#optin';
       this.firstname = '#first_name';
       this.lastname = '#last_name';
       this.company = '#company';
       this.addressone = '#address1';
       this.addresstwo = '#address2';
       this.countrydropdown = '#country option';
       this.state = '#state';
       this.city ='#city';
       this.zipcode = '#zipcode';
       this.mobilenumber = '#mobile_number';
       this.createaccountbtn = '//button[@data-qa="create-account"]';
       this.continuebtn = '//a[@data-qa="continue-button"]';
      
       this.accountdelete = '//h2[@data-qa="account-deleted"]';
      
    }


     get loginForm()
    {
        return this.page.locator('//div[@class="login-form"]');
    }
    async title()
{
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator(this.male).waitFor({ state: 'visible', timeout: 10000 });
    await this.page.locator(this.male).click();
}
    async passwordfield(password)
    {
        await this.page.locator(this.password).fill(password);
    }
    async dateField(date)
    {
       // await this.page.locator(this.datedropdown).click();
       // await this.page.locator(`//select[@data-qa="days"]//option[@value='11']`).click();
       const options = await this.page.$$(this.datedropdown);
       for(const option of options)
  {
     
     let value = await option.textContent();
    if(value.includes(date))
     {
       await this.page.selectOption('#days',value);
        break;
     }
    }
}
async monthField(month)
    {
       const options = await this.page.$$(this.monthdropdown);
       for(const option of options)
  {
     
     let value = await option.textContent();
    if(value.includes(month))
     {
       await this.page.selectOption('#months',value);
        break;
     }
    }
}
async yearField(year)
    {
       const options = await this.page.$$(this.yeardropdown);
       for(const option of options)
  {
     
     let value = await option.textContent();
    if(value.includes(year))
     {
       await this.page.selectOption('#years',value);
        break;
     }
    }
}

async newsLetterSignup()
    {
        await this.page.locator(this.newsletter).click();
    }
 async receiveSplOffer()
    {
        await this.page.locator(this.sploffer).click();
    }
async firstNameField(firstName)
    {
        await this.page.locator(this.firstname).fill(firstName);
    }
async lastNameField(lastName)
    {
        await this.page.locator(this.lastname).fill(lastName);
    }
async companyField(companyname)
    {
        await this.page.locator(this.company).fill(companyname);
    }    
async AddressOneField(address1)
    {
        await this.page.locator(this.addressone).fill(address1);
    }
async AddressTwoField(address2)
    {
        await this.page.locator(this.addresstwo).fill(address2);
    }

async countryField(country)
    {
       const options = await this.page.$$(this.countrydropdown);
       for(const option of options)
  {
     
     let value = await option.textContent();
    if(value.includes(country))
     {
       await this.page.selectOption('#country',value);
        break;
     }
    }
}
async stateField(state)
    {
        await this.page.locator(this.state).fill(state);
    }

async cityField(city)
    {
        await this.page.locator(this.city).fill(city);
    }
async zipcodeField(zipcode)
    {
        await this.page.locator(this.zipcode).fill(zipcode);
    }   
async mobilenumberField(mobilenumber)
    {
        await this.page.locator(this.mobilenumber).fill(mobilenumber);
    }
async createaccountButton()
{
    await this.page.locator(this.createaccountbtn).click();
}
async continueButton()
{
    await this.page.locator(this.continuebtn).click();
}

get accountDeleted()
    {
        return this.page.locator('//h2[@data-qa="account-deleted"]');
    }
 
get accountCreated()
    {
        return this.page.locator(' //h2[@data-qa="account-created"]');
    }

}