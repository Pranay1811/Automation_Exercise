exports.ProductsPage = class ProductsPage{
    

    //Locators
    constructor(page){
        this.page = page;
        this.viewProduct1btn = "a[href='/product_details/1']";
        this.searchInput = "input#search_product";
        this.searchbtn = "button#submit_search";

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











}