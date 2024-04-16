
describe('various examples', () => {
    beforeEach(()=>{
        cy.visit('/examples')
    
    })
    it('multi page testing', () => {
        cy.getDataTest('nav-why-cypress').click()
        cy.location('pathname').should('equal', '/')
       cy.getDataTest('nav-overview').click()
        cy.location('pathname').should('equal', '/overview')
        cy.getDataTest('nav-fundamentals').click()
        cy.location('pathname').should('equal', '/fundamentals')
        cy.getDataTest('nav-forms').click()
        cy.location('pathname').should('equal', '/forms')
        cy.getDataTest('nav-component').click()
        cy.location('pathname').should('equal', '/component')
        cy.getDataTest('nav-best-practices').click()
        cy.location('pathname').should('equal', '/best-practices')
    })
    it('intercepts', () => {
        cy.contains(/example 2/i)
        cy.intercept('POST', 'http://localhost:3000/examples', {
            fixture: 'example.json'
        })
        cy.getDataTest('post-button').click()
    })
    it.only('grudges', () =>{
        cy.contains(/add some grudges/i)
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })
        cy.getDataTest('grudge-list-title').should('have.text', 'Add Some Grudges')
        
        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('test grudge')

        })
        cy.getDataTest('clear-button').should('not.exist')
        cy.getDataTest('add-grudge-button').click()
         cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1)
            cy.get('li').its(0).should('contains.text', 'test grudge')
        })
         cy.getDataTest('grudge-list-title').should('have.text', 'Grudges')
         cy.getDataTest('grudge-list').within(() => {
            cy.get('li').its(0).within(() => {
                cy.get('button').click()
            
            }) 
        })
         cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
           
        })
        // cy.getDataTest('clear-button').click()
    })
})