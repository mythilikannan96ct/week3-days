import { test } from '@playwright/test'
 
test('Create a Lead', async ({ page }) => {
  await page.goto('https://leaftaps.com/opentaps/control/main')
 
  await page.locator('#username').fill('demoCSR2')
  await page.locator('#password').fill('crmsfa')
  await page.locator('.decorativeSubmit').click()
 
  await page.getByRole('link', { name: 'CRM/SFA' }).click()
  await page.getByRole('link', { name: 'Leads', exact: true }).click()
  await page.getByRole('link', { name: 'Create Lead' }).click()
 
  await page.locator('#createLeadForm_companyName').fill('Anthropic')
  await page.locator('#createLeadForm_firstName').fill('Mythili')
  await page.locator('#createLeadForm_lastName').fill('kannan')
  await page.locator('#createLeadForm_personalTitle').fill('Mr.')
  await page.locator("#createLeadForm_generalProfTitle").fill(" Engineer")
 // await page.locator('#createLeadForm_title').fill('QA Engineer')
  await page.locator('#createLeadForm_annualRevenue').fill('500000')
  await page.locator('#createLeadForm_departmentName').fill('Quality Assurance')
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210')
 
  await page.locator('.smallSubmit').click();
})