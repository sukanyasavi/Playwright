
const{test,expect} = require('@playwright/test');

test('dropdownAndRadioButtonAndTermsAndBlinkLink', async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const username = page.locator("#username");
const signIn = page.locator("[signInBtn");
const dropdown=  page.locator("select.form-control");
const documentLink = page.locator("[href*='documents-request']");
await dropdown.selectOption("consult");
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
console.log(await page.locator(".radiotextsty").last().isChecked());
await expect(page.locator(".radiotextsty").last()).toBeChecked();
await page.locator("#terms").click();
await expect( page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();
await expect(documentLink).toHaveAttribute("class","blinkingText");

const [newPage] = await Promise.all(
    [
context.waitForEvent('page'),
documentLink.click(),
])

const text = await newPage.locator(".red").textContent();
const arraytext= text.split("@");
const domain= arraytext[1].split(" ")[0];
console.log(domain);
await page.locator("#username").fill(domain);
console.log(await page.locator("#username").inputValue());
await page.pause();

});

