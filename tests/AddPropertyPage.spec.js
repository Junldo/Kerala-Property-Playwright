import {expect, test} from '..//Fixtures//test-fixtures'

test.beforeEach("URL",async({page})=>
{
    await page.goto("https://keralaproperty.in/member/myhome/")
})

test("Add Property Click",async({homepage,AddProperty})=>
{
    await homepage.propertyClick()
})

test("Property For dropdown selection",async({AddProperty})=>
{
})