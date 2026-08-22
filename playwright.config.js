// @ts-check

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',

  
  //max time for each test case
  timeout  : 30*1000,
  //max time for expect or asssertion
  expect  : {
    timeout : 5000
  },
reporter : 'html',
 
  use      : { 
       actionTimeout:10*1000,
    navigationTimeout: 30*1000,
    browserName : 'chromium',
    headless    : false,
    screenshot: 'on',
    //trace: 'on'
    trace: 'retain-on-failure'
  },
});

module.exports = config;