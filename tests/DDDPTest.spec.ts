import { test, expect } from 'playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

import products from '../TestData/dataDriven.json' with { type: 'json' };
console.log(products);

let loginPage : LoginPage;
let dashboardPage : DashboardPage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    

})
// Parameterization of test case - title
for (let data of products){

test(`validate the product details for ${data.productName}`,async()=>{
     await loginPage.launchUrl(data.url);
    await loginPage.loginIntoApplication(data.username,data.password);
    await dashboardPage.searchAndValidateProductDetails(data.productName);
    await expect(dashboardPage.viewProductName).toHaveText(data.productName)

})
}