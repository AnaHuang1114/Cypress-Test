export default class {
  static getProfile() {
    return cy.intercept('GET', '**/member/profile').as('getProfile');
  }

  static getProductCategory() {
    return cy.intercept('GET', '**/product-categories').as('getProductCategory');
  }

  static getProducts() {
    return cy.intercept('GET', '**/products?*').as('getProducts');
  }

  static getProduct() {
    return cy.intercept('GET', '**/products/**').as('getProduct');
  }

  static getCart() {
    return cy.intercept('GET', '**/member/cart-items').as('getCart');
  }

  static addToCart() {
    return cy.intercept('POST', '**/member/cart-items').as('addToCart');
  }

  static getQualification() {
    return cy.intercept('POST', '**/free-gift-offers/get-qualification').as('getQualification');
  }

  static getDonors() {
    return cy.intercept('GET', '**/member/donors').as('getDonors');
  }

  static getReceipts() {
    return cy.intercept('GET', '**/member/receipts').as('getReceipts');
  }

  static getPaymentMethods() {
    return cy.intercept('GET', '**/member/payment-methods').as('getPaymentMethods');
  }

  static getATMs() {
    return cy.intercept('GET', '**/banks/atm').as('getATMs');
  }

  static forgetPassword() {
    return cy.intercept('POST', '**/forget/password').as('forgetPassword');
  }

  static getPages() {
    return cy.intercept('GET', '**/pages/**').as('getPages');
  }

  static getPageBanner() {
    return cy.intercept('GET', '**/pages?**').as('getPageBanner');
  }

  static createOrder() {
    return cy.intercept('POST', '**/member/orders').as('createOrder');
  }

  static createPayment() {
    return cy.intercept('POST', '**/member/orders/**/payments').as('createPayment');
  }
}