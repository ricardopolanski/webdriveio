describe('Ecomerce Application', () => {
    it('Login Fail Page', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await expect(browser).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
        console.log(await browser.getTitle());
        await $("#username").setValue("testing")
        await $("#password").setValue("password")
        await $("#signInBtn").click();
        const text = (await($(".alert-danger").getText()))
        const alertBox = await $(".alert-danger")
        expect(alertBox).toHaveText('Incorrect username/password.')
        expect(text).toHaveText('Incorrect username/password.')
    })

    it('Xpath test', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await $("#username").setValue("testing");
        await $("//input[@type='password']").setValue("testingPassword");
        await $("#signInBtn").click();
        
    })

    it('Wait Until', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await $("#username").setValue("testing");
        await $("//input[@type='password']").setValue("testingPassword");
        await $("#signInBtn").click();
        await browser.waitUntil(async () => await $("#signInBtn").getAttribute('value') === 'Sign In',
        {
            timeout: 5000,
            timeoutMsg: 'The Expected Text To Be Different After 5 Seconds'
        });
        const text = (await($(".alert-danger").getText()))
        const alertBox = await $(".alert-danger")
        expect(alertBox).toHaveText('Incorrect username/password.')
        expect(text).toHaveText('Incorrect username/password.')
    })

    it.only('Xpath test', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await $("#username").setValue("rahulshettyacademy");
        await $("//input[@type='password']").setValue("learning");
        await $("#signInBtn").click();
        expect(browser).toHaveUrl("https://rahulshettyacademy.com/angularpractice/shop")
        expect(browser).toHaveUrl(expect.stringContaining("angularpractice/shop"))
        await browser.pause(5000)
        
    })
})