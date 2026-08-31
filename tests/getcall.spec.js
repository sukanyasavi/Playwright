// @ts-check
import { test, expect } from '@playwright/test';

test('get requst', async ({ request }) => {
  const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1");
const respbody=await resp.body();
const respheaders= resp.headers();
const respjson=await resp.json();
const resptatus= resp.status();
const respstatustext= resp.statusText();
const responseheadersarray= resp.headersArray();

expect(resptatus).toBe(200);
expect(respstatustext).toBe("OK");
expect(resp.ok()).toBeTruthy();
//expect(respheaders).toHaveProperty("content-type");
expect(respjson).toHaveProperty("userId",1);
expect(respjson).toHaveProperty("id",1);
expect(respjson).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
console.log(respjson.body);

//expect(respjson.body).toContain("quia et susscipit")


});
  

