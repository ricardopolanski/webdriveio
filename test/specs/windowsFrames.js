import { expect as expectChai } from 'chai'

describe('Windows and Frames', async () => {
    it('Parent and Child Windows Switch', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await $('.blinkingText').click()
        const window = await browser.getWindowHandles()
        await browser.switchToWindow(window[1])
        const h1Text = await $("h1").getText()
        expectChai(h1Text).to.be.eq('DOCUMENTS REQUEST')
        await browser.closeWindow()
        await browser.switchToWindow(window[0])
        await browser.getTitle()
    });

    it('Open New Window', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await browser.newWindow('http://google.com')
        console.log(await browser.getTitle())
    })

})