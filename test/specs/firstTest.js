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
})