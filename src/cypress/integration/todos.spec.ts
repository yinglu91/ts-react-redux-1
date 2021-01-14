/// <reference types="cypress" />
export { }

describe('Todos', () => {
  it('can fetch todos and delete the first todo', () => {
    //cy.visit('https://codedamn.com')

    // cy.visit('http://localhost:3000/')

    cy.visit('/')

    cy.contains('Fetch').click()

    cy.get('#1').click()
  })
})