import { CorP } from "./corwynPage";

const cor = new CorP()

describe("Dropout TV Test", ()=>{

    test("Home Page", async ()=>{
        await cor.home()
    })
    test("Collections, Dimension 20", async ()=>{
        await cor.click(cor.collections)
        await cor.click(cor.dim20)
        await cor.driver.sleep(500)
    })
    test("Apparel, add item to cart", async ()=>{
        await cor.click(cor.apparel)
        await cor.driver.sleep(500)
        await cor.click(cor.item1)
        await cor.driver.sleep(500)
        await cor.click(cor.addCart)
        await cor.driver.sleep(500)
    }
    )
    test("Go to Shopping Cart", async ()=>{
        await cor.click(cor.new1)
        await cor.click(cor.cart)
    })
    test("Remove item from shopping cart", async()=>{
        await cor.click(cor.removeCart)
        await cor.click(cor.new1)
    })
    test("Search for item", async()=>{
        await cor.click(cor.search)
        await cor.setInput(cor.searchbox, "Fabian\n")
        await cor.driver.sleep(500)
        await cor.driver.quit()
    })
})