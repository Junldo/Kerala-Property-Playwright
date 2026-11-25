import {expect,test} from '..//Fixtures//test-fixtures'

test.beforeEach("URL",async({page,homepage})=>
{
    await page.goto("https://keralaproperty.in/member/myhome/")
    await homepage.propertyClick()
})

test("Verify Add Property text",async({AddProperty})=>
{
    await expect(AddProperty.Propertytext).toHaveText("Add Property");
})

test("Property For dropdown selection",async({AddProperty})=>
{
    await AddProperty.dropdownSelect()
})

test("Value entering to Propery Label field",async({AddProperty})=>
{
    await AddProperty.enterValue()
})