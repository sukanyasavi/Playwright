import { test } from '@playwright/test';

test('textContentInputValue', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  let title = await page.title(); 
  console.log('Title:', title);
  const username = await page.locator('label[for="username"]').textContent();
  await console.log('Text content:', username);
  await page.locator('label[for="username"]').fill("sukanya");
  console.log(await page.locator('label[for="username"]').inputValue());
});