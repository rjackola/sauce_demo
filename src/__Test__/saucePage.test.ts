import { Builder, Capabilities,By,until, TouchSequence } from "selenium-webdriver"
const chromedriver = require('chromedriver')
import {saucePage} from '../pageObjects/saucePage'
import {BasePage} from '../pageObjects/basePage'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new saucePage (myDriver, 'https://www.saucedemo.com/')

    test('Opens Sauce Demo website & logs in', async () => {
    await myPage.navigate()
    await myPage.setInput(myPage.username, 'standard_user')
    await myPage.setInput(myPage.password, 'secret_sauce')
    await myPage.click(myPage.loginButton)
    await myDriver.sleep(1000)
})

    test('Adds item to cart', async() =>{
        await myPage.navigate()
        await myPage.setInput(myPage.username, 'standard_user')
        await myPage.setInput(myPage.password, 'secret_sauce')
        await myPage.click(myPage.loginButton)
        await myPage.click(myPage.addBackpack)
        await myDriver.sleep(1000)
    } )

    test('Goes to Cart Page', async() =>{
        await myPage.click(myPage.cartButton)
        await myDriver.sleep(1000)
    })

    test('Can Remove from Cart', async() =>{
        await myPage.click(myPage.removeBackpack)
        await myDriver.sleep(1000)

})
    test('Go to Checkout Page', async() =>{
    await myPage.click(myPage.continueShopping)
    await myPage.click(myPage.addBackpack)
    await myPage.click(myPage.cartButton)
    await myPage.click(myPage.checkout)
    await myDriver.sleep(1000)
})
    test('Complete Checkout Page', async() => {
        await myPage.setInput(myPage.firstname, 'Gohn')
        await myDriver.sleep(1000)
        await myPage.setInput(myPage.lastName, 'Freecss')
        await myPage.setInput(myPage.postalcode, '33435')
        await myPage.click(myPage.continue)
        await myDriver.sleep(3000)
    })
    test('finish purchase', async() => {
        await myPage.click(myPage.finish)
        await myDriver.sleep(2000)
    })


afterAll(async () => {
    await myDriver.quit();
  });