const{test,expect,request} = require('@playwright/test');
const loginPayload= {"userEmail": "hadrihallisukanya@gmail.com", "userPassword" : "Jaiganesh@123"}
let token;
test.beforeAll( async()=>
{
const apiContext=  await request.newContext();
const loginResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
    {
        data: loginPayload
    })
//200,201,2

expect(loginResponse.ok()).toBeTruthy();

const loginResponsejson= await loginResponse.json()
 token=loginResponsejson.token;
console.log(token);
});

test.beforeEach( ()=>
{

});


//login with proper credintials
test('login', async({page})=>
        {
            const email ="hadrihallisukanya@gmail.com"
            const products = page.locator(".card-body");
            const productName="ZARA COAT 3";
           
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
           //Zara Coat 3
            const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
   const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   await console.log(bool);
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();

  await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }

   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);

   await page.locator("[routerlink*='myorder']").first().click();
   await page.locator("tbody").waitFor();
   const rows= await page.locator("tbody tr");
   for(let i=0; i<await rows.count(); i++)
   {
      const rowOrderId=await rows.nth(i).locator("th").textContent();
      if(orderId.includes(rowOrderId))
      {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
  const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
        });
//login with api
     test.only('loginwithToken', async({page})=>
        {
            page.addInitScript(value => {
                window.localStorage.setItem('token', value);
            },token);
           

            await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

             const email ="hadrihallisukanya@gmail.com"
            const products = page.locator(".card-body");
            const productName="ZARA COAT 3";
           
            await page.locator(".card-body b").first().waitFor();
            await page.locator(".card-body b").first().textContent();
           console.log(await page.locator(".card-body b").allTextContents());
           //Zara Coat 3
            const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
   const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   await console.log(bool);
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();

  await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }

   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);

   await page.locator("[routerlink*='myorder']").first().click();
   await page.locator("tbody").waitFor();
   const rows= await page.locator("tbody tr");
   for(let i=0; i<await rows.count(); i++)
   {
      const rowOrderId=await rows.nth(i).locator("th").textContent();
      if(orderId.includes(rowOrderId))
      {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
  const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
        });   