describe('Ecomerce Application', () => {
    it('Login Fail Page', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await expect(browser).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
        console.log(await browser.getTitle());
        await $("#username").setValue("testing")
        await $("#password").setValue("password")
        await $("#signInBtn").click();
        await browser.pause(3000)
        const text = (await($(".alert-danger").getText()))
        await console.log(text)
    })
})