describe('Check if todo is deleted', function () {
  it('should delete a task from the list', () => {
    cy.get('[data-cy=add-task]').type('New Task{enter}');
    cy.get('[data-cy=task-item]').first().as('firstTask');

    cy.get('@firstTask').find('[data-cy=delete-button]').click({ force: true });
    cy.contains('@firstTask').should('not.exist');
  });
});
