import { Builder, Capabilities } from "selenium-webdriver"
const chromedriver = require('chromedriver')
import {saucePage} from '../pageObjects/saucePage'
import {BasePage} from '../pageObjects/basePage'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new saucePage (myDriver, 'https://www.saucedemo.com/%27)

    test('Opens Sauce Demo website & logs in', async () => {
    await myPage.navigate()
    await myPage.setInput(myPage.username, 'standard_user')
    await myPage.setInput(myPage.password, 'secret_sauce')
    await myPage.click(myPage.loginButton)
})

    test('Adds item to cart', async() =>{
        await myPage.navigate()
        await myPage.setInput(myPage.username, 'standard_user')
        await myPage.setInput(myPage.password, 'secret_sauce')
        await myPage.click(myPage.loginButton)
        await myPage.click(myPage.addBackpack)
    } )

    test('Goes to Cart Page', async() =>{
        await myPage.click(myPage.cartButton)
    })

    test('Can Remove from Cart', async() =>{
        await myPage.click(myPage.removeBackpack)

})
    test('Go to Checkout Page', async() =>{
    await myPage.click(myPage.continueShopping)
    await myPage.click(myPage.addBackpack)
    await myPage.click(myPage.cartButton)
    await myPage.click(myPage.checkout)
})
afterAll(async () => {
    await myDriver.quit();
  });