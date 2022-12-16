import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class CorP extends BasePage {
    cart: By = By.xpath('//a[@class="site-header__icon site-header__cart"]')
    new1: By = By.xpath('(//span[@class="site-nav__label"])[1]')
    collections: By = By.xpath('(//span[@class="site-nav__label"])[2]')
    dim20: By = By.xpath('(//span[@class="site-nav__label"])[3]')
    gamec: By = By.xpath('(//span[@class="site-nav__label"])[4]')
    umA: By = By.xpath('(//span[@class="site-nav__label"])[5]')
    apparel: By = By.xpath('(//span[@class="site-nav__label"])[6]')
    accessories: By = By.xpath('(//span[@class="site-nav__label"])[7]')
    homeDec: By = By.xpath('(//span[@class="site-nav__label"])[8]')
    sale: By = By.xpath('(//span[@class="site-nav__label"])[9]')
    item1: By = By.xpath('(//a[@class="grid-view-item__link grid-view-item__image-container full-width-link"])[1]')
    search: By = By.xpath('//button[@class="btn--link site-header__icon site-header__search-toggle js-drawer-open-top"]')
    searchbox: By = By.xpath('//input[@name="q"]')
    filterby: By = By.xpath('//select[@id="FilterTags"]')
    addCart: By = By.xpath('//button[@class="btn product-form__cart-submit btn--secondary-accent"]')
    removeCart: By = By.xpath('(//a[@class="text-link text-link--accent"])[2]')

    constructor(){
        super({url: "https://store.dropout.tv/"})
    }
    async home() {
        await this.driver.manage().window().maximize()
        await this.navigate(this.url)
    }
}