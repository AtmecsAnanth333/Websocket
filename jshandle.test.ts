import { test, chromium, expect,ElementHandle,Page, request, } from "@playwright/test";
import Env from "../utills/environment";
test("api put response", async ({request,page})=>{

    const response = await request.put(Env.putApiLink, {
        data: {name:"test",salary:"123",age:"23"}
       });
       
    
    expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(await response.json());
   

const aHandle = await page.evaluateHandle(() => document.body);
const resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);
console.log(await resultHandle.jsonValue());
await resultHandle.dispose();
    })