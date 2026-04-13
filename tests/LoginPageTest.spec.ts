import{test,expect} from "@playwright/test";
import{LoginPage} from "../pages/LoginPage";

const url ="https://rahulshettyacademy.com/client/";
const username = "sanketjarhad17@gmail.com";
const password = "Sanket@123";
const incorrectPassword = "wrongpassword";
let loginPage: LoginPage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.launchUrl(url);
})
test("@smoke Valid Login Test", async()=>{
  
    await loginPage.loginIntoApplication(username,password);
    await expect(loginPage.homePageIdentifier).toBeVisible(); 

})

test("Invalid Login Test",{tag: '@smoke'}, async()=>{

    await loginPage.invilidLogin(username,incorrectPassword);
    await expect(loginPage.errorMsg).toBeVisible();
})












// {tag: '@tagname'}
// Tag the test inside the title of the test case