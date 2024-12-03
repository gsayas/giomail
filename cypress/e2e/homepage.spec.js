describe('Email List', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the email list', () => {
        cy.get('.email-list-item').should('have.length.greaterThan', 0);
    });

    it('should filter unread emails', () => {
        cy.contains('Unread').click();
        cy.get('.email-list-item').should('have.length', 0);
    });

    it('should display email details on click', () => {
        cy.get('.email-list-item').first().click();
        cy.get('.email-detail').should('be.visible');
    });
});