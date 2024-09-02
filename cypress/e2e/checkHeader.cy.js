describe('Check Header', function () {
  it('passes', () => {
    cy.contains('h1', 'T O D O');
  });
});
