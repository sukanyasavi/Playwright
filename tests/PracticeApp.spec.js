
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

