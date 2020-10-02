describe('home page', () => {
  it('search a movie', () => {
    cy.visit('/');

    cy.get('.bx--search-input').type('Enola Holmes').should('have.value', 'Enola Holmes');
  });
});
