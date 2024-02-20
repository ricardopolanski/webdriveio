describe('Ecomerce Application', () => {
    it('Login Fail Page', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        console.log(await browser.getTitle());

    })
})