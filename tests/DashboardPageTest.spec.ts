import{test,expect} from "playwright/test";
import{LoginPage} from '../pages/LoginPage';
import{DashboardPage} from '../pages/DashboardPage';

const url ="https://rahulshettyacademy.com/client/";
const username = "sanketjarhad17@gmail.com";
const password = "Sanket@123";
const incorrectPassword = "wrongpassword";  
const productName = "iphone 13 pro";
 const cartSuccessMsg = "Product Added To Cart";

let loginPage : LoginPage;
let dashboardPage : DashboardPage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.launchUrl(url);
    await loginPage.loginIntoApplication(username,password);

})

test("Add the product to the cart",async()=>{
    await dashboardPage.searchAndAddProductToCart(productName);       
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText(cartSuccessMsg);
})

test("validate the product details",async()=>{
    await dashboardPage.searchAndValidateProductDetails(productName);
    await expect(dashboardPage.viewProductName).toHaveText(productName)

})