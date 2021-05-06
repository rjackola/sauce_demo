import { Builder, Capabilities } from "selenium-webdriver"
const chromedriver = require('chromedriver')
import {saucePage} from ''

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new myPage (myDriver, 'https://www.saucedemo.com/')

test('Opens Sauce Demo website', async () => {
    await myPage.navigate()
    await myPage.username()
    await myPage.setInput('standard_user')
    await myPage. setInput('secret_sauce')



    //await myPage.driver.quit()
})