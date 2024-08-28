describe('Check Completed', function () {
  it('should mark a task as completed', () => {
    cy.get('[data-cy=add-task]').type('New Task{enter}'); // Type and hit Enter
    cy.get('[data-cy=task-item]').first().as('firstTask'); // Alias for the first task
    cy.get('@firstTask').find('[data-cy=complete-checkbox]').check();
    cy.get('@firstTask').find('[data-cy=task-text]').should('have.class', 'completedTask');
  });
});
