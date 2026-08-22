const{test,expect}=require('@playwright/test')

test('More validation', async({page})=>
{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.goto("https://google.com");
await page.goBack();
await page.goForward();
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect(page.locator('#displayed-text')).toBeVisible()
await page.locator('#hide-textbox').click();
await expect(page.locator("#displayed-text")).toBeHidden();


});