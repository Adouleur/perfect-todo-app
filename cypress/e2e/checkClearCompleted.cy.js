describe('Check clear completed', function () {
  it('should clear completed tasks', () => {
    cy.get('[data-cy=add-task]').type('New Task 1{enter}');
    cy.get('[data-cy=add-task]').type('New Task 2{enter}');
    cy.get('[data-cy=add-task]').type('New Task 3{enter}');

    cy.get('[data-cy=task-item]').first().as('firstTask');
    cy.get('@firstTask').find('[data-cy=complete-checkbox]').check();
    cy.get('[data-cy=clear-completed]').click();
    cy.get('[data-cy=task-item]').should('have.length', 2);
  });
});
