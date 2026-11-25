import {expect, test as setup} from '@playwright/test'
const authfile= "playwright/auth/auth.json"

setup("authenticate", async({page})=>
{
    await page.goto(process.env.URL)
    await page.locator('#ulogin').fill(process.env.UN)
    await page.locator('#upass').fill(process.env.UP)
    await page.locator('#sub_logbtn').click()
    await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/")

    await page.context().storageState({path: authfile})
})