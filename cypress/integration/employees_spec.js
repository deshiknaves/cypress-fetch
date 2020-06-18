describe('Employees', () => {
  it('visits employees', () => {
    cy.server()
    cy.route('GET', /employees/, ).as('getEmployees')
    cy.visit('http://localhost:3001')
    cy.wait('@getEmployees')
    cy.get('.employee').contains('Tiger').should('be.visible')
  })
})