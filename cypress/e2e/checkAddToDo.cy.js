describe('adds Todo succsesfully', function () {
  it('should add a task and verify it appears in the list', () => {
    cy.get('[data-cy=add-task]').type('New Task{enter}');
    cy.get('[data-cy=task-item]').should('contain', 'New Task');
  });
});
