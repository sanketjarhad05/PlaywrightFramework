import { test, expect } from 'playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

import data from '../TestData/product.json' with { type: 'json' };

let loginPage : LoginPage;
let dashboardPage : DashboardPage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.launchUrl(data.url);
    await loginPage.loginIntoApplication(data.username,data.password);

})

test("Add the product to the cart",async()=>{
    await dashboardPage.searchAndAddProductToCart(data.productName);       
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText(data.cartSuccessMsg);
})

test("validate the product details",async()=>{
    await dashboardPage.searchAndValidateProductDetails(data.productName);
    await expect(dashboardPage.viewProductName).toHaveText(data.productName)

})