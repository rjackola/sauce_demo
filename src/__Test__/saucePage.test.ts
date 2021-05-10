import { Builder, Capabilities } from "selenium-webdriver"
const chromedriver = require('chromedriver')
import {saucePage} from '../pageObjects/saucePage'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new saucePage (myDriver, 'https://www.saucedemo.com/')



describe("Sauce test suite", async ()=>
it('Opens Sauce Demo website', async () => {
await myPage.navigate()
await myPage.setInput(myPage.username, 'standard_user')
await myPage.setInput(myPage.password, 'secret_sauce')
await myPage.click(myPage.loginButton)
})
)
it('adds items to cart', async() =>{
    await myPage.navigate()
    await myPage.setInput(myPage.username, 'standard_user')
    await myPage.setInput(myPage.password, 'secret_sauce')
    await myPage.click(myPage.loginButton)
    await myPage.click(myPage.addBackpack)
    await myPage.click(myPage.cartButton)
} )
   
    
    afterAll (async () => {
        await myDriver.quit ()
        console.log ("Test was succesful!")
    })

   