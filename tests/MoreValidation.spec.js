const{test,expect}=require('@playwright/test')

test('More validation', async({page})=>
{
//    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
// await page.goto("https://google.com");
// await page.goBack();
// await page.goForward();
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect(page.locator('#displayed-text')).toBeVisible()
await page.locator('#hide-textbox').click();
await expect(page.locator("#displayed-text")).toBeHidden();
page.pause();
page.on('dialog' ,dialog=> dialog.accept());
await page.locator('#confirmbtn').click();
await page.locator('#mousehover').hover();
const framepage= page.frameLocator('#courses-iframe');
await framepage.locator("li a[href*='lifetime-access']:visible").click();
const textcheck=await framepage.locator(".text h2").textContent();
console.log(textcheck.split(" ")[1]);
});