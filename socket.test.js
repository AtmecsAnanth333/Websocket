
import { test, chromium, expect,ElementHandle,Page, request, } from "@playwright/test";


test('Evaluating javascript', async()=>{
    const browser = await chromium.launch({
       headless : false
   })
   const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.meesho.com/') 



        page.waitForWebSocket(() => { // I only want Websocket x
            page.onWebSocket(webSocket =>{
                console.log("WebSocket opened: " + webSocket.url);
            });
        });
    })