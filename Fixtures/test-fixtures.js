import{test as base,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HmePage } from '../Pages/HomePage'
import { Property } from '../Pages/AddPrpertyPage'

export const test=base.extend({
    login:async({page},use)=>
    {
        await use(new LoginPage(page))
    },

    homepage:async({page},use)=>
    {
        const home= new HmePage(page)
        await use(home)
    },

    AddProperty:async({page},use)=>
    {
        await use(new Property(page))
    }
})
export {expect}