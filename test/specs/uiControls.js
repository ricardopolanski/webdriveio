import { expect as expectChai } from 'chai'

describe('UI Controls Test Suit', () => {
    
    it('Dynamic Dropdown Controls', async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice");
        const countries = await $("#autocomplete")
        await countries.click()
        await countries.setValue("ind")
    
        // Wait for the dropdown items to be displayed
        await $("#ui-id-1").waitForDisplayed({ timeout: 10000 });
    
        let countriesMatchList = await $$("[class='ui-menu-item'] div")
        for(var i = 0; i < countriesMatchList.length; i++) {
            if (await countriesMatchList[i].getText() === "India")
            {
                await countriesMatchList[i].click()
            }
        }
    })

    it.only('Scrolling and Mouse Hover', async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice");
        await $("#mousehover").scrollIntoView();
        await $('.mouse-hover-content').isDisplayed()
    })

    it('Check Boxes', async () => { 
        await browser.url("https://rahulshettyacademy.com/AutomationPractice");
        const checkBoxes = await $$("input[type='checkbox']");
        checkBoxes[1].click()
        checkBoxes[1].isSelected()
        //browser.saveScreenshot("screenShot.png")
    })
   
    it('UI Controls 2', async () => {

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
        expectChai(await dropDown.getValue()).to.equal('teach')
        // await browser.pause(5000)
        await $('#terms').click()
        dropDown.selectByVisibleText('Teacher')
        await $("#signInBtn").click();        
    })
})
