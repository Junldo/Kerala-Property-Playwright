export class LoginPage
{
    /** 
     * @param  { import('@playwright/test').Page} page
    */
   //to get build in locators suggetion
    constructor(page)
    {
        this.page=page
        this.usr=page.locator('#ulogin')
        this.pass=page.locator('#upass')
        this.lb=page.locator('#sub_logbtn')
        this.logo=page.getByRole('img', { name: 'Kerala Property' })
    }

    async setValues(user,passw)
    {
        await this.usr.fill(user)
        await this.pass.fill(passw)
    }

    async loginClick()
    {
        await this.lb.click()
    }

    async logoClick()
    {
        await this.logo.click()
    }
}