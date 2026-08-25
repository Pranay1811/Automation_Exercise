exports.ProductsPage = class ProductsPage{
    

    //Locators
    constructor(page){
        this.page = page;
        this.viewProduct1btn = "a[href='/product_details/1']";
        this.searchInput = "input#search_product";
        this.searchbtn = "button#submit_search";
        this.product1Hover = "//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[1]//div[1]//img[1]";
        this.product1 = "//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[1]//div[2]//div[1]//a[1]";
        this.continuebtn = ".btn.btn-success.close-modal.btn-block";
        this.product2Hover = "//div[3]//div[1]//div[1]//div[1]//img[1]";
        this.product2 = "//div[3]//div[1]//div[1]//div[2]//div[1]//a[1]";
        this.viewCart = "//a[normalize-space()='View Cart']";
    }
//End of Locators


    //Reusables

    get allProducts() {
    return this.page.locator('.features_items');
}
async ViewProductbutton(){
    await this.page.locator(this.viewProduct1btn).click();
}

get productDetails()
{
    return this.page.locator("div[class='product-information'] h2");
    return this.page.locator("//p[normalize-space()='Category: Women > Tops']");
    return this.page.locator("div[class='product-information'] span span");
    return this.page.locator("//div[@class='product-details']//p[2]");
    return this.page.locator("//b[normalize-space()='Condition:']");
    return this.page.locator("//b[normalize-space()='Brand:']");
}
async searchProduct(productname)
{
    await this.page.locator(this.searchInput).fill(productname);
}
async searchButton()
{
    await this.page.locator(this.searchbtn).click();
}

get searchedProduct()
{
    return this.page.locator("div.productinfo");
}

async addToCartButton1()
{
    
    await this.page.locator(this.product1Hover).hover();
    await this.page.locator(this.product1).click();
}
async continueButton()
{
    await this.page.locator(this.continuebtn).click();
}

async addToCartButton2()
{
    await this.page.locator(this.product2Hover).hover();
    await this.page.locator(this.product2).click();
}
async viewCartButton()
{
    await this.page.locator(this.viewCart).click();
}











}