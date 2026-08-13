
const {test} = require('@playwright/test');

test('fetch the title of iphone', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator("#username");
    const password = page.locator("#password");
    const signIn = page.locator("[type='submit']");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
   const  allTitles=await cardTitles.allTextContents();
    consol.log(allTitles);   
})

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