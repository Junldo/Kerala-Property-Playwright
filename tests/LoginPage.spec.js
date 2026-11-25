import {test,expect} from '..//Fixtures//test-fixtures'

test.beforeEach("url",async({page})=>
{
    await page.goto(process.env.URL)
})

// test("Valid login",async({page})=>
// {
//     await log.setValues(process.env.UN,process.env.UP)
//     await log.loginClick();
//     await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/")
// })

test("Invalid login",async({page,login})=>
{
    await login.setValues("tet1@j.com","1234")
    await login.loginClick();
    await expect(page).toHaveTitle("https://keralaproperty.in/member/login/")
})

test("logo visibility",async({login})=>
{
    await expect(login.logo).toBeVisible();
})

test("logo navigation",async({login})=>
{
    await login.logoClick()
    await expect(page).toHaveURL("https://keralaproperty.in/")
})
