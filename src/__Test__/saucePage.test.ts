import { Builder, Capabilities,By,until, TouchSequence } from "selenium-webdriver"
const chromedriver = require('chromedriver')


const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new saucePage (myDriver, 'https://www.saucedemo.com/')


    test('Opens Sauce Demo website & logs in', async () => {
    await myPage.navigate()
    await myPage.setInput(myPage.username, 'standard_user')
    await myPage.setInput(myPage.password, 'secret_sauce')
    await myPage.click(myPage.loginButton)

