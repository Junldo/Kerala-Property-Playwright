export class Property
{
     /** 
     * @param  { import('@playwright/test').Page} page
    */
   //
    constructor (page)
    {
        this.page=page
        this.Propertytext=page.locator('h2:has-text("Add Property")')
        this.PropertyFordd=page.locator('#proptype')
        this.PropertyLbl=page.locator('#proplabel')
    }

    async dropdownSelect()
    {
        this.PropertyFordd.selectOption({index:1})
    }

    async enterValue()
    {
        this.PropertyLbl.fill("Test Space")
    }

}