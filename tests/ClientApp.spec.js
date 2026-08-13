const {test} = require('@playwright/test');

// //Practice for lets shop
// test('register', async({browser})=>
//     {
//        const context=await  browser.newContext();
//        const page =await context.newPage();
//        await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
//        await page.locator("#firstName").fill("Sukanya");
//        await page.locator("#lastName").fill("HS");
//        await page.locator("#userEmail").fill("hadrihallisukanya@gmail.com");
//        await page.locator("#userMobile").fill("+4915565964362");
//        await page.locator("[[type='radio'][value='Female']").click();
//        await page.locator("[formcontrolname='occupation']").selectOption("Student");
//          await page.locator("#userPassword").fill("Jaiganesh@123");
//          await page.locator("#confirmPassword").fill("Jaiganesh@123");
//             await page.locator("[type='checkbox']").click();
//          await page.locator("[type='submit']").click();

//          });
 
         test('login', async({page})=>
        {

            await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
            await page.locator("#userEmail").fill("hadrihallisukanya@gmail.com");
           await  page.locator("#userPassword").fill("Jaiganesh@123");
            await page.locator("[type='submit']").click();
            await page.title();
            console.log(await page.title());
            await page.waitForLoadState('networkidle');
            await page.locator(".card-body b").first().waitFor();
            await page.locator(".card-body b").first().textContent();
           console.log(await page.locator(".card-body b").allTextContents());

        })