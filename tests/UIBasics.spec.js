//const {test, expect} = require('@playwright/test');
const { test, expect } = require('@playwright/test');

//to check for the title of the page
test('check title of google page',async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto('https://www.google.com/');
   console.log(await page.title());
  await expect(page).toHaveTitle('Google');

});

//Invalid credintials
test('login with invalid credentials', async({browser})=>
{
   const context =await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
   await  expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
   await page.locator('#username').fill("rahulshetty");
   await page.locator('#password').fill("learning");
   await page.locator("[type='submit']").click();
   console.log(await page.locator("[style*='none']").textContent());
   await expect(page.locator("[style*='none']")).toContainText("Incorrect");   
});

//Valid credintials
test('login with valid credentials', async({browser})=>
{
   const context =await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
   await  expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
   await page.locator('#username').fill("rahulshettyacademy");
   await page.locator('#password').fill("Learning@830$3mK2");
   await page.locator("[type='submit']").click(); 
   
});
