import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ExcelUtils } from '../Utils/ExcelUtils'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const filePath = join(__dirname, '../TestData/DataDriven.xlsx')
const sheetName = 'login'

let products: any[] = []
try {
  products = await ExcelUtils.getExcelData(filePath, sheetName) ?? []
} catch (error) {
  console.error('Error reading Excel file:', error)
}

let loginPage: LoginPage
let dashboardPage: DashboardPage

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  dashboardPage = new DashboardPage(page)
})

// Parameterization of test case - title
for (const data of products) {
  test(`validate the product details for ${data.productName}`, async () => {
    await loginPage.launchUrl(data.url)
    await loginPage.loginIntoApplication(data.username, data.password)
    await dashboardPage.searchAndValidateProductDetails(data.productName)
    await expect(dashboardPage.viewProductName).toHaveText(data.productName)
  })
}
