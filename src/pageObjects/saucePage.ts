import { By } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class saucePage extends BasePage {
    constructor (driver, url) {
        super(driver, url)
    }
    username: By = By.id('user-name')
    password: By = By.id('password')
    loginButton: By = By.id('login-button')
    addBackpack: By = By.id('add-to-cart-sauce-labs-backpack')
    cartButton: By = By.className('shopping_cart_link')
    removeBackpack: By = By.id('remove-sauce-labs-backpack')
    checkout: By = By.id ('checkout')