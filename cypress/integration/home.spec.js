describe('home page', () => {
  it('search a movie', () => {
    cy.visit(Cypress.env('APP_URL'));

    cy.get('.bx--search-input').type('Enola Holmes').should('have.value', 'Enola Holmes');
  });
});
