import api from './../../apis/index';

describe('Cart process without login first', () => {
  
  it('add to cart and checkout', () => {

    let _email = Cypress.env('email');
    let _password = Cypress.env('password');

    api.getProfile();
    api.getProductCategory();
    api.getProducts();
    api.getProduct();
    api.getCart();
    api.addToCart();
    api.getQualification();
    api.getDonors();
    api.getReceipts();
    api.getPaymentMethods();
    api.getATMs();

    cy.visit('/donations');
    cy.wait('@getProductCategory');
    cy.wait('@getProducts');
    cy.get(".shadow-donation").first().should("be.visible");
    cy.get(".shadow-donation").first().click();

    cy.wait('@getProduct');
    cy.location().then((location) => {
      cy.wrap(location.href).should(
        "match",
        /donations\/\d+$/
      )
    });

    cy.get("[data-cy=product-detail-title]").should("be.visible");
    cy.get("[data-cy=product-variant-item]").first().should("be.visible");
    cy.get("[data-cy=addToCartPage]").first().click({ force: true });
    // cy.wait('@addToCart');
    // cy.wait('@getCart');

    cy.url({timeout: 10000}).should('contain', '/cart');
    // cy.wait('@getCart');
    cy.wait('@getQualification', {timeout: 10000});
    cy.get("[data-cy=cart-card]").should('have.length', 1);
    cy.get(".btn-cart-action.contain-btn").click({ force: true });

    cy.wait('@getProfile');
    cy.url().should('contain', '/login');
    cy.login(_email, _password);
    cy.visit('/cart');

    cy.wait('@getProductCategory');
    cy.wait('@getQualification', {timeout: 10000});
    cy.wait('@getProducts');
    cy.wait('@getCart');
    cy.get("[data-cy=cart-card]").should('have.length', 1);
    cy.get(".btn-cart-action.contain-btn").click({ force: true });

    cy.wait('@getCart');
    cy.wait('@getReceipts');
    cy.wait('@getDonors');
    cy.get('.cart-donor-form-wrapper [type="radio"]').first().check({ force: true });
    cy.get('.cart-receipt-form-wrapper [type="radio"]').first().check({ force: true });
    cy.get('.policy-checkbox [type="checkbox"]').check({ force: true });
    cy.get('.refund-checkbox [type="checkbox"]').check({ force: true });
    cy.get(".btn-cart-action.contain-btn").click({ force: true });

    cy.wait('@getCart');
    cy.wait('@getPaymentMethods');
    cy.wait('@getATMs');
    cy.get('.payment-radio-group [data-cy=payment-9]').click({ force: true });
    cy.get(".btn-cart-action.contain-btn").click({ force: true });

    cy.url().should('contain', '/donate/complete');

  })


})