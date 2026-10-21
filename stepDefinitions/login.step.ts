import {Given, When} from "@cucumber/cucumber";
import {Page, expect, Browser} from "@playwright/test";



Given('User able to launch the url', async function(page){
    
    await page.goto('https://saucelabs.com/')
})

When('User able to view the title of the page', async function(page){
   await expect(page).toHaveTitle('Sauce Labs')
})
