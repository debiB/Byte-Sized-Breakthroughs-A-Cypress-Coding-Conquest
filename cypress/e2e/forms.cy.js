describe("form test", () => {
    beforeEach(() => {
        cy.visit('/forms') // Visiting the form page before each test
    })

    it('Test subscribe form', () => {
    cy.contains(/testing forms/i) // Verifying that the form is present on the page
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input') // Finding the input field inside the form
    cy.get('@subscribe-input').type('deborahberhanu644@gmail.io')
    cy.contains(/invalid email: deborahberhanu644@gmail.io!/i).should('not.exist') 
    cy.getDataTest('subscribe-button').click()
    cy.contains(/invalid email: deborahberhanu644@gmail.io!/i, { timeout: 10000 }).should('exist') 
    cy.wait(3000)
    cy.contains(/invalid email: deborahberhanu644@gmail.io!/i).should('not.exist') 
})
})
