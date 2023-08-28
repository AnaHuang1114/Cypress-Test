describe('login to navigate', () => {
  

  it('login', () => {
    // cy.visit('/login');
    // cy.intercept('POST', '/login/password').as('login');

    // cy.get("[data-cy=login_email]").should("be.visible");
    // cy.get("[data-cy=login_password]").should("be.visible");
  
    // // Enter username and password in form inputs
    // cy.get("[data-cy=login_email]").type('bpud50122+1@gmail.com', { force: true });
    // cy.get("[data-cy=login_password]").type('Zaq12345', { force: true }).type("{enter}"); // '{enter}' submits the form

    // // cy.wait(2000);
    // // cy.location("pathname").should("include", "/donations");
    // cy.wait('@login');
    // cy.location().then((location) => {
    //   cy.wrap(location.href).should(
    //     "contain",
    //     "/donations"
    //   )
    // })
    // cy.get("[data-cy=username]").should("be.visible");
    let _account = Cypress.env('email')
    let _password = Cypress.env('password')
    cy.login(_account, _password);
    cy.visit('/donations');
  })

  // it('sign_up', () => {
  //   cy.visit('/register');

  //   cy.get("[data-cy=signup_email]").should("be.visible");
  //   cy.get("[data-cy=signup_password]").should("be.visible");

  //   cy.get("[data-cy=signup_email]").type('bpud50122+test07@gmail.com', { force: true });
  //   cy.get("[data-cy=signup_password]").type('Zaq12345', { force: true });
  //   cy.get("[data-cy=signup_confirm_password]").type('Zaq12345', { force: true });

  //   cy.get("[data-cy=register_btn]").click();
  //   // cy.get('.registerDialog').should("be.visible", { force: true });
  //   // cy.get('.el-dialog__title').should("contains", "請至信箱收取驗證信");
  //   cy.wait(2000);
  //   cy.get("[data-cy=dialog_confirm_btn]").click();
  //   cy.wait(2000);
  //   cy.get("[data-cy=dialog_confirm_btn]").click();
    
  //   cy.url().should("contains", "/donations");

  // })
})
