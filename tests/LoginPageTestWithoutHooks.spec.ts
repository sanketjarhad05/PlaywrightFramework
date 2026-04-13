import{test,expect} from "@playwright/test";
import{LoginPage} from "../pages/LoginPage";

const url ="https://rahulshettyacademy.com/client/";
const username = "sanketjarhad17@gmail.com";
const password = "Sanket@123";
const incorrectPassword = "wrongpassword";

test("Valid Login Test", async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.launchUrl(url);
    await loginPage.loginIntoApplication(username,password);
    await expect(loginPage.homePageIdentifier).toBeVisible(); 

})

test("Invalid Login Test", async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.launchUrl(url);
    await loginPage.invilidLogin(username,incorrectPassword);
    await expect(loginPage.errorMsg).toBeVisible();
})