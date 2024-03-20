import { expect as expectChai } from 'chai';

describe('Alert popup', () => {

    it('should accept the alert', async () => {
        await browser.url(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert`);
        await browser.pause(3000);
        let frame = await browser.$('#iframeResult');
        await browser.switchToFrame(frame);
        await $("button=Try it").click(); //triggers the alert popup
        const isAlertOpen = await browser.isAlertOpen(); //get the status of alert open or not
        expectChai(isAlertOpen).to.be.true
        if (isAlertOpen) {
            const alertText = await browser.getAlertText(); //get the alert text
            expectChai(alertText).to.be.equal("I am an alert box!")
            console.log("The alert text is: ", alertText) //logs the text to console
            await browser.acceptAlert(); //accepts the alert popup
        }
    });
});