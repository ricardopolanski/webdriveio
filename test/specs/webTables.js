import { expect as expectChai } from 'chai'

describe('Web Tables Tests', () => {
    it('', async () => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        await $('tr th:nth-child(1)').click()
        const list = await $$('tr td:nth-child(1)')
        
        const veggiesNames = await list.map(veggies => veggies.getText())
        const sortedVeggies = veggiesNames.sort()
        expectChai(veggiesNames).to.eq(sortedVeggies)
    })
})
