import{test,expect} from "@playwright/test";
import{LoginPage} from "../pages/LoginPage";
import {ENV} from '../Utils/Env';

let loginPage: LoginPage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.launchUrl(ENV.Url);
})
test("Valid Login Test", async()=>{
    console.log('ENV.Url:', ENV.Url);
    console.log('ENV.username:', ENV.username);
    console.log('ENV.password:', ENV.password);
  
    await loginPage.loginIntoApplication(ENV.username, ENV.password);
    await expect(loginPage.homePageIdentifier).toBeVisible(); 

})

test("Invalid Login Test", async()=>{

    await loginPage.invilidLogin(ENV.username,ENV.incorrectPassword);
    await expect(loginPage.errorMsg).toBeVisible();
})