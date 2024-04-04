import { expect as expectChai } from 'chai'

describe('Web Tables Tests', () => {
    it('Sort Table Vales', async () => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        await $('tr th:nth-child(1)').click()
        const list = await $$('tr td:nth-child(1)')
        
        const veggiesNames = await list.map(veggies => veggies.getText())
        const sortedVeggies = veggiesNames.sort()
        expectChai(veggiesNames).to.eq(sortedVeggies)
    })

    it('Search Field', async () => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        await $('#search-field').setValue('Tomato')
        const veggieLocator = await $$('tr td:nth-child(1)')
        
        expect(veggieLocator).toBeElementsArrayOfSize( { eq:1 } )
        const veggie = await veggieLocator[0].getText()
        expectChai(veggie).to.be.eq('Tomato')
    })
})
