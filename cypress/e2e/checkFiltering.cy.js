describe('Check Filtering', function () {
  it('Check Filtering', function () {
    cy.get('[data-cy=add-task]').type('New Task 1{enter}');
    cy.get('[data-cy=task-item]').first().as('firstTask');

    cy.get('[data-cy=add-task]').type('New Task 2{enter}');
    cy.get('[data-cy=task-item]').eq(1).as('secondTask');

    cy.get('[data-cy=add-task]').type('New Task 3{enter}');
    cy.get('[data-cy=task-item]').eq(2).as('secondTask');
    cy.get('@firstTask').find('[data-cy=complete-checkbox]').check();

    cy.get('[data-cy=filter-completed]').click();
    cy.get('[data-cy=task-item]').should('have.length', 1);

    cy.get('[data-cy=filter-all]').click();
    cy.get('[data-cy=task-item]').should('have.length', 3);

    cy.get('[data-cy=filter-active]').click();
    cy.get('[data-cy=task-item]').should('have.length', 2);
  });
});
