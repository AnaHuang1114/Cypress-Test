import api from './../../apis/index';

describe('forget password page', () => {
  

  it('type email address to get a reset password email', () => {
    cy.visit('/login');
    cy.wait(6000)
    api.forgetPassword();
    cy.get('.forget-password').click();
    cy.url().should("contains", "/forget-password");
    cy.get("[data-cy=password]").eq(0).should("be.visible");
    let _email = Cypress.env('email');
    cy.get("[data-cy=password]").eq(0).type(_email, { force: true });
    cy.get("[data-cy=send]").click();
    cy.wait('@forgetPassword');

    cy.get('.password-dialog').should("be.visible");
    cy.get('.password-dialog .contain-btn').click({ force: true });
    cy.get('.password-dialog').should("not.be.visible");

  })

})
