// const{test, expect} = require('@playwright/test');

// test('textContentInputValue', async({browser})=>
// {
//   const context=await browser.newContext();
//   const page =await context.newPage();
//   await page.goto("https://www.google.com");
// //  await page.locator('#L2AGLb').click();

// // Or target by button text (English / German)
// await page.getByRole('button', { name: /(accept all|alle akzeptieren)/i }).click();
// let title= await page.title(); 
// console.log(title);
// const text=await page.locator(".ESTs9d").textContent();
// await console.log(text);

// //let content= await page.locator("#gbqfbb").textContent();
//  //await console.log(content);
// })

import { test } from '@playwright/test';

test('textContentInputValue', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // Accept cookies modal if present
 // await page.getByRole('button', { name: /(accept all|alle akzeptieren)/i }).click();

  let title = await page.title(); 
  console.log('Title:', title);

  // Get text content from selector
  const username = await page.locator('label[for="username"]').textContent();
  await console.log('Text content:', username);
  await page.locator('label[for="username"]').fill("sukanya");
  console.log(await page.locator('label[for="username"]').inputValue());
});