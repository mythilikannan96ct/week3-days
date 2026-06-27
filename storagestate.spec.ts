import {test,expect } from "@playwright/test"
test.setTimeout(120000)

test("storage state", async ({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/main")
   // await page.locator('#username').fill('democsr')
   // await page.locator('#password').fill('crmsfa')
   // await page.locator('.decorativeSubmit').click()
    await page.context().storageState({path:'leaftapsAuth.json'})
    await page .waitForTimeout(20000)

})
//skip login

//import {test}  from "@playwright/test"

test.use({
    storageState:'leaftapsAuth.json'
})


test("Skip login using storageState",async ({page}) => {
await page.goto('http://leaftaps.com/opentaps/control/main')
 
//await page.goto('https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL953948287421')
//await page.locator('//a[text()="Leads"]').click()
await expect(page.getByRole('link', { name: 'CRM/SFA' })).toBeVisible()

})

    
