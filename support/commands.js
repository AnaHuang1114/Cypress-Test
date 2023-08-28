// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// login
Cypress.Commands.add('login', (email, password) => {
  let _username = Cypress.env('basicAuthUserName');
  let _password = Cypress.env('basicAuthUserPassword');
  cy.session(
    email,
    () => {
      // cy.visit('/login', {
      //   auth: {
      //     username: _username,
      //     password: _password
      //   }
      // });
      cy.visit('/login')
      cy.wait(6000)
      cy.intercept('POST', '**/login/password').as('login')
      cy.get("[data-cy=login_email]").as('login_email_input')
      cy.get("[data-cy=login_password]").as('login_password_input')
      
      cy.get('@login_email_input').should("be.visible")
      cy.get('@login_password_input').should("be.visible")
    
      // Enter username and password in form inputs
      cy.get('@login_email_input').type(email, { force: true })
      cy.get('@login_password_input').type(password, { force: true })
      cy.get('[data-cy=loginRegsiter_btn]').click({ force: true })

      // cy.wait(2000);
      // cy.location("pathname").should("include", "/donations");
      cy.wait('@login', {timeout: 8000})
      cy.location().then((location) => {
        cy.wrap(location.href).should(
          "contain",
          "/donations"
        )
      })
      cy.get("[data-cy=username]").as('username')
      cy.get("@username").should("be.visible")
    },
    {
      validate: () => {
        cy.getCookie('userInfo').should('exist')
      },
    }
  )
})

// sign up
Cypress.Commands.add('signup', (account, password) => {
  cy.request('POST', '/signup', {
      account: account,
      password: password
    })
})