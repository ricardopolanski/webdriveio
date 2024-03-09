describe('UI Controls Test Suit', () => {
    
    it('UI Controls', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await $("#username").setValue("rahulshettyacademy");
        await $("//input[@type='password']").setValue("learning");
        // $$ gets all elements
        const radioButtons = await $$(".radiotextsty")
        const userRadioButton = radioButtons[1]
        const adminRadioButton = radioButtons[0]
        userRadioButton.click();
        const modal = await $('.modal-body');
        await modal.waitForDisplayed();
        const cancelBtn = await $("#cancelBtn");
        await expect(cancelBtn).toBeEnabled()
        await cancelBtn.click();
        await expect(modal).not.toBeDisplayed();
        await $$('.customradio')[0].$('span').isSelected()
        await adminRadioButton.click();
        await expect(modal).not.toBeDisplayed();
        const dropDown = await $('select.form-control');
        await dropDown.selectByAttribute('value', 'teach')
        // await browser.pause(5000)
        // (await $('#terms')).click()
        // dropDown.selectByVisibleText('Teacher')
        await $("#signInBtn").click();        
    })
})