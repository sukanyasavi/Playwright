const{test,expect} = require('@playwright/test')

test('DifferentLocators', async({page})=>
{
    //test level wait for expect
    const slowExpect= expect.configure({timeout:9000});
    //test level wait for actions
     page.setDefaultTimeout(9000);
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    //check the chebox
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    //select the radio button employed
    await page.getByLabel("Employed").check();
    //select the dropdown female
    await page.getByLabel("Gender").selectOption("Female");
    //enter the password using placeholder
    await page.getByPlaceholder("Password").fill("Sukanya");
    //Click the submit using getbyrole
    await page.getByRole("button", {name:'Submit'}).click();
    //chek the text is visible by getbytext method
    await page.getByText(" The Form has been submitted successfully!.").isVisible();
    //at the each expect level 
    await expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout: 10_000});

    await slowexpect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link", {name: "Shop"}).click({timeout:15000});
    await page.locator("app-card").filter({hasText: "Samsung Note 8"}).getByRole("button").click();
})
