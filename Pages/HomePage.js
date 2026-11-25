export class HmePage
{
    /** 
     * @param  { import('@playwright/test').Page} page
    */
   //
   constructor(page)
   {
    this.page=page
    this.text=page.locator('h2:has-text("My Properties")')
    this.UserName=page.locator('h4:has-text("j")')
    this.Myaccount=page.locator('a:has-text("My Account")')
    this.AddPropertyButton=page.locator('a:has-text("Add Property")')
   }

   async accountClick()
   {
    await this.Myaccount.click()
   }

   async propertyClick()
    {
        await this.AddPropertyButton.click()
    }
}