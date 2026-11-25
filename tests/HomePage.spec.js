import {test,expect} from '..//Fixtures//test-fixtures'

test.beforeEach("URL",async({page})=>
{
    await page.goto("https://keralaproperty.in/member/myhome/")
})

test("logo visibilty",async({login})=>
{
    await expect(login.logo).toBeVisible()
})

test("text availability",async({homepage})=>
{
    await expect(homepage.text).toHaveText("My Properties")
})

test("Verify user name",async({homepage})=>
{
    await expect(homepage.UserName).toHaveText("j")
})

test("My Account",async({homepage})=>
{
    await expect(homepage.Myaccount).toHaveText("My Account")
    await homepage.accountClick()
})